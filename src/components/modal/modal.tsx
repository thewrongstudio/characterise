import React, { useCallback, useEffect, useRef } from 'react'

import './styles.css'
import { Button } from '../button'

type Props = {
  onClose: () => void
  open: boolean
}

export function Modal({open, onClose}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const show = useCallback(() => dialogRef.current?.showModal(), [])
  const hide = useCallback(() => dialogRef.current?.close(), [])

  useEffect(() => {
    if (open) { 
      show()
    } else {
      hide()
    }
  }, [hide, open, show])

  const handleDialogClick = useCallback((event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (event.target instanceof HTMLDialogElement) {
      onClose()
    }
  }, [onClose])

  const handleDialogKeyDown = useCallback((event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key == 'Escape') {
      event.preventDefault()
      onClose()
    }
  }, [onClose])

  return <dialog ref={dialogRef} onClick={handleDialogClick} onKeyDown={handleDialogKeyDown}>
    <div>
      <h1>This is a modal</h1>
      <p>hello!</p>
      <Button>
        close
      </Button>
    </div>
  </dialog>
}