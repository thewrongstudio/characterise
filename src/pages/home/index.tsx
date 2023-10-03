import React, { useContext } from 'react'

import Page from '@/components/page'
import BoxLinks from '@/components/box-links'

import './styles.css'
import ThemeContext from '@/contexts/theme-context'

export default function Home() {
  const themeContext = useContext(ThemeContext)
  
  return <Page className='home'>
    <h1>Welcome to Characterise!</h1>
    <p>About Characterise here.</p>
    <button onClick={() => themeContext.setTheme('light')}>Light Theme</button>
    <button onClick={() => themeContext.setTheme('old-light')}>Old Light Theme</button>
    <button onClick={() => themeContext.setTheme('dark')}>Dark Theme</button>

    <BoxLinks linkDetails={[
      {destination: '/', text: 'Create Character'}, 
      {destination: '/characters', text: 'View Characters'},
    ]}/>
  </Page>
}