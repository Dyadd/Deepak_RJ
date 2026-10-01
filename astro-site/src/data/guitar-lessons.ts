type Definition = { short: string; detail: string };
export const glossary: Record<string, Definition> = {
  'root': {short:'The note a chord is named after: A in Am9, C in Cmaj9.', detail:'A chord is a group of notes heard together. Its root is the reference note used to name the other notes. For Am9, start counting from A. The root does not have to be the highest note, or even the lowest note in every chord shape. Try playing A alone, then the Am9 shape: A gives the sound its home base.'},
  'minor 3rd': {short:'Three frets above the root; this note helps make a chord minor.', detail:'Count the distance in semitones, meaning single-fret steps. From A, move up three steps: A♯, B, C. So C is the minor 3rd of A. A minor chord starts with A–C–E. Changing C to C♯ makes A major instead. You can hear this with G-string fret 5 (C) versus fret 6 (C♯), over an A bass.'},
  'major 7th': {short:'Eleven semitones above the root: B above C.', detail:'Count C–D–E–F–G–A–B: B is the seventh letter in C major. It is one semitone below the next C, which produces a close, sometimes wistful sound. Cmaj7 contains C–E–G–B. The word “major” in maj7 specifies this B; C7 would use B♭ instead.'},
  'minor 7th': {short:'Ten semitones above the root: G above A.', detail:'An octave is twelve single-fret steps. A minor 7th sits two steps below that octave. For an A chord, it is G. Add G to A–C–E and you get Am7. Compare A minor with Am7: the extra G makes the harmony less plain without changing it from minor to major.'},
  '7th': {short:'A seventh adds another note beyond a basic three-note chord.', detail:'Count seven letter names from the root, including the root. From A, the seventh letter is G; from C, it is B. The exact pitch depends on the chord: Am7 uses G (ten semitones above A), while Cmaj7 uses B (eleven above C). The 3rd and 7th together tell your ear a lot about the chord’s character.'},
  '3rd': {short:'The chord note that usually tells your ear “major” or “minor”.', detail:'Count three note letters from the root, including the root itself. From A: A, B, C. A minor uses C, three semitones above A; A major uses C♯, four semitones above A. These are the minor and major 3rds. The number is a musical interval, not a fret number.'},
  '5th': {short:'A stable supporting chord note, usually seven semitones above the root.', detail:'The ordinary, or perfect, 5th of A is E. A basic A minor chord contains A (root), C (minor 3rd), and E (5th). In richer guitar chords, you can often leave the 5th out to make room for more colourful notes. Cmaj9 here leaves out G, but C, E, B and D still give it a clear identity.'},
  '9th': {short:'The same note name as the 2nd, counted an octave higher.', detail:'Count from A: A=1, B=2, C=3, D=4, E=5, F=6, G=7, A=8, B=9. B is the 9th of A. In an Am9 chord, it joins A–C–E–G to add colour. The “9” is not a fret number. Musicians keep this chord name even when a guitar voicing places that note lower than a full octave above the root.'},
  'natural 6th': {short:'The major-sixth distance above a root: F♯ above A.', detail:'A to F♯ is nine semitones. A natural minor uses F, eight semitones above A, but A Dorian uses F♯. Raising that one note gives Dorian its distinctive brighter minor sound. “Natural” here means the unlowered scale degree, not necessarily a white piano key or a note without a sharp sign.'},
  '13th': {short:'A 6th counted beyond the octave; E is the 13th of G.', detail:'Count G–A–B–C–D–E: E is the 6th. Continue through the octave and E becomes the 13th. G13 includes a G7 foundation (G–B–D–F) plus E. Guitar voicings commonly omit some notes; ours omits D and includes A, the 9th.'},
  'dorian': {short:'A minor scale with a raised 6th: A–B–C–D–E–F♯–G.', detail:'A scale is a collection of notes used to build melodies. A natural minor contains A–B–C–D–E–F–G. A Dorian changes only F to F♯. Keep A sounding like home and compare those two notes. Dorian is called a mode, but you do not need mode names to start: listen for the brighter sixth note over a minor chord.'},
  'natural minor': {short:'For A, the notes A–B–C–D–E–F–G.', detail:'This seven-note scale has a minor 3rd, minor 6th and minor 7th relative to its root. In A those are C, F and G. A minor melody can use these notes while treating A as home. It shares its notes with C major, but the feeling of home is different.'},
  'diatonic sixths': {short:'Pairs of notes six scale steps apart, both drawn from the same key.', detail:'Count inclusively through C major: C–D–E–F–G–A. C up to A is a sixth. D–E–F–G–A–B gives D up to B; E–F–G–A–B–C gives E up to C. The fret distances vary because a scale contains both one- and two-semitone steps. “Diatonic” means staying within the chosen scale.'},
  'sixths': {short:'Two notes separated by six letter names, counting both ends.', detail:'C up to A is a sixth: C, D, E, F, G, A. Playing those two notes together makes a little two-part harmony. Moving both notes through a scale gives a melody with a companion voice. On this guitar shape, the lower voice is on G and the upper voice is on high e.'},
  'chromatic': {short:'Using a note outside the current scale, often as a stepping stone.', detail:'The guitar moves in semitones: every neighbouring fret is one step. A chromatic approach uses a nearby note outside the key before landing on a stable note. Over C major, F♯ can lead up to G and D♯ can lead up to E. Keep those approach notes brief and listen to the arrival rather than treating the extra note as a mistake.'},
  'chord tones': {short:'The notes that actually belong to the chord underneath a melody.', detail:'Over Am7, the chord tones are A, C, E and G. Landing on one of those tends to sound settled because the melody agrees with the harmony. Other notes can add colour or tension. Try pausing on E, then on B, over Am7; E belongs to the basic chord and B adds a 9th.'},
  'minor triad': {short:'A three-note minor chord: root, minor 3rd and 5th.', detail:'“Triad” means a basic three-note chord. A minor is A–C–E: A is the root, C is three semitones above it, and E is seven semitones above it. You can repeat those notes in other octaves and it is still the same chord. Add G for Am7, then B for Am9.'},
  'voice leading': {short:'How individual notes move from one chord to the next.', detail:'Imagine each note in a chord as a singer. Each singer can stay on the same note, move a little, or leap when the chord changes. Small movements often make a progression sound connected. From Dm9 to G13 here, C moves down to B while F and E stay in place. Follow one string at a time to hear the movement.'},
  'guide tones': {short:'The 3rd and 7th: two notes that strongly identify a chord.', detail:'You do not always need a full chord to suggest its sound. In Dm7, F is the 3rd and C is the 7th. For G7, B is the 3rd and F is the 7th. C moves to B while F stays put. From G7 to Cmaj7, F moves to E while B stays put. These small movements are a foundation for smooth chord changes.'},
  'voicing': {short:'The particular arrangement of a chord’s notes across the strings.', detail:'A chord name tells you its ingredients, but not their exact order or octave. Different guitar shapes can all be Am7 if they use A, C, E and G. A voicing chooses which notes go low or high, which repeat, and which can be left out. Bringing the 9th to the top makes that colour especially easy to hear.'},
  'inner voices': {short:'The notes between the bass note and the highest melody note.', detail:'In a chord, the lowest note is the bass and the highest note often acts as a melody. The notes in between are inner voices. Hold those gently while changing the top note: you get melodic movement above a steady chord. Each “voice” is simply one musical line, not an actual singing voice.'},
  'semitone': {short:'The smallest step on a normally fretted guitar: one fret.', detail:'Move a note up one fret on the same string and it rises one semitone, also called a half-step. Two frets make a whole tone. Twelve semitones make an octave, which returns to the same note name at a higher pitch. Between B and C, and between E and F, there is only one semitone.'},
  'semitones': {short:'Single-fret steps on the same string.', detail:'One fret is one semitone. Two frets are two semitones, or a whole tone. For example, A at high e fret 5 rises to B at fret 7. Counting fret steps is a practical way to hear and find intervals before learning them everywhere on the neck.'},
  'pitch class': {short:'A note name regardless of which octave it is in.', detail:'A low A and a high A have different frequencies, but both belong to the A pitch class. This is why B can be called a 2nd near A or a 9th above the next octave: the note name is still B. Chord labels often describe these note roles without fixing an exact register.'},
  'chord extension': {short:'An extra colour note such as a 9th, 11th or 13th.', detail:'Start with a root, 3rd and 5th, then add a 7th. Notes added beyond that are called extensions: 9 is the same note name as 2, 11 as 4, and 13 as 6. Am9 contains A–C–E–G–B. Extensions give you more colours to choose from; you do not need to play all of them at once.'},
  'extensions': {short:'Extra colour notes added to a chord: 9ths, 11ths and 13ths.', detail:'Think of a basic chord as the foundation. A 7th adds character, and extensions such as the 9th add further colour. In Am9, the B is an extension. Try removing B and putting it back while keeping the other notes unchanged, so your ear can identify exactly what it contributes.'},
  'resolve': {short:'Move from a more tense sound to one that feels more settled.', detail:'Resolution is a listening effect, not a rule that every phrase must obey. Over an A minor chord, B can feel like a floating colour; moving it to A often feels like arriving home. Play B then A slowly and pause. Try ending on B instead to hear the difference.'},
  'resolving': {short:'Arriving at a note that feels more settled.', detail:'Over Am9, B adds colour while A is the root. Moving B to A can sound like an answer to a question. The rhythm and surrounding harmony also affect that feeling: try holding B for longer, then hear what changes when you finally land on A.'},
  'arpeggiate': {short:'Play a chord’s notes one after another instead of together.', detail:'Keep the chord shape held down and pluck its strings in sequence. If the notes overlap, the chord gradually opens out; if you stop each one, it sounds more like a melody. In the Cmaj9 exercise, the first four notes are C, E, B and D.'},
  'barre': {short:'Use one fretting finger to hold more than one string at a fret.', detail:'Lay part of your index finger across the required strings, keeping it close behind the fret wire. You do not always need to press all six strings. Use only enough pressure for the needed notes to ring; check one string at a time and relax between attempts.'},
  'double-stop': {short:'Two notes played at the same time.', detail:'Pluck two strings together with separate fingers. Unlike strumming, this lets you skip a string between them. Listen for both notes at equal volume first, then make the higher note slightly louder to bring out a melody.'},
  'offbeat': {short:'A position between the main beats: the “&” in “1 & 2 &”.', detail:'Tap four steady beats, then say an “and” halfway between each pair of taps. Playing on those “ands” gives the rhythm a lift away from the strong beats. In these tabs, each column marked & is one of those halfway points.'},
  'eighths': {short:'Two evenly spaced notes per beat at the displayed tempo.', detail:'In these 4/4 exercises, count 1 & 2 & 3 & 4 &. Each number and each & occupies one eighth-note slot. A bar contains eight slots. At 60 BPM, a beat lasts one second, so an eighth note lasts half a second.'},
  'sixteenths': {short:'Four evenly spaced notes per beat.', detail:'A sixteenth note lasts half an eighth note. A cell such as 5h7 divides one eighth-note slot into two equal parts: fret 5 first, then fret 7. Those two notes do not take two full columns. Slow playback helps you hear where the second note fits.'},
};

