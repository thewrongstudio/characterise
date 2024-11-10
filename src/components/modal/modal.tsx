import React, { useCallback, useRef } from 'react'

import './styles.css'

export function Modal() {

  const dialogRef = useRef<HTMLDialogElement>(null)

  const show = useCallback(() => dialogRef.current?.showModal(), [])
  const hide = useCallback(() => dialogRef.current?.close(), [])

  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (event.target instanceof HTMLDialogElement) {
      hide()
    }
  } 

  return <div>
    <button onClick={() => show()}>open</button>
    <dialog ref={dialogRef} onClick={handleDialogClick}>
      <div>
        <h1>This is a modal</h1>
        <p>hello!</p>
      </div>
    </dialog>
  </div>
}