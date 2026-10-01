import type { Exercise } from '../data/guitar';
export type TabNote = {
  midi: number; start: number; duration: number; string: number;
  articulation: 'pluck' | 'hammer' | 'pull' | 'slide'; fromMidi?: number;
};
export const clampTempo = (value: number) => Math.max(40, Math.min(160, Number.isFinite(value) && value ? value : 65));
export const frequency = (midi: number) => 440 * 2 ** ((midi - 69) / 12);

// The tab is the source of truth for both rendering and sound.
export function buildSequence(exercise: Exercise, offset = 0, bpm = 65) {
  const step = 30 / clampTempo(bpm); // one eighth note
  const openStrings = [64, 59, 55, 50, 45, 40]; // high e to low E, MIDI pitches
  const notes: TabNote[] = [];
  exercise.cells.forEach((cell, index) => {
    cell.forEach((token, string) => {
      const match = /^(\d+)(?:([hp/])(\d+))?$/.exec(token);
      if (!match) return;
      const midi = openStrings[string] + Number(match[1]) + offset;
      // Chord/arpeggio voices ring until replayed or the next chord attacks.
      // Single-line licks ring until the next attack; pocket explicitly mutes rests.
      let end = exercise.cells.length;
      if (exercise.id === 'pocket') end = index + 0.82;
      else {
        for (let next = index + 1; next < exercise.cells.length; next++) {
          const following = exercise.cells[next];
          const attacks = following.filter(note => note !== '-').length;
          const sustained = exercise.kind !== 'lick' || exercise.id === 'sixths';
          if ((sustained && (following[string] !== '-' || attacks > 1)) || (!sustained && attacks > 0)) {
            end = next; break;
          }
        }
      }
      const duration = (end - index) * step;
      notes.push({midi, string, start:index * step, duration:match[2] ? step / 2 : duration, articulation:'pluck'});
      if (match[2]) notes.push({
        midi:openStrings[string] + Number(match[3]) + offset, string,
        start:(index + 0.5) * step, duration:duration - step / 2,
        articulation:match[2] === 'h' ? 'hammer' : match[2] === 'p' ? 'pull' : 'slide', fromMidi:midi,
      });
    });
  });
  return {notes:notes.sort((a,b) => a.start - b.start), duration:exercise.cells.length * step, step};
}

// A soft plucked-string guide, made locally in the browser. No audio downloads.
export function scheduleNote(context: AudioContext, output: AudioNode, note: TabNote, begins: number) {
  const start = begins + note.start;
  const duration = Math.max(0.03, note.duration);
  const end = start + duration;
  const oscillator = context.createOscillator();
  const envelope = context.createGain();
  const filter = context.createBiquadFilter();
  oscillator.type = 'triangle';
  const hz = frequency(note.midi);
  if (note.articulation === 'slide' && note.fromMidi !== undefined) {
    oscillator.frequency.setValueAtTime(frequency(note.fromMidi), start);
    oscillator.frequency.exponentialRampToValueAtTime(hz, start + Math.min(0.1, duration * 0.6));
  } else oscillator.frequency.setValueAtTime(hz, start);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(Math.min(6000, hz * 9), start);
  filter.frequency.exponentialRampToValueAtTime(Math.min(3000, hz * 2.5), start + Math.min(0.18, duration));
  const volume = note.articulation === 'pluck' ? 0.14 : 0.105;
  envelope.gain.setValueAtTime(0, start);
  envelope.gain.linearRampToValueAtTime(volume, start + 0.004);
  envelope.gain.exponentialRampToValueAtTime(volume * 0.35, start + Math.min(0.3, duration * 0.65));
  envelope.gain.exponentialRampToValueAtTime(0.0001, end);
  oscillator.connect(filter); filter.connect(envelope); envelope.connect(output);
  oscillator.start(start); oscillator.stop(end + 0.01);
  oscillator.onended = () => { oscillator.disconnect(); filter.disconnect(); envelope.disconnect(); };
}
