import { createContext, useEffect } from 'react'

import { ThemeName, getTheme } from '@/data/themes'
import { applyTheme } from '@/models/theme'
import StorageData from '@/models/storage-data'
import { StorageDispatch } from '@/reducers/storage-reducer'

export type ThemeContextValue = {
  setTheme: (themeName: ThemeName) => void,
}

const defaultThemeContextValue: ThemeContextValue = {
  setTheme: () => {throw new Error('Default setTheme should not be called')},
}

export function useThemeState(
  storageData: StorageData,
  storageDispatch: StorageDispatch,
): ThemeContextValue {
  const {themeName} = storageData

  useEffect(
    () => {applyTheme(getTheme(themeName))},
    [themeName],
  )

  return {
    setTheme: (themeName) => storageDispatch({type: 'setTheme', themeName}),
  }

}
const ThemeContext = createContext(defaultThemeContextValue)

export default ThemeContext