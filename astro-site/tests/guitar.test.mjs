import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';
import { exercises, renderTab, transposeText } from '../src/data/guitar.ts';

test('all exercises have one bar, six strings and consistent tab alignment in every key', () => {
  assert.equal(new Set(exercises.map(e => e.id)).size, exercises.length);
  for (const exercise of exercises) {
    assert.equal(exercise.cells.length, 8);
    for (const cell of exercise.cells) {
      assert.equal(cell.length, 6);
      cell.forEach(note => assert.match(note, /^(?:-|\d+(?:[hp/]\d+)?)$/));
    }
    for (const offset of [0, 2, 3, 5]) {
      const rows = renderTab(exercise, offset).split('\n');
      assert.equal(rows.length, 7);
      assert.equal(new Set(rows.slice(1).map(row => row.length)).size, 1);
      for (let i = 0; i < 8; i++) {
        for (let string = 0; string < 6; string++) {
          const expected = exercise.cells[i][string].replace(/\d+/g, fret => Number(fret) + offset);
          assert.equal(rows[string + 1].slice(2 + i * 7, 2 + (i + 1) * 7), expected.padEnd(7, '-'));
        }
      }
    }
  }
  assert.equal(transposeText('Dm9 → G13', 2), 'Em9 → A13');
  assert.equal(transposeText('Am7 → Am9', 3), 'Cm7 → Cm9');
  assert.equal(transposeText('Cmaj9', 5), 'Fmaj9');
});

test('controls filter, shuffle without immediate repeats, transpose and handle unavailable audio', async () => {
  const elements = new Map();
  const get = id => {
    if (!elements.has(id)) elements.set(id, {
      value: ['focus', 'level'].includes(id) ? 'all' : id === 'transpose' ? '0' : id === 'bpm' ? '65' : '',
      textContent: '', hidden: false, handlers: {}, attributes: {},
      addEventListener(event, fn) { this.handlers[event] = fn; },
      setAttribute(name, value) { this.attributes[name] = value; },
      classList: {add() {}, remove() {}},
    });
    return elements.get(id);
  };
  const source = readFileSync(new URL('../src/pages/guitar.astro', import.meta.url), 'utf8').split('<script>')[1].split('</script>')[0].replace(/import .*?from .*?;/, '');
  vm.runInNewContext(stripTypeScriptTypes(source), {
    exercises, renderTab, transposeText, document: {getElementById: get, addEventListener() {}},
    window: {addEventListener() {}}, setInterval, clearInterval, setTimeout, clearTimeout,
  });
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
  await get('metronome').handlers.click();
  assert.equal(get('metronome').attributes['aria-pressed'], 'false');
  assert.match(get('audio-status').textContent, /unavailable/);
});
