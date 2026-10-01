import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';
import { exercises, renderTab, transposeText } from '../src/data/guitar.ts';
import { annotate, renderLesson, lessons, glossary } from '../src/data/guitar-lessons.ts';
import { buildSequence, clampTempo, frequency, scheduleNote } from '../src/lib/guitar-playback.ts';

test('every lick/chord has four varied bars; theory has two; all transposed tabs align', () => {
  assert.equal(new Set(exercises.map(e => e.id)).size, exercises.length);
  for (const exercise of exercises) {
    assert.equal(exercise.cells.length, exercise.kind === 'theory' ? 16 : 32);
    assert.notDeepEqual(exercise.cells.slice(0,8), exercise.cells.slice(8,16));
    for (const cell of exercise.cells) {
      assert.equal(cell.length, 6);
      cell.forEach(note => assert.match(note, /^(?:-|\d+(?:[hp/]\d+)?)$/));
    }
    for (const offset of [0, 2, 3, 5]) {
      const bars = renderTab(exercise, offset).split('\n\n');
      assert.equal(bars.length, exercise.cells.length / 8);
      bars.forEach((bar, index) => {
        const rows = bar.split('\n');
        assert.equal(rows[0], `BAR ${index + 1}`);
        assert.equal(rows.length, 8);
        assert.equal(new Set(rows.slice(2).map(row => row.length)).size, 1);
        for (let i = 0; i < 8; i++) {
          for (let string = 0; string < 6; string++) {
            const expected = exercise.cells[index * 8 + i][string].replace(/\d+/g, fret => Number(fret) + offset);
            assert.equal(rows[string + 2].slice(2 + i * 7, 2 + (i + 1) * 7), expected.padEnd(7, '-'));
          }
        }
      });
    }
    assert.ok(lessons[exercise.id].length >= 2);
    assert.match(renderLesson(exercise.id), /<details class="lesson">/);
    assert.match(annotate(exercise.theory), /<details class="term">/);
  }
  assert.equal(transposeText('Dm9 → G13 → Cmaj9', 2), 'Em9 → A13 → Dmaj9');
  assert.equal(transposeText('Am7 → Am9', 3), 'Cm7 → Cm9');
});

