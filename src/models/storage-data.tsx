import { ThemeName } from '@/data/themes'

export default interface StorageData {
  themeName: ThemeName
}

export const defaultStorageData: StorageData = {
  themeName: 'system',
}