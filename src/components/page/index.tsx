import React from 'react'

import './styles.css'
import { Link } from 'react-router-dom'

export default function Page({children}: {children: React.ReactNode}) {
  return <div className='page'>
    <header>
      <div className='menu-container'>
        <Link to="/" className="logo">C</Link>
        <Link to="/characters">Characters</Link>
      </div>
    </header>

    <div className='content'>{children}</div>

    <footer>
      <p>Made, with <span className="heart" role="img" aria-label="love">❤️</span>, by Liza and James</p>
    </footer>
  </div>
}