test('beginner annotations provide hover hints, native expandable explanations and escape HTML', () => {
  for (const [term, definition] of Object.entries(glossary)) {
    const html = annotate(term);
    assert.match(html, /<summary title="/);
    assert.match(html, /class="term-explanation"/);
    assert.ok(definition.detail.length > 100);
  }
  assert.match(annotate('The minor 3rd'), /<summary[^>]*>minor 3rd<\/summary>/);
  assert.doesNotMatch(annotate('<img src=x onerror="bad"> root'), /<img/);
  assert.match(annotate('root'), /root<\/summary>/);
});

test('playback pitches, chords, sixteenths, rests, sustain and tempo come from the tab', () => {
  assert.equal(frequency(69), 440);
  const velvet = exercises.find(e => e.id === 'velvet');
  const sequence = buildSequence(velvet, 0, 60);
  assert.equal(sequence.duration, 16);
  assert.deepEqual(sequence.notes.slice(0,2).map(n => [n.midi,n.start,n.articulation]), [[60,0,'pluck'],[62,.25,'hammer']]);
  const faster = buildSequence(velvet, 5, 120);
  sequence.notes.forEach((note, i) => {
    assert.equal(faster.notes[i].midi, note.midi + 5);
    assert.equal(faster.notes[i].start, note.start / 2);
    assert.equal(faster.notes[i].duration, note.duration / 2);
  });
  const chord = buildSequence(exercises.find(e => e.id === 'hear9'), 0, 60);
  assert.deepEqual(chord.notes.filter(n => n.start === 0).map(n => n.midi).sort((a,b) => a-b), [45,55,60,64,69]);
  assert.equal(chord.notes[0].duration, 2);
  const sixths = buildSequence(exercises.find(e => e.id === 'sixths'), 0, 60);
  assert.equal(sixths.notes[0].duration, 1);
  const pocket = buildSequence(exercises.find(e => e.id === 'pocket'), 0, 60);
  assert.equal(pocket.notes[0].duration, .41);
  assert.equal(pocket.notes.some(n => n.start === .5), false);
  for (const exercise of exercises) {
    const seq = buildSequence(exercise, 3, 65);
    const expectedCount = exercise.cells.flat().reduce((sum, token) => sum + (token.match(/\d+/g)?.length ?? 0), 0);
    assert.equal(seq.notes.length, expectedCount);
    for (const note of seq.notes) {
      assert.ok(note.duration > 0);
      assert.ok(note.start + note.duration <= seq.duration + 1e-8);
      assert.ok(Number.isFinite(note.midi));
    }
  }
});

class FakeAudio {
  static instances = [];
  constructor() { this.currentTime = 0; this.destination = {}; this.oscillators = []; this.closed = false; FakeAudio.instances.push(this); }
  resume() { return Promise.resolve(); }
  close() { this.closed = true; return Promise.resolve(); }
  param() { return {value:0, calls:[], setValueAtTime(...args) {this.calls.push(args);}, linearRampToValueAtTime(...args) {this.calls.push(args);}, exponentialRampToValueAtTime(...args) {this.calls.push(args);}}; }
  createGain() { return {gain:this.param(), connect() {}, disconnect() {}}; }
  createBiquadFilter() { return {frequency:this.param(), connect() {}, disconnect() {}}; }
  createOscillator() { const osc = {frequency:this.param(), connect() {}, disconnect() {}, start(time) {this.startTime=time;}, stop(time) {this.stopTime=time;}}; this.oscillators.push(osc); return osc; }
}

function harness(AudioContext = FakeAudio) {
  const elements = new Map();
  const timers = new Map();
  const events = {};
  let nextTimer = 0;
  const get = id => {
    if (!elements.has(id)) elements.set(id, {
      value: ['focus', 'level'].includes(id) ? 'all' : id === 'transpose' ? '0' : id === 'bpm' ? '65' : '',
      textContent: '', innerHTML:'', hidden: false, handlers: {}, attributes: {},
      addEventListener(event, fn) { this.handlers[event] = fn; },
      setAttribute(name, value) { this.attributes[name] = value; },
    });
    return elements.get(id);
  };
  const source = readFileSync(new URL('../src/pages/guitar.astro', import.meta.url), 'utf8').split('<script>')[1].split('</script>')[0].replace(/^\s*import .*?;$/gm, '');
  const document = {getElementById:get, hidden:false, addEventListener(name,fn) { events[name]=fn; }};
  vm.runInNewContext(stripTypeScriptTypes(source), {
    exercises, renderTab, transposeText, annotate, renderLesson, buildSequence, clampTempo, scheduleNote,
    AudioContext, document, window: {addEventListener(name,fn) { events[name]=fn; }},
    setInterval(fn) { const id=++nextTimer; timers.set(id,fn); return id; }, clearInterval(id) {timers.delete(id);},
  });
  return {get, timers, events, document};
}

test('filters, shuffle, transposition, lesson updates and unavailable audio', async () => {
  const {get} = harness(class { constructor() {throw new Error('unavailable');} });
  for (const kind of ['all', 'lick', 'chords', 'theory']) {
    for (const level of ['all', 'Flow', 'Stretch']) {
      get('focus').value = kind; get('level').value = level;
      get('focus').handlers.change();
      const pool = exercises.filter(e => (kind === 'all' || e.kind === kind) && (level === 'all' || e.level === level));
      let previous;
      for (let i = 0; i < 30; i++) {
        const selected = exercises.find(e => e.title === get('exercise-title').textContent);
        assert.ok(pool.includes(selected));
        if (pool.length > 1) assert.notEqual(selected.id, previous);
        assert.equal(get('lesson').innerHTML, renderLesson(selected.id));
        assert.equal(get('theory').innerHTML, annotate(selected.theory));
        previous = selected.id;
        get('shuffle').handlers.click();
      }
    }
  }
  get('transpose').value = '5'; get('transpose').handlers.change();
  const current = exercises.find(e => e.title === get('exercise-title').textContent);
  assert.equal(get('tab').textContent, renderTab(current, 5));
  assert.equal(get('transposition-note').hidden, false);
  get('bpm').value = '999'; get('bpm').handlers.change();
  assert.equal(get('bpm').value, '160');
  get('bpm').value = ''; get('bpm').handlers.change();
  assert.equal(get('bpm').value, '65');
  await get('play-tab').handlers.click();
  assert.equal(get('play-tab').attributes['aria-pressed'], 'false');
  assert.match(get('audio-status').textContent, /unavailable/);
});

test('playback schedules actual notes, stops on edits or hiding, finishes and can restart', async () => {
  const {get,timers,events,document} = harness();
  await get('play-tab').handlers.click();
  let context = FakeAudio.instances.at(-1);
  assert.ok(context.oscillators.length > 10);
  assert.equal(get('play-tab').attributes['aria-pressed'], 'true');
  const selected = exercises.find(e => e.title === get('exercise-title').textContent);
  const expected = buildSequence(selected).notes[0];
  assert.equal(context.oscillators[0].frequency.calls[0][0], frequency(expected.midi));
  context.currentTime = 1;
  [...timers.values()][0]();
  assert.ok(get('play-progress').value > 0);
  get('transpose').value = '2'; get('transpose').handlers.change();
  assert.ok(context.closed); assert.equal(timers.size,0);
  await get('play-tab').handlers.click();
  context = FakeAudio.instances.at(-1);
  assert.equal(context.oscillators[0].frequency.calls[0][0], frequency(expected.midi + 2));
  get('bpm').value = '90'; get('bpm').handlers.change();
  assert.ok(context.closed);
  await get('play-tab').handlers.click();
  context = FakeAudio.instances.at(-1);
  context.currentTime = 100;
  [...timers.values()][0]();
  assert.ok(context.closed);
  assert.equal(get('play-position').textContent, 'Finished');
  assert.equal(get('play-progress').value, selected.cells.length);
  await get('play-tab').handlers.click();
  context = FakeAudio.instances.at(-1);
  document.hidden = true; events.visibilitychange();
  assert.ok(context.closed); assert.equal(timers.size,0);
});

test('stop while audio is starting prevents stale playback from being scheduled', async () => {
  let resume;
  class SlowAudio extends FakeAudio { resume() { return new Promise(resolve => {resume=resolve;}); } }
  const {get,timers} = harness(SlowAudio);
  const starting = get('play-tab').handlers.click();
  const context = FakeAudio.instances.at(-1);
  await get('play-tab').handlers.click();
  resume(); await starting;
  assert.ok(context.closed);
  assert.equal(context.oscillators.length,0);
  assert.equal(timers.size,0);
  assert.equal(get('play-tab').attributes['aria-pressed'],'false');
});
