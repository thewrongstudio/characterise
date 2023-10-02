import React from 'react'

import './styles.css'

export default function Page({children}: {children: React.ReactNode}) {
  return <div className='page'>
    <header>cats be here</header>
    <div className='content'>{children}</div>
    <footer>cats be here too</footer>
  </div>
}