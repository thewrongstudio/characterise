import React, { useState } from 'react'

import './styles.css'

export default function OnlyHumanCharacterSheet() {
  const [count, setCount] = useState(-1)
  const [strength, setStrength] = useState('0')

  function handleClick() {
    setCount(count + 1)
  }

  return <div className='only-human-character-sheet'>
    <div>
      <h1>This is a button you can click</h1>

      <button onClick={handleClick}>
        Clicked {count} times
      </button>

      <p>cat</p>
      <input 
        value={strength}
        onChange={event => setStrength(event.target.value)}
      />
    </div>
    <div className='right-panel'>
      <p>other cat</p>
    </div>
  </div>
}