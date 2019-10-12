import React, { memo, useState } from 'react'
import {withRouter} from 'react-router-dom'
import LoginIconStyled from './style'
import Icon from '../../../Icon'
import LoginModal from '../LoginModal'
import {userGetToken} from '../../../../helpers/user-helper'

const LoginIcon = ({history}) => {
  const [open, setOpen] = useState(false)
  const onClickHandler = () => {
    const token = userGetToken()
    if (token) {
      history.push('/profile')
    } else {
      setOpen(true)
    }
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

export default memo(
  withRouter(LoginIcon)
)
