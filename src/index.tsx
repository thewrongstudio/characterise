import React, { Context, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import themeContext, { useThemeState } from './contexts/theme-context'
import storageContext, { useStorageState } from './contexts/storage-context'

import Home from './pages/home'
import Characters from './pages/characters'
import Character from './pages/character'
import Settings from './pages/settings'
import NotFound from './pages/not-found'

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
    element: <Settings/>,
  },
  {
    path: '/character',
    element: <Character/>,
  },
])

type ProviderComponent = ({children}: {children: ReactNode}) => ReactNode

function makeProvider<T>(
  context: Context<T>,
  useContextState: () => T,
): ProviderComponent {
  function Provider({children}: {children: ReactNode}) {
    const contextState = useContextState()

    return <context.Provider value={contextState}>{children}</context.Provider>
  }
  return Provider
}

function ContextsProvider({providers, children}: {
  providers: ProviderComponent[],
  children: ReactNode,
}) {
  let component = children
  for (const Provider of providers.reverse()) {
    component = <Provider>{component}</Provider>
  }
  return component
}

const providers: ProviderComponent[] = [
  makeProvider(storageContext, useStorageState),
  makeProvider(themeContext, useThemeState),
]

function App() {
  return <ContextsProvider providers={providers}>
    <RouterProvider router={router}/>
  </ContextsProvider>
}

root.render(<App/>)
