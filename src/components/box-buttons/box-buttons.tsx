import React, { ReactElement } from 'react'

import './styles.css'
import { Link } from 'react-router-dom'

type LinkAction = {type: 'link', to: string}
type CallbackAction = {type: 'callback', callback: () => void}
type ButtonAction = LinkAction | CallbackAction
export type Button = {text: string, key: string, action: ButtonAction}

type Props = {
  buttons: Button[]
}

function renderButton({text, key, action}: Button): ReactElement {
  switch (action.type) {
  case 'link':
    return <Link key={key} to={action.to}>{text}</Link>
  case 'callback':
    return <button key={key} onClick={action.callback}>{text}</button>
  }
}

export function BoxButtons({buttons}: Props) {
  return <div className='box-links'>{buttons.map(renderButton)}</div>
}