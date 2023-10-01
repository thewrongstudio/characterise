import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/not-found'

import './styles.css'

const appElement = document.getElementById('app')
if (appElement === null) {
  throw new Error('Could not find app element to attach React root to.')
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
])

const root = createRoot(appElement)
root.render(<RouterProvider router={router}/>)
