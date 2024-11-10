import React, { ReactNode } from 'react'

import './styles.css'

type Props = {
  children?: ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Button({children, onClick}: Props) {
  return <button className='button' onClick={onClick}>
    {children}
  </button>
}