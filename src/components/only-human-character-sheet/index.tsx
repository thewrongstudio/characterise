import React from 'react'

import { OnlyHumanCharacter } from '@/models/only-human/only-human-character'

import { communications } from '@/data/only-human/roles/communications'
import { coreSkillKeys, coreSkills, zeroSkills } from '@/data/only-human/core-skills'

import './styles.css'
import { OnlyHumanSkillWithPoints } from '@/models/only-human/only-human-attributes'

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

export function OnlyHumanCharacterSheet() {

  // This is character skills with points but alphabetical
  const orderedCoreSkills: OnlyHumanSkillWithPoints[] = coreSkillKeys
    .map(coreSkillKey => ({...coreSkills[coreSkillKey], points: character.coreSkills[coreSkillKey]}))
    .sort((skillA, skillB) => skillA.name < skillB.name ? -1 : 1)

  const orderedCustomSkills: OnlyHumanSkillWithPoints[] = character.customSkills
    .sort((skillA, skillB) => skillA.name < skillB.name ? -1 : 1)

  return <div className='only-human-character-sheet'>
    <div>
      <div className='character-header'>
        <h1>{character.name}</h1>
        <span><em>{character.role.name}</em></span>
      </div>
      <div className='stats'>
        <div>
          <label>DEX</label>
          <span>{character.stats.DEX}</span>
        </div>
        <div>
          <label>INT</label>
          <span>{character.stats.INT}</span>
        </div>
        <div>
          <label>STR</label>
          <span>{character.stats.STR}</span>
        </div>
        <div>
          <label>WIL</label>
          <span>{character.stats.WIL}</span>
        </div>
      </div>
      <div>
        {orderedCoreSkills.map(skill => <p key={skill.name}>{skill.stats[0]} {skill.stats[1]} {skill.name} {skill.points + character.stats[skill.stats[0]] + character.stats[skill.stats[1]]}</p>)}
      </div>
      <div>
        {orderedCustomSkills.map(skill => <p key={skill.name}>{skill.stats[0]} {skill.stats[1]} {skill.name} {skill.points + character.stats[skill.stats[0]] + character.stats[skill.stats[1]]}</p>)}
      </div>
    </div>

    <div className='right-panel'>
      <p>other cat</p>
    </div>
  </div>
}