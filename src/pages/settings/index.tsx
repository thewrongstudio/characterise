import React, { useContext } from 'react'

import {Page} from '@/components/page'

import './styles.css'
import ThemeContext from '@/contexts/theme-context'

export function Settings() {
  const themeContext = useContext(ThemeContext)
  
  return <Page className='settings'>
    <h1>Theme Preferences</h1>
    <div className='theme-options'>
      <button onClick={() => themeContext.setTheme('system')}>System</button>
      <button onClick={() => themeContext.setTheme('light-1')}>Light Theme</button>
      <button onClick={() => themeContext.setTheme('light-0')}>Old Light Theme</button>
      <button onClick={() => themeContext.setTheme('dark-0')}>Dark Theme</button>
    </div>
  </Page>
}