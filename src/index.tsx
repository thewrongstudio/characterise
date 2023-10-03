import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './pages/home'
import Characters from './pages/characters'
import NotFound from './pages/not-found'

import './styles.css'
import primaryColourScheme from './data/colour-schemes/primary-1'

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
  const [colourScheme] = useState(primaryColourScheme)
  useEffect(
    () => {
      document.documentElement.style.setProperty('--backdrop-colour', colourScheme.backdropColour)
      document.documentElement.style.setProperty('--primary-background-colour', colourScheme.primaryBackgroundColour.colour)
      document.documentElement.style.setProperty('--secondary-background-colour', colourScheme.secondaryBackgroundColour.colour)
      document.documentElement.style.setProperty('--button-background-colour', colourScheme.buttonBackgroundColour.colour)
      document.documentElement.style.setProperty('--primary-text-colour', colourScheme.primaryBackgroundColour.aligned ? colourScheme.alignedTextColour : colourScheme.unalignedTextColour)
      document.documentElement.style.setProperty('--secondary-text-colour', colourScheme.secondaryBackgroundColour.aligned ? colourScheme.alignedTextColour : colourScheme.unalignedTextColour)
      document.documentElement.style.setProperty('--button-text-colour', colourScheme.buttonBackgroundColour.aligned ? colourScheme.alignedTextColour : colourScheme.unalignedTextColour)
    },
    [colourScheme],
  )
  return <RouterProvider router={router}/>
}

root.render(<App/>)
