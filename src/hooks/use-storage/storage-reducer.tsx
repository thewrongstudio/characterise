import { ThemeName } from '@/data/themes'
import StorageData from '@/models/storage-data'

export type StorageAction = {
  type: 'setTheme',
  themeName: ThemeName
}

export type StorageDispatch = (action: StorageAction) => void

export default function storageReducer(
  state: StorageData,
  action: StorageAction,
): StorageData {
  switch(action.type) {
  case 'setTheme':
    return {
      ...state,
      themeName: action.themeName,
    }
  }
}