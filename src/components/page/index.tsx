import React from 'react'

import './styles.css'

export default function Page({children}: {children: React.ReactNode}) {
  return <div className='page'>
    {children}
  </div>
}