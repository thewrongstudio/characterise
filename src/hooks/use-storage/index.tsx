import { useEffect, useReducer } from 'react'

import StorageData, { defaultStorageData, deserialiseStorageData, serialiseStorageData } from '@/models/storage-data'

import storageReducer, { StorageDispatch } from './storage-reducer'

const LOCAL_STORAGE_KEY = 'characteriseData'

export default function useStorage(): [StorageData, StorageDispatch] {
  const [storageData, storageDispatch] = useReducer(storageReducer, defaultStorageData)

  // Run first-time setup from local storage.
  useEffect(
    () => {
      const storedData = window.localStorage.getItem(LOCAL_STORAGE_KEY)
      if (storedData === null) return

      storageDispatch({
        type: 'setStorage',
        storageData: deserialiseStorageData(storedData),
      })
    },
    [],
  )

  // Save storageData to localStorage whenever it updates.
  useEffect(
    () => {
      window.localStorage.setItem(
        LOCAL_STORAGE_KEY,
        serialiseStorageData(storageData),
      )
    },
    [storageData],
  )

  return [storageData, storageDispatch]
}