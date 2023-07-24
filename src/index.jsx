import React from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'
import App from './components/app'

const root = createRoot(document.getElementById('app'))
root.render(<App/>)
