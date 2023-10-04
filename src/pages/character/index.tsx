import Page from '@/components/page'
import React, { useState } from 'react'

export default function Character() {
  const [count, setCount] = useState(-1)

  function handleClick() {
    setCount(count + 1)
  }

  return <Page className='character'>
    <h1>This is a button you can click</h1>

    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  
  </Page>
}