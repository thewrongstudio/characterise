import { ThemeName } from '@/data/themes'
import StorageData from '@/models/storage-data'

import { parseThemeName } from './parse-theme-name'

export default function parseStorageData(input: unknown): StorageData {
  if (typeof input !== 'object') {
    throw new Error(
      `expected typeof input to be 'object' but got '${typeof input}'`,
    )
  }

  if (input === null) {
    throw new Error('expected input to not be null (but it was null)')
  }

  if (!('themeName' in input)) {
    throw new Error(
      'expected input to have the key \'themeName\', but it did not',
    )
  }

  let themeName: ThemeName
  try {
    themeName = parseThemeName(input['themeName'])
  } catch (cause) {
    let message = 'expected input.themeName to be a ThemeName'
    if (cause instanceof Error) {
      message += `: ${cause.message}`
    }

    throw new Error(message, {cause})
  }

  return {
    themeName,
  }
}