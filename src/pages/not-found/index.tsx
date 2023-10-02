import React from 'react'
import { Link } from 'react-router-dom'

import Page from '@/components/page'

export default function NotFound() {
  return <Page>
    <p>Sorry, we can&apos;t find the page you asked for.</p>
    <p>But, there&apos;s no place like <Link to="/">home</Link>.</p>
  </Page>
}