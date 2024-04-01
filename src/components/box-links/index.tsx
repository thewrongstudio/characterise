import React from 'react'

import './styles.css'
import { Link } from 'react-router-dom'

type Props = {
  linkDetails: {destination: string, text: string}[]
}

export function BoxLinks({linkDetails}: Props) {
  return <div className='box-links'>
    {
      linkDetails.map(details => 
        <Link key={details.destination} to={details.destination}>
          {details.text}
        </Link>,
      )
    }
  </div>
}