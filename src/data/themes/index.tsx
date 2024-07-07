import { lightTheme } from '@/data/themes/light'
import { Theme } from '@/models/theme'

const nonSystemThemeNames = [
  'light',
] as const
type NonSystemThemeName = typeof nonSystemThemeNames[number]

const themes: Record<NonSystemThemeName, Theme> = {
  'light': lightTheme,
}

export const themeNames = [...nonSystemThemeNames, 'system'] as const
export type ThemeName = typeof themeNames[number]

export function getTheme(themeName: ThemeName): Theme {
  if (themeName === 'system') {
    // Use a default dark or light theme if the 'system' theme is selected.
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // TODO: Actually return a dark theme.
      return lightTheme
    }

    // Use a default light theme if the `prefers-color-scheme` is light or none.
    return lightTheme
  }

  return themes[themeName]
}
