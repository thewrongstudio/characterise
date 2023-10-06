import { ThemeName } from '@/data/themes'

import StorageData from '@/models/storage-data'

import { TypeParsingError } from '.'
import { parseThemeName } from './parse-theme-name'

export default function parseStorageData(input: unknown): StorageData {
  if (typeof input !== 'object') {
    throw new TypeParsingError(
      `expected typeof input to be 'object' but got '${typeof input}'`,
    )
  }

  if (input === null) {
    throw new TypeParsingError('expected input to not be null (but it was null)')
  }

  if (!('themeName' in input)) {
    throw new TypeParsingError(
      'expected input to have the key \'themeName\', but it did not',
    )
  }

  let themeName: ThemeName
  try {
    themeName = parseThemeName(input['themeName'])
  } catch (error) {
    if (!(error instanceof TypeParsingError)) {
      throw error
    }

    throw new TypeParsingError(
      `expected input.themeName to be a ThemeName: ${error.message}`,
      {cause: error},
    )
  }

  return {
    themeName,
  }
}