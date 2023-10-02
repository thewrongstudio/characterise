import React from 'react'

import Page from '@/components/page'
import { Link } from 'react-router-dom'

export default function Home() {
  return <Page>
    <p>Hello there.</p>
    <p><Link to="/about">About</Link>.</p>
  </Page>
}