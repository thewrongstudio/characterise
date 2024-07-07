import React from 'react'

import Page from '@/components/page'
import { BoxButtons, Button } from '@/components/box-buttons'

import './styles.css'

const buttons: Button[] = [
  {key: 'create', text: 'Create Character', action: {type: 'link', to: '/characters/0'}},
  {key: 'view', text: 'View Characters', action: {type: 'link', to: '/characters'}},
]

export default function Home() {
  return <Page className='home'>
    <h1>Welcome to Characterise!</h1>
    <p>About Characterise here.</p>

    <BoxButtons buttons={buttons}/>
  </Page>
}