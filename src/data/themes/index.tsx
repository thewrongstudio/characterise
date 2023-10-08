import light0 from '@/data/themes/light-0'
import light1 from '@/data/themes/light-1'
import dark0 from '@/data/themes/dark-0'
import Theme from '@/models/theme'

const nonSystemThemeNames = [
  'light-0',
  'light-1',
  'dark-0',
] as const
type NonSystemThemeName = typeof nonSystemThemeNames[number]

const themes: Record<NonSystemThemeName, Theme> = {
  'light-0': light0,
  'light-1': light1,
  'dark-0': dark0,
}

export const themeNames = [...nonSystemThemeNames, 'system'] as const
export type ThemeName = typeof themeNames[number]

export function getTheme(themeName: ThemeName): Theme {
  if (themeName === 'system') {
    // Use a default dark or light theme if the 'system' theme is selected.
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return dark0
    }

    // Use a default light theme if the `prefers-color-scheme` is light or none.
    return light1
  }

  return themes[themeName]
}
