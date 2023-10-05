import { createContext, useReducer } from 'react'

import StorageData, { defaultStorageData } from '@/models/storage-data'

import storageReducer, { StorageAction } from './storage-reducer'

export function useStorageState(): StorageContextValue {
  const [storageData, dispatch] = useReducer(storageReducer, defaultStorageData)
  return {storageData, dispatch}
}

type StorageContextValue = {
  storageData: StorageData,
  dispatch: (action: StorageAction) => void
}

const defaultStorageContextValue: StorageContextValue = {
  storageData: defaultStorageData,
  dispatch: () => {
    throw new Error(
      'The default storage context value dispatch should not be called',
    )
  },
}

const storageContext = createContext(defaultStorageContextValue)
export default storageContext