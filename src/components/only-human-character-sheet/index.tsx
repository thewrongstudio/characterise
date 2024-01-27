import React, { useState } from 'react'

import { OnlyHumanCharacter } from '@/models/only-human/only-human-character'

import { communications } from '@/data/only-human/roles/communications'
import { zeroSkills } from '@/data/only-human/core-skills'

import './styles.css'

const character: OnlyHumanCharacter = {
  name: 'Cat',
  stats: {
    DEX: 2,
    INT: 1,
    STR: 0,
    WIL: 1,
  },
  role: communications,
  coreSkills: {
    ...zeroSkills,
    speed: 3,
    persuasion: 6,
    evasion: 3,
    stealth: 3,
  },
  customSkills: [{
    name: 'Baking',
    stats: ['DEX', 'WIL'],
    points: 3,
  }],
}

console.log(character)

export default function OnlyHumanCharacterSheet() {
  const [dexterity, setDexterity] = useState('0')
  const [intelligence, setIntelligence] = useState('0')
  const [strength, setStrength] = useState('0')
  const [will, setWill] = useState('0')

  console.log(strength)

  return <div className='only-human-character-sheet'>
    <div>
      <input
        className='character-name'
      />
      <div className='stats'>
        <div>
          <label>DEX</label>
          <input
            value={dexterity}
            onChange={event => setDexterity(event.target.value)}
          />
        </div>
        <div>
          <label>INT</label>
          <input 
            value={intelligence}
            onChange={event => setIntelligence(event.target.value)}
          />
        </div>
        <div>
          <label>STR</label>
          <input 
            value={strength}
            onChange={event => setStrength(event.target.value)}
          />
        </div>
        <div>
          <label>WIL</label>
          <input 
            value={will}
            onChange={event => setWill(event.target.value)}
          />
        </div>
      </div>
    </div>

    <div className='right-panel'>
      <p>other cat</p>
    </div>
  </div>
}