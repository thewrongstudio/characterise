import React, { ReactNode, useCallback, useEffect, useRef } from 'react'

import './styles.css'
import { Button } from '../button'

type Props = {
  setIsOpen: (newIsOpen: boolean) => void
  isOpen: boolean
  children?: ReactNode
}

export function Modal({isOpen, setIsOpen, children}: Props) {
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
    {children}
  </dialog>
}