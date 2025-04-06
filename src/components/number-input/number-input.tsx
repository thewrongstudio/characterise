import React from 'react'

import './styles.css'

type Props = {
  value: number
  minimum?: number
  maximum?: number
}

export function NumberInput({value, minimum, maximum}: Props) {
  return <input
    className="number-input"
    type='number'
    value={value}
    min={minimum}
    max={maximum}
  ></input>
}