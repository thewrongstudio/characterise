import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './pages/home'
import Characters from './pages/characters'
import NotFound from './pages/not-found'

import './styles.css'
import ThemeContext, { useTheme } from './contexts/theme-context'

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
])

function App() {
  const themeContextValue = useTheme()
  
  return <ThemeContext.Provider value={themeContextValue}>
    <RouterProvider router={router}/>
  </ThemeContext.Provider>
}

root.render(<App/>)
