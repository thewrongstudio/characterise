import { createContext, useEffect, useState } from 'react'
import lightTheme from '@/data/colour-schemes/primary-1'
import oldLightTheme from '@/data/colour-schemes/primary'
import darkTheme from '@/data/colour-schemes/dark'

export const themes = {
  'light': lightTheme,
  'dark': darkTheme,
  'old-light': oldLightTheme,
} 

type ThemeName = keyof typeof themes

export type ThemeContextValue = {
  setTheme: (themeName: ThemeName) => void,
}

const defaultThemeContextValue: ThemeContextValue = {
  setTheme: () => {throw new Error('Default setTheme should not be called')},
}

export function useTheme(): ThemeContextValue {
  const [theme, setTheme] = useState(lightTheme)

  useEffect(
    () => {
      document.documentElement.style.setProperty('--backdrop-colour', theme.backdropColour)
      document.documentElement.style.setProperty('--primary-background-colour', theme.primaryBackgroundColour.colour)
      document.documentElement.style.setProperty('--secondary-background-colour', theme.secondaryBackgroundColour.colour)
      document.documentElement.style.setProperty('--button-background-colour', theme.buttonBackgroundColour.colour)
      document.documentElement.style.setProperty('--primary-text-colour', theme.primaryBackgroundColour.aligned ? theme.alignedTextColour : theme.unalignedTextColour)
      document.documentElement.style.setProperty('--secondary-text-colour', theme.secondaryBackgroundColour.aligned ? theme.alignedTextColour : theme.unalignedTextColour)
      document.documentElement.style.setProperty('--button-text-colour', theme.buttonBackgroundColour.aligned ? theme.alignedTextColour : theme.unalignedTextColour)
    },
    [theme],
  )
  return {setTheme: (themeName) => setTheme(themes[themeName])}

}
const ThemeContext = createContext(defaultThemeContextValue)

export default ThemeContext