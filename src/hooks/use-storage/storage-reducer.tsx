import { ThemeName } from '@/data/themes'
import StorageData from '@/models/storage-data'

export type StorageAction = {
  // This should only be used when loading for the first time from local
  // storage.
  type: 'setStorage'
  storageData: StorageData
} | {
  type: 'setTheme',
  themeName: ThemeName
}

export type StorageDispatch = (action: StorageAction) => void

export default function storageReducer(
  state: StorageData,
  action: StorageAction,
): StorageData {
  switch(action.type) {
  case 'setStorage':
    return action.storageData
  case 'setTheme':
    return {
      ...state,
      themeName: action.themeName,
    }
  }
}