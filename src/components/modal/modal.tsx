import React, { useCallback, useEffect, useRef } from 'react'

import './styles.css'
import { Button } from '../button'

type Props = {
  setIsOpen: (newIsOpen: boolean) => void
  isOpen: boolean
}

export function Modal({isOpen, setIsOpen}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const show = useCallback(() => dialogRef.current?.showModal(), [])
  const hide = useCallback(() => dialogRef.current?.close(), [])

  useEffect(() => {
    if (isOpen) { 
      show()
    } else {
      hide()
    }
  }, [isOpen, hide, show])

  const handleDialogClick = useCallback((event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (event.target instanceof HTMLDialogElement) {
      setIsOpen(false)
    }
  }, [setIsOpen])

  const handleDialogKeyDown = useCallback((event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key == 'Escape') {
      event.preventDefault()
      setIsOpen(false)
    }
  }, [setIsOpen])

  return <dialog ref={dialogRef} onClick={handleDialogClick} onKeyDown={handleDialogKeyDown}>
    <div>
      <h1>This is a modal</h1>
      <p>hello!</p>
      <Button onClick={() => setIsOpen(false)}>Close</Button>
    </div>
  </dialog>
}