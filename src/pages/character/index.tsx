import {Page} from '@/components/page'
import {OnlyHumanCharacterSheet} from '@/components/only-human-character-sheet'
import React from 'react'

export function Character() {
  return <Page className='character'>
    <OnlyHumanCharacterSheet/>
  </Page>
}