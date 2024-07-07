import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import ThemeContext, { useThemeState } from './contexts/theme-context'

import Home from './pages/home'
import Characters from './pages/characters'
import Character from './pages/character'
import { SettingsPage } from './pages/settings'
import NotFound from './pages/not-found'

import useStorage from './hooks/use-storage'

import './styles.css'

const appElement = document.getElementById('app')
if (appElement === null) {
  throw new Error('Could not find app element to attach React root to.')
}
const root = createRoot(appElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/characters',
    element: <Characters/>,
  },
  {
    path: '/settings',
    element: <SettingsPage/>,
  },
  {
    path: '/characters/:character-id',
    element: <Character/>,
  },
])

function App() {
  const [storageData, storageDispatch] = useStorage()

  const themeState = useThemeState(storageData, storageDispatch)

  return <ThemeContext.Provider value={themeState}>
    <RouterProvider router={router}/>
  </ThemeContext.Provider>
}

root.render(<App/>)
