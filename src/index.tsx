import React from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'
import App from './components/app'

const appElement = document.getElementById('app')
if (appElement === null) {
  throw new Error('Could not find app element to attach React root to')
}

const root = createRoot(appElement)
root.render(<App/>)
