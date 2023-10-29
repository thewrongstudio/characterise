import React, { useState } from 'react'

import './styles.css'

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