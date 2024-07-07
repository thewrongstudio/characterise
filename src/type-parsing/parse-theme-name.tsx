import { ThemeName, themeNames } from '@/data/themes'
import makeEnglishStringList from '@/utilities/makeEnglishStringList'

export function parseThemeName(input: unknown): ThemeName {
  if (!(typeof input === 'string')) {
    throw new Error(
      `expected 'typeof input' to be 'string' but got '${typeof input}'`,
    )
  }

  for (const testThemeName of themeNames) {
    if (input === testThemeName) {
      return testThemeName
    }
  }

  const expected = 'one of ' + makeEnglishStringList(
    themeNames.map(themeName => `'${themeName}'`),
    'or',
  )
  throw new Error(
    `expected input to be ${expected} but got '${input}'`,
  )
}