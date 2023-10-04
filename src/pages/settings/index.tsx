import React, { useContext } from 'react'

import Page from '@/components/page'

import './styles.css'
import ThemeContext from '@/contexts/theme-context'

export default function Settings() {
  const themeContext = useContext(ThemeContext)
  
  return <Page className='settings'>
    <h1>Theme Preferences</h1>
    <div className='theme-options'>
      <button onClick={() => themeContext.setTheme('light')}>Light Theme</button>
      <button onClick={() => themeContext.setTheme('old-light')}>Old Light Theme</button>
      <button onClick={() => themeContext.setTheme('dark')}>Dark Theme</button>
    </div>
  </Page>
}