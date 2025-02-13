import { Progression } from "../App";

interface ScaleDegrees {
  C: string[],
  G: string[],
  D: string[],
  A: string[],
  E: string[],
  B: string[],
  Gb: string[],
  Db: string[],
  Ab: string[],
  Eb: string[],
  Bb: string[],
  F: string[]
}

const majorScales: ScaleDegrees = {
  C: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
  G: ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'],
  D: ['D', 'E', 'F♯', 'G', 'A', 'B', 'C#', 'D'],
  A: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'],
  E: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'],
  B: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B',],
  Gb: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb'],
  Db: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'Db'],
  Ab: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab'],
  Eb: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb'],
  Bb: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'],
  F: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F']
};

const minorScales: ScaleDegrees = {
  C: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'],
  G: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G'],
  D: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C', 'D'],
  A: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'],
  E: ['E', 'F#', 'G', 'A', 'B', 'C', 'D', 'E'],
  B: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B'],
  Gb: ['Gb', 'Ab', 'Bbb', 'Cb', 'Db', 'Ebb', 'Fb', 'Gb'],
  Db: ['Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bbb', 'Cb', 'Db'],
  Ab: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab'],
  Eb: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb'],
  Bb: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb'],
  F: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F']
};

export const generateChords = (
  progression: Progression, 
  musicKey: string, 
  major: boolean
): string[] => {
  let scaleNotes: string[] = [];

  if (major) {
    scaleNotes = majorScales[musicKey as keyof ScaleDegrees]
  } else {
    scaleNotes = minorScales[musicKey as keyof ScaleDegrees]
  }

  // convert progression roman numerals to index values
  const degrees = progression.split(' ');
  const chordProgression = [];

  for (let degree of degrees) {
    switch (degree) {
      case 'i': 
        chordProgression.push(`${scaleNotes[0]}m`)
        break;
      case 'I': 
        chordProgression.push(scaleNotes[0]);      
        break;
      case 'ii':
        chordProgression.push(`${scaleNotes[1]}m`);
        break;
      case 'II':
        chordProgression.push(scaleNotes[1]);
        break;
      case 'iii': 
        chordProgression.push(`${scaleNotes[2]}m`)
        break;
      case 'III': 
        chordProgression.push(scaleNotes[2]);      
        break;
      case 'iv':
        chordProgression.push(`${scaleNotes[3]}m`);
        break;
      case 'IV':
        chordProgression.push(scaleNotes[3]);
        break;
      case 'v':
        chordProgression.push(`${scaleNotes[4]}m`);
        break;
      case 'V':
        chordProgression.push(scaleNotes[4]);
        break;
      case 'vi':
        chordProgression.push(`${scaleNotes[5]}m`);
        break;
      case 'VI':
        chordProgression.push(scaleNotes[5]);
        break;
      case 'vii':
        chordProgression.push(`${scaleNotes[6]}m`);
        break;
      case 'VII':
        chordProgression.push(scaleNotes[6]);
        break;
      default:
        console.error(`Unknown scale degree encountered: ${degree}`)
        break;
    }
  }
  
  return chordProgression;
};