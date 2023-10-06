import { ThemeName } from '@/data/themes'
import { TypeParsingError } from '@/type-parsing'

import parseStorageData from '@/type-parsing/parse-storage-data'

export default interface StorageData {
  themeName: ThemeName
}

export const defaultStorageData: StorageData = {
  themeName: 'system',
}

export function deserialiseStorageData(serialisedStorageData: string): StorageData {
  let raw: unknown
  try {
    raw = JSON.parse(serialisedStorageData)
  } catch (error) {
    if (!(error instanceof SyntaxError)) {
      throw error
    }

    // TODO: Handle this better (certainly not silently)
    // Invalid JSON.
    return defaultStorageData
  }

  let storageData: StorageData
  try {
    storageData = parseStorageData(raw)
  } catch (error) {
    if (!(error instanceof TypeParsingError)) {
      throw error
    }

    // TODO: Handle this better (certainly not silently)
    // It wasn't a correctly structured StorageData object.
    return defaultStorageData
  }

  return storageData
}

export function serialiseStorageData(storageData: StorageData): string {
  return JSON.stringify(storageData)
}