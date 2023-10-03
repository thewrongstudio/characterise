import React from 'react'

import Page from '@/components/page'

import './styles.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return <Page className='home'>
    <h1>Welcome to Characterise!</h1>
    <p>About Characterise here.</p>
    <div className='box-links'>
      <Link to='/'>
        Create Character
      </Link>
      <Link to='/characters'>
        View Characters
      </Link>
    </div>
  </Page>
}