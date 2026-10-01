export type Exercise = {
  id: string; title: string; kind: 'lick' | 'chords' | 'theory'; level: 'Flow' | 'Stretch';
  harmony: string; cells: string[][]; feel: string; technique: string; theory: string; challenge: string;
};
// Each cell is one eighth note; strings are ordered high e to low E.
const n = (string: number, fret: string): string[] => Array.from({length: 6}, (_, i) => i === string - 1 ? fret : '-');
const c = (...frets: string[]) => frets;
const rest = c('-', '-', '-', '-', '-', '-');
const sketches: Exercise[] = [
  {id:'velvet', title:'The velvet turn', kind:'lick', level:'Flow', harmony:'Am9',
    cells:[n(3,'5h7'),n(2,'5'),n(1,'5'),n(1,'7p5'),n(2,'8'),n(2,'5'),n(3,'7'),n(3,'5')],
    feel:'Four bars of even eighths. Each hammer-on or pull-off divides its slot into two sixteenths.',
    technique:'Alternate index and middle on the melody. Pick only the first note of each h/p pair; keep the second note equally clear.',
    theory:'Over Am9, B is the 9th. The high-string 7p5 moves from B to A: colour resolving to the root.',
    challenge:'Loop three times, then end on B (high e, fret 7) instead of A to leave the phrase gently unresolved.'},
  {id:'sixths', title:'Two voices, one conversation', kind:'lick', level:'Flow', harmony:'Cmaj7',
    cells:[c('5','-','5','-','-','-'),rest,c('7','-','7','-','-','-'),c('8','-','9','-','-','-'),rest,c('7','-','7','-','-','-'),c('5','-','5','-','-','-'),rest],
    feel:'Pluck vertically aligned notes together. Let each pair ring through the following empty slot.',
    technique:'Use index on G and ring on high e. Mute the B string gently so the two voices stay separate.',
    theory:'The pairs C–A, D–B and E–C are diatonic sixths in C major. Parallel sixths turn a single melody into a harmonized line.',
    challenge:'Sing the upper voice, then play only the lower voice while you keep singing.'},
  {id:'dorian', title:'A little brighter', kind:'lick', level:'Stretch', harmony:'Am13 · Dorian colour',
    cells:[n(4,'7'),n(3,'5h7'),n(2,'5'),n(2,'7'),n(1,'7'),n(1,'5'),n(2,'7p5'),n(3,'5')],
    feel:'Even eighths; h/p pairs are two sixteenths within one slot.',
    technique:'Keep the fretting hand near fifth position. Let the hammer-on provide momentum without rushing the next pluck.',
    theory:'F♯ on B-string fret 7 is the natural 6th of A Dorian. Alongside B, the 9th, it gives a brighter minor colour than A natural minor.',
    challenge:'Change every F♯ to F (B string, fret 6, or D string, fret 3). Compare Dorian with natural minor.'},
  {id:'slide', title:'Slide into the ninth', kind:'lick', level:'Stretch', harmony:'Am9',
    cells:[c('-','5','5','-','-','5'),n(3,'7/9'),n(2,'8'),n(1,'7'),n(1,'8p7'),n(2,'8'),n(3,'9'),n(1,'5')],
    feel:'The opening chord occupies one eighth. Slide and pull-off pairs each take two sixteenths.',
    technique:'Thumb the bass and pinch B/G with middle/index. Release the bass before shifting up for the slide.',
    theory:'The opening A–C–E states the minor triad. B adds the 9th, while G supplies the minor 7th.',
    challenge:'Make the high B louder than the surrounding notes, then reverse that dynamic shape.'},
  {id:'approach', title:'A half-step away', kind:'lick', level:'Stretch', harmony:'Cmaj7',
    cells:[n(2,'7h8'),n(1,'7'),n(1,'8'),n(1,'7'),n(2,'8'),n(3,'8/9'),n(2,'8'),n(1,'8')],
    feel:'Even eighths; the h and / cells contain two sixteenths.',
    technique:'Use light pressure on the slide. Pluck the arrival C softly so the phrase lands rather than stops.',
    theory:'F♯ approaches G from below; D♯ approaches E from below. Those chromatic notes create motion into chord tones rather than belonging to C major.',
    challenge:'Remove both approach notes. Play the simpler version, then bring the chromatic motion back.'},
  {id:'pocket', title:'Leave a little space', kind:'lick', level:'Flow', harmony:'Am7',
    cells:[n(5,'0'),rest,c('-','5','5','-','-','-'),n(2,'5h8'),rest,n(1,'5'),n(2,'8p5'),rest],
    feel:'Empty slots are rests here: stop the previous note. h/p pairs are two sixteenths.',
    technique:'Thumb the open A, then use index/middle for the double-stop. Relax fretting pressure to shorten the notes.',
    theory:'A, C, E and G are the four notes of Am7. Rhythm and silence can make chord tones feel as expressive as added extensions.',
    challenge:'Keep the pitches and move the double-stop one eighth later.'},
  {id:'minor9', title:'A minor, with the lights low', kind:'chords', level:'Flow', harmony:'Am9',
    cells:[n(6,'5'),rest,c('7','5','5','5','-','-'),rest,n(6,'5'),c('7','5','5','5','-','-'),rest,c('7','5','5','5','-','-')],
    feel:'Hold the upper voicing through empty slots. Keep the bass quiet and the top note clear.',
    technique:'Barre fret 5 on D/G/B; use the little finger for high e fret 7. Thumb the bass, then brush the four upper strings with your fingers.',
    theory:'A–G–C–E–B spells root, minor 7th, minor 3rd, 5th and 9th. The B on top is what turns Am7 into Am9.',
    challenge:'Alternate high e frets 7 and 5 to hear the 9th resolve to the root.'},
  {id:'major9', title:'The major-nine shimmer', kind:'chords', level:'Flow', harmony:'Cmaj9',
    cells:[n(5,'3'),n(4,'2'),n(3,'4'),n(2,'3'),c('-','3','4','2','3','-'),rest,rest,rest],
    feel:'Arpeggiate four eighths, then pinch the chord on beat 3 and sustain.',
    technique:'Thumb A/D; index G; middle B. Let notes overlap and keep both E strings silent.',
    theory:'C–E–B–D contains root, 3rd, major 7th and 9th. The 5th is omitted; the 3rd and 7th still define the chord.',
    challenge:'Play the same voicing as short, offbeat stabs instead of a sustained arpeggio.'},
  {id:'twofive', title:'A small ii–V', kind:'chords', level:'Stretch', harmony:'Dm9 → G13 → Cmaj9',
    cells:[c('-','5','5','3','5','-'),rest,rest,c('-','5','5','3','5','-'),c('5','5','4','3','-','3'),rest,rest,c('5','5','4','3','-','3')],
    feel:'Bar 1 moves Dm9 to G13; bar 2 settles on Cmaj9. Bar 3 returns to Dm9; bar 4 moves G13 to Cmaj9. Sustain between attacks.',
    technique:'Keep D-string fret 3 and B-string fret 5 in place as the bass changes. Brush G13 upward with the fingers after the thumb plays low G.',
    theory:'Dm9 is D–F–C–E. G13 here is G–F–B–E–A. C moves down to B while F and E remain: smooth voice leading with very little motion.',
    challenge:'Play the four bars again, but omit the bass and listen to how the upper notes connect.'},
  {id:'melodychord', title:'A melody inside the chord', kind:'chords', level:'Stretch', harmony:'Am7 → Am9 → Am7',
    cells:[c('5','5','5','5','-','5'),rest,c('7','5','5','5','-','-'),c('8','5','5','5','-','-'),rest,c('7','5','5','5','-','-'),c('5','5','5','5','-','5'),rest],
    feel:'Let the inner voices sustain while the top line moves A–B–C–B–A.',
    technique:'Hold a fifth-fret barre; reach with ring/little finger for the melody. Brush the inner strings softly and accent high e.',
    theory:'The bass and inner voices stay on Am7. The top voice visits the root, 9th and minor 3rd, creating movement without changing the underlying harmony.',
    challenge:'Keep the top line connected while playing the inner chord only on beats 1 and 3.'},
  {id:'hear9', title:'Find the colour tone', kind:'theory', level:'Flow', harmony:'Am7 → Am9',
    cells:[c('5','5','5','5','-','5'),rest,rest,rest,c('7','5','5','5','-','5'),rest,rest,rest],
    feel:'One chord on beat 1, the other on beat 3. Listen through the space.',
    technique:'Use a fifth-fret barre and add high e fret 7 for the second chord. Give both top notes equal volume.',
    theory:'Only the top note changes: A becomes B. B is two semitones above A, so it is a 2nd by pitch class and a 9th as a chord extension.',
    challenge:'Before reading the explanation, name the changing note and sing it. Then find that note on another string.'},
  {id:'guide', title:'Follow the guide tones', kind:'theory', level:'Stretch', harmony:'Dm7 → G7 → Cmaj7',
    cells:[c('-','6','5','-','-','-'),rest,c('-','6','4','-','-','-'),rest,c('-','5','4','-','-','-'),rest,rest,rest],
    feel:'Play each pair together on beats 1, 2 and 3; let the last pair ring.',
    technique:'Index/middle pluck G/B together. Move only one fretted note at each chord change.',
    theory:'C–F are the 7th and 3rd of Dm7. B–F are the 3rd and 7th of G7. B–E are the major 7th and 3rd of Cmaj7. Each change moves one voice down a semitone.',
    challenge:'Omit the bass notes in bar 2 and sing D, G and C instead. Then restore the bass and compare.'},
];
// Three composed response bars for each lick/chord: develop, contrast, resolve.
// These are written variations, not copies of the opening bar.
const continuations: Record<string, string[][][]> = {
  velvet: [
    [n(4,'7'),n(3,'5'),n(3,'7'),n(2,'5h8'),n(1,'5'),n(1,'7'),n(2,'8'),rest],
    [n(1,'8p7'),n(1,'5'),n(2,'8'),n(2,'5'),n(3,'7/9'),n(2,'8'),n(1,'7'),rest],
    [n(2,'8'),n(2,'5'),n(3,'7p5'),n(4,'7'),n(3,'5'),n(2,'5'),n(1,'5'),rest],
  ],
  sixths: [
    [c('8','-','9','-','-','-'),rest,c('10','-','10','-','-','-'),rest,c('12','-','12','-','-','-'),rest,c('10','-','10','-','-','-'),rest],
    [c('8','-','9','-','-','-'),c('7','-','7','-','-','-'),c('5','-','5','-','-','-'),rest,c('3','-','4','-','-','-'),rest,c('5','-','5','-','-','-'),rest],
    [c('7','-','7','-','-','-'),rest,c('8','-','9','-','-','-'),c('7','-','7','-','-','-'),c('8','-','9','-','-','-'),rest,rest,rest],
  ],
  dorian: [
    [n(4,'4h5'),n(4,'7'),n(3,'5'),n(3,'7'),n(2,'5'),n(2,'7'),n(2,'8'),rest],
    [n(1,'7'),n(1,'5'),n(2,'8p7'),n(2,'5'),n(3,'7/9'),n(2,'7'),n(2,'5'),rest],
    [n(3,'7'),n(3,'5'),n(4,'7'),n(4,'5'),n(4,'4h5'),n(4,'7'),n(1,'5'),rest],
  ],
  slide: [
    [n(6,'5'),n(3,'5h7'),n(2,'5'),n(1,'7'),n(1,'8'),n(1,'7'),n(2,'8'),rest],
    [n(3,'7/9'),n(2,'8'),n(1,'7h8'),n(1,'10'),n(1,'8p7'),n(2,'8'),n(3,'9'),rest],
    [n(3,'9'),n(3,'7'),n(3,'5'),n(4,'7'),c('5','5','5','-','-','5'),rest,rest,rest],
  ],
  approach: [
    [n(1,'10'),n(1,'8'),n(1,'7'),n(2,'8'),n(2,'7h8'),n(3,'9'),n(2,'8'),rest],
    [n(3,'8/9'),n(2,'8'),n(1,'7'),n(1,'8'),n(1,'10'),n(1,'8p7'),n(2,'8'),rest],
    [n(2,'6'),n(2,'5'),n(3,'7'),n(3,'5'),n(3,'8/9'),n(2,'8'),n(1,'8'),rest],
  ],
  pocket: [
    [n(5,'0'),rest,n(3,'5h7'),n(2,'5'),rest,c('5','5','-','-','-','-'),rest,n(2,'8')],
    [rest,n(5,'0'),c('-','5','5','-','-','-'),rest,n(1,'5'),n(2,'8p5'),rest,n(3,'5')],
    [n(5,'0'),rest,n(3,'7p5'),n(4,'7'),rest,c('5','5','5','-','-','-'),rest,rest],
  ],
  minor9: [
    [n(6,'5'),n(4,'5'),n(3,'5'),n(2,'5'),n(1,'7'),rest,n(1,'5'),rest],
    [n(6,'5'),rest,c('8','5','5','5','-','-'),rest,c('7','5','5','5','-','-'),rest,c('5','5','5','5','-','-'),rest],
    [n(6,'5'),n(4,'5'),n(3,'5'),n(2,'5'),c('7','5','5','5','-','5'),rest,rest,rest],
  ],
  major9: [
    [n(5,'3'),n(3,'4'),n(2,'3'),n(4,'2'),n(2,'5'),n(2,'3'),n(3,'4'),rest],
    [c('-','3','4','2','3','-'),rest,n(2,'5'),n(2,'3'),n(3,'4'),n(4,'2'),n(5,'3'),rest],
    [n(5,'3'),n(4,'2'),n(3,'4'),n(2,'3'),c('-','3','4','2','3','-'),rest,rest,rest],
  ],
  twofive: [
    [c('-','3','4','2','3','-'),rest,rest,n(2,'3'),n(2,'5'),n(2,'3'),n(3,'4'),rest],
    [n(5,'5'),n(4,'3'),n(3,'5'),n(2,'5'),c('-','5','5','3','5','-'),rest,n(2,'6'),n(2,'5')],
    [c('5','5','4','3','-','3'),rest,rest,rest,c('-','3','4','2','3','-'),rest,rest,rest],
  ],
  melodychord: [
    [n(6,'5'),n(4,'5'),c('8','5','5','-','-','-'),rest,c('7','5','5','-','-','-'),rest,c('5','5','5','-','-','-'),rest],
    [n(6,'5'),rest,c('7','5','5','5','-','-'),c('8','5','5','5','-','-'),n(1,'7'),n(1,'5'),c('-','8','5','5','-','-'),rest],
    [n(6,'5'),n(4,'5'),n(3,'5'),n(2,'5'),c('7','5','5','5','-','-'),rest,c('5','5','5','5','-','5'),rest],
  ],
  hear9: [[n(6,'5'),n(3,'5'),n(2,'5'),n(1,'5'),n(1,'7'),n(1,'5'),c('7','5','5','5','-','5'),rest]],
  guide: [[c('-','6','5','-','5','-'),rest,c('-','6','4','-','-','3'),rest,c('-','5','4','-','3','-'),rest,rest,rest]],
};
export const exercises: Exercise[] = sketches.map(exercise => ({
  ...exercise,
  cells: [...exercise.cells, ...continuations[exercise.id].flat()],
  feel: exercise.id === 'hear9' ? 'Bar 1 compares two chords; bar 2 separates their notes so you can hear the change, then brings back Am9.' :
    exercise.id === 'guide' ? 'Bar 1 isolates the two moving voices; bar 2 adds D, G and C bass notes underneath. Each change falls on beats 1, 2 and 3.' : exercise.feel,
}));
export function transposeText(text: string, offset: number): string {
  if (!offset) return text;
  return text.replace(/\b([A-G])([♯♭]?)(?=m|maj|13|7|9|\b|–)/g, (_, letter, accidental) => {
    const pitch = ({C:0,D:2,E:4,F:5,G:7,A:9,B:11} as Record<string,number>)[letter] + (accidental === '♯' ? 1 : accidental === '♭' ? -1 : 0);
    return ['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B'][(pitch + offset + 12) % 12];
  });
}
export function renderTab(exercise: Exercise, offset = 0): string {
  const bars: string[] = [];
  for (let start = 0; start < exercise.cells.length; start += 8) {
    const cells = exercise.cells.slice(start, start + 8).map(cell => cell.map(note => note.replace(/\d+/g, f => String(Number(f) + offset))));
    // Keep equal rhythmic spacing, expanding only for longer two-digit ornaments.
    const width = Math.max(4, ...cells.flat().map(note => note.length + 1));
    bars.push(`BAR ${start / 8 + 1}\n` +
      '  ' + ['1','&','2','&','3','&','4','&'].map(s => s.padEnd(width,' ')).join('').trimEnd() + '\n' +
      ['e','B','G','D','A','E'].map((string, i) => string + '|' + cells.map(cell => cell[i].padEnd(width, '-')).join('') + '|').join('\n'));
  }
  return bars.join('\n\n');
}

export function renderTabHtml(exercise: Exercise, offset = 0): string {
  return renderTab(exercise, offset).split('\n\n').map((bar, index) => {
    const tab = bar.slice(bar.indexOf('\n') + 1).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<figure class="tab-bar"><figcaption>Bar ${index + 1}</figcaption><pre tabindex="0" aria-label="Bar ${index + 1} guitar tablature, high e string at the top. Scroll horizontally if needed."><code>${tab}</code></pre></figure>`;
  }).join('');
}
