import { createContext, useEffect } from 'react'

import { ThemeName, getTheme } from '@/data/themes'
import { applyTheme } from '@/models/theme'
import StorageData from '@/models/storage-data'
import { StorageDispatch } from '@/hooks/use-storage/storage-reducer'

export type ThemeContextValue = {
  setTheme: (themeName: ThemeName) => void,
}

const defaultThemeContextValue: ThemeContextValue = {
  setTheme: () => {throw new Error('Default setTheme should not be called')},
}

function handleSystemThemeChange() {
  applyTheme(getTheme('system'))
}

export function useThemeState(
  storageData: StorageData,
  storageDispatch: StorageDispatch,
): ThemeContextValue {
  const {themeName} = storageData

  useEffect(
    () => {
      applyTheme(getTheme(themeName))

      const themeMediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

      if (themeName === 'system') {
        themeMediaQueryList.addEventListener('change', handleSystemThemeChange)
        return () => themeMediaQueryList.removeEventListener(
          'change',
          handleSystemThemeChange,
        )
      }
    },
    [themeName],
  )

  return {
    setTheme: (themeName) => storageDispatch({type: 'setTheme', themeName}),
  }

}
const ThemeContext = createContext(defaultThemeContextValue)

export default ThemeContext