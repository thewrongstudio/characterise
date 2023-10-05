import { useReducer } from 'react'

import StorageData, { defaultStorageData } from '@/models/storage-data'

import storageReducer, { StorageDispatch } from './storage-reducer'

export default function useStorage(): [StorageData, StorageDispatch] {
  const [storageData, storageDispatch] = useReducer(storageReducer, defaultStorageData)

  return [storageData, storageDispatch]
}