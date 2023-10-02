import React from 'react'
import { Link } from 'react-router-dom'

import Page from '@/components/page'

export default function About() {
  return <Page>
    <div>
      <p>A character sheet builder for a bunch of TTRPGs.</p>
      <p>Eventually. Hopefully.</p>
    </div>
    <p><Link to="/">Home</Link>.</p>
  </Page>
}