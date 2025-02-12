import React, { useEffect, useState } from 'react'
import { Key, Progression } from '../App'
import { generateChords } from '../services/ChordProgressionService';

interface ChordProgressionDisplayProps {
  musicKey: string,
  major: boolean,
  progression: Progression
}

const ChordProgressionDisplay = (props: ChordProgressionDisplayProps) => {
  const { musicKey, major, progression } = props;
  let generatedChords: string[] = [];

  if (musicKey) {
    generatedChords = generateChords(progression, musicKey, major);  
  }
  
  return (
    <p>{generatedChords.join(' ')}</p>
  )
}

export default ChordProgressionDisplay
