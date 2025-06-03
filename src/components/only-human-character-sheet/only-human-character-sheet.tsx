import React, { useState } from 'react'

import { communications } from '@/data/only-human/roles/communications'
import { coreSkillKeys, coreSkills, zeroSkills } from '@/data/only-human/core-skills'

import { OnlyHumanCharacter } from '@/models/only-human/only-human-character'
import { OnlyHumanSkillWithPoints } from '@/models/only-human/only-human-attributes'

import { Tabs } from '@/components/tabs'
import { Modal } from '@/components/modal'
import { NumberInput } from '@/components/number-input'

import './styles.css'
import { OnlyHumanStatsModal } from '../only-human-stats-modal'

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

export function OnlyHumanCharacterSheet() {
  // This is character skills with points but alphabetical
  const orderedCoreSkills: OnlyHumanSkillWithPoints[] = coreSkillKeys
    .map(coreSkillKey => ({...coreSkills[coreSkillKey], points: character.coreSkills[coreSkillKey]}))
    .sort((skillA, skillB) => skillA.name < skillB.name ? -1 : 1)

  const orderedCustomSkills: OnlyHumanSkillWithPoints[] = character.customSkills
    .sort((skillA, skillB) => skillA.name < skillB.name ? -1 : 1)

  const [statsModalIsOpen, setStatsModalIsOpen] = useState(false)

  return <div className='only-human-character-sheet'>
    <Modal isOpen={statsModalIsOpen} setIsOpen={setStatsModalIsOpen}>
      <OnlyHumanStatsModal
        close={() => setStatsModalIsOpen(false)}
        stats={character.stats}
      />
    </Modal>
    <div>
      <NumberInput value={0} minimum={0} maximum={4}></NumberInput>
      <div className='character-header'>
        <h1>{character.name}</h1>
        <span><em>{character.role.name}</em></span>
      </div>
      <button className='stats' onClick={() => setStatsModalIsOpen(true)}>
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
      </button>
      <div>
        {orderedCoreSkills.map(skill => <p key={skill.name}>{skill.stats[0]} {skill.stats[1]} {skill.name} {skill.points + character.stats[skill.stats[0]] + character.stats[skill.stats[1]]}</p>)}
      </div>
      <div>
        {orderedCustomSkills.map(skill => <p key={skill.name}>{skill.stats[0]} {skill.stats[1]} {skill.name} {skill.points + character.stats[skill.stats[0]] + character.stats[skill.stats[1]]}</p>)}
      </div>
    </div>

    <div className='right-panel'>
      <Tabs tabs={[
        {key: 'inventory', name: 'Inventory', body: <p>Some inventory</p>},
        {key: 'actions', name: 'Actions', body: <p>Some actions</p>},
      ]}/>
    </div>
  </div>
}