export const lessons: Record<string, [string, string][]> = {
  velvet: [
    ['What does Am9 actually mean?', 'A is the root. The small m means minor: A–C–E is the minor triad. Adding G makes Am7; adding B makes Am9. The melody borrows these notes without playing the whole chord at once. You can hold an A bass before playing to make that home note clear.'],
    ['What should I hear across four bars?', 'Bar 1 introduces a short idea; bar 2 rises again from a lower A. Bar 3 reaches C on high e fret 8, then returns through B. Bar 4 comes back to A. Listen especially to high e frets 7 and 5: B is the 9th and A is the root.'],
  ],
  sixths: [
    ['Why do two notes sound like a fuller melody?', 'A harmony is simply notes sounding together. Here the G string carries one line and high e carries another. C–A, D–B and E–C are sixths because their note names are six scale positions apart. Both notes come from C major, so these are diatonic sixths.'],
    ['How do I practise hearing both parts?', 'Play only the high e notes first and sing them. Then play only the G-string notes. Finally put the two lines together. Bar 2 climbs higher; bar 3 answers by moving down; bar 4 settles on E–C, two chord tones of C major.'],
  ],
  dorian: [
    ['How can something sound minor but brighter?', 'A natural minor uses A–B–C–D–E–F–G. A Dorian changes F to F♯. The C still gives the melody its minor 3rd, but the natural 6th, F♯, changes its colour. You do not have to memorize every mode to hear this one-note difference.'],
    ['Where is that special note in this tab?', 'F♯ appears at B-string fret 7 and D-string fret 4. Compare either note with the fret immediately below it. Those lower notes are F. The final bar visits F♯ again before landing on A, so you can hear the bright colour against the home note.'],
  ],
  slide: [
    ['What do the opening notes establish?', 'The first shape contains A on low E, C on G, and E on B. These three notes are the A minor triad. That opening gives your ear a reference, so the later B at high e fret 7 sounds like an added 9th rather than an unrelated note.'],
    ['What happens when the phrase climbs?', 'The third bar reaches D at high e fret 10, another scale note above the basic chord. The fourth bar walks down E–D–C–A, then ends with an A minor shape. Listen to that return as a resolution after the higher, more open middle of the phrase.'],
  ],
  approach: [
    ['Are those notes outside C major mistakes?', 'No: they are short chromatic approaches. B-string fret 7 is F♯, one semitone below G at fret 8. G-string fret 8 is D♯, one semitone below E at fret 9. The next note is the destination; the quick outside note adds movement on the way there.'],
    ['What makes the ending feel finished?', 'The last bar finishes E–G–C. These are chord tones of C major. Try stopping on a chromatic approach instead, then continue into its destination. Comparing the unfinished and finished sounds helps you hear what “tension and resolution” mean.'],
  ],
  pocket: [
    ['Do I need lots of unusual notes for this sound?', 'The phrase uses mainly A, C, E and G, the chord tones of Am7, with D as a passing scale note. Most of the character comes from short notes and carefully placed silence. A double-stop is just two of those notes played together.'],
    ['What should I listen for in the rhythm?', 'Bar 3 begins with silence and puts the bass on the first &. That offbeat entrance changes the feel without needing new harmony. Mute fully in the empty cells. Listen to playback, then count aloud while you play the same gaps.'],
  ],
  minor9: [
    ['Why does this shape sound richer than A minor?', 'Low to high, its notes are A–G–C–E–B. A–C–E supplies the minor triad; G is the minor 7th; B is the 9th. The numbers describe each note’s relationship to A, not which fret to play. Try the upper B on its own, then within the chord.'],
    ['How do four bars develop one chord?', 'Bar 1 separates bass and upper chord. Bar 2 lets you hear the individual notes. Bar 3 moves the highest note C–B–A while the inner voices stay in place. Bar 4 returns to B on top. This is a melody above one harmony, not a completely new chord for every note.'],
  ],
  major9: [
    ['How is Cmaj9 different from C or C7?', 'C major starts with C–E–G. Cmaj7 adds B, the major 7th; Cmaj9 adds D, the 9th. C7 instead uses B♭ and has a different sound. Our voicing leaves out G to fit C–E–B–D comfortably on four strings.'],
    ['Why play the notes separately first?', 'When you arpeggiate, you can hear each chord ingredient. The opening C, E, B and D are root, 3rd, major 7th and 9th. The middle bars move D to E and back on the B string. Keep the other notes soft so this tiny melody is easy to hear.'],
  ],
  twofive: [
    ['What does ii–V mean?', 'In C major, count C=1, D=2, E=3, F=4, G=5. A chord built from the second scale note is called ii; one from the fifth is V. Lowercase ii signals minor, uppercase V signals major. Dm9 to G13 is a richer version of D minor to G. Here it then resolves to Cmaj9, the I chord.'],
    ['Why do these chord changes sound smooth?', 'Dm9 contains D–F–C–E. G13 here contains G–F–B–E–A; E is its 13th. Cmaj9 contains C–E–B–D. Notice C moving down one semitone to B in the first change, then F moving down to E in the next. This is voice leading. Play just those moving notes, then restore the complete shapes.'],
  ],
  melodychord: [
    ['Is the moving high note changing the entire chord?', 'The steady A bass and G–C–E inner voices keep the A minor character underneath. The high note moves between A, B and C: root, 9th and minor 3rd. Calling it a melody over Am7 is often more useful than assigning a new chord name to every instant.'],
    ['How do I make the melody stand out?', 'First play only the high notes and sing their shape. Add the middle strings very quietly, then the bass. Bar 3 briefly moves the melody onto the B string; bar 4 returns to high A. Aim for one connected top line with gentle harmony underneath.'],
  ],
  hear9: [
    ['How can B be both a 2nd and a 9th?', 'Count A=1, B=2, C=3, D=4, E=5, F=6, G=7, A=8, B=9. It is the same note name in another octave. When that B adds colour to an Am7 chord, we call it a 9th. You can first learn its sound and location without memorizing the terminology.'],
    ['What should I compare?', 'In bar 1, the first chord has high A and the second has high B; everything below stays the same. In bar 2, play A–B–A as single high notes before the last Am9. Ask yourself which feels more settled. Neither is wrong; they simply make different endings.'],
  ],
  guide: [
    ['Why are just two notes enough to suggest a chord?', 'The guide tones are its 3rd and 7th. Dm7 uses F and C; G7 uses B and F; Cmaj7 uses E and B. These notes carry much of each chord’s character. Bar 1 leaves the root out so you can concentrate on the little changes between the pairs.'],
    ['What does adding the bass change?', 'Bar 2 repeats the upper pairs with D, G and C underneath. Those bass notes make the chord names easier to hear. Follow C down to B, then F down to E. Each movement is one semitone, and the other upper note stays put: a small example of voice leading.'],
  ],
};

export const escapeHtml = (text: string) => text.replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]!));
const terms = Object.keys(glossary).sort((a,b) => b.length - a.length);
const pattern = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');
export function annotate(text: string): string {
  let result = '', previous = 0;
  for (const match of text.matchAll(pattern)) {
    const definition = glossary[match[0].toLowerCase()];
    result += escapeHtml(text.slice(previous, match.index));
    result += `<details class="term"><summary title="${escapeHtml(definition.short)}">${escapeHtml(match[0])}</summary><span class="term-explanation">${escapeHtml(definition.detail)}</span></details>`;
    previous = match.index! + match[0].length;
  }
  return result + escapeHtml(text.slice(previous));
}
export function renderLesson(id: string): string {
  return lessons[id].map(([question, answer]) => `<details class="lesson"><summary>${escapeHtml(question)}</summary><div class="annotated">${annotate(answer)}</div></details>`).join('');
}
