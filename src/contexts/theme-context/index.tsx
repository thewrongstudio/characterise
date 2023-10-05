import { createContext, useContext, useEffect } from 'react'

import { ThemeName, getTheme } from '@/data/themes'
import { applyTheme } from '@/models/theme'
import storageContext from '../storage-context'

export type ThemeContextValue = {
  setTheme: (themeName: ThemeName) => void,
}

const defaultThemeContextValue: ThemeContextValue = {
  setTheme: () => {throw new Error('Default setTheme should not be called')},
}

export function useThemeState(): ThemeContextValue {
  const {storageData: {themeName}, dispatch} = useContext(storageContext)

  useEffect(
    () => {applyTheme(getTheme(themeName))},
    [themeName],
  )

  return {setTheme: (themeName) => dispatch({type: 'setTheme', themeName})}

}
const themeContext = createContext(defaultThemeContextValue)

export default themeContext