import React, {memo} from 'react'
import {ModalDialog} from './style'

const Modal = ({open, onClose, children, ...props}) => {
  return(
    <ModalDialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" {...props}>
      {children}
    </ModalDialog>
  )
}

export default memo(Modal)