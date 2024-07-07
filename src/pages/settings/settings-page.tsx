import React, { useContext } from 'react'

import { Page } from '@/components/page'
import ThemeContext from '@/contexts/theme-context'
import { BoxButtons } from '@/components/box-buttons'

import './styles.css'

export function SettingsPage() {
  const themeContext = useContext(ThemeContext)
  
  return <Page className='settings'>
    <h1>Theme Preferences</h1>
    <BoxButtons buttons={[
      {key: 'light', text: 'Light', action: {type: 'callback', callback: () => themeContext.setTheme('light')}},
    ]}/>
  </Page>
}