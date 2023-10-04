import React from 'react'

import Page from '@/components/page'
import BoxLinks from '@/components/box-links'

import './styles.css'

export default function Home() {
  
  return <Page className='home'>
    <h1>Welcome to Characterise!</h1>
    <p>About Characterise here.</p>

    <BoxLinks linkDetails={[
      {destination: '/', text: 'Create Character'}, 
      {destination: '/characters', text: 'View Characters'},
    ]}/>
  </Page>
}