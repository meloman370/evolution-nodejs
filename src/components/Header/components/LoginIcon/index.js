import React, { memo, useState } from 'react'
import LoginIconStyled from './style'
import Icon from '../../../Icon'
import LoginModal from '../LoginModal'

const LoginIcon = () => {
  const [open, setOpen] = useState(false)
  const onClickHandler = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return(
    <LoginIconStyled>
      <Icon name="login_icon.png" alt="login" onClick={onClickHandler}/>
      <LoginModal open={open} onClose={onClose}/>
    </LoginIconStyled>
  )
}

export default memo(LoginIcon)