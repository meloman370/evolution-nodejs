import React, {memo, useState} from 'react'
import {withRouter} from 'react-router-dom'
import {userLogin} from '../../../../helpers/user-helper'
import {LoginModalStyled, Title, InputField, ButtonStyled, Error, Modal, Loader} from './style'

const LoginModal = ({open, onClose, history}) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changePass = (e) => {
    setPassword(e.target.value)
  }

  const signIn = async () => {
    setLoading(true)
    try {
      await userLogin(name, password)
      history.push('/profile')
      onClose()
    } catch(error) {
      setErrors(error)
    } finally {
      setLoading(false)
    }
  }

  return(
    <Modal open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <LoginModalStyled>
        <Title>Вход</Title>
        <InputField
          id="username"
          label="Имя пользователя"
          value={name}
          onChange={changeName}
          margin="normal"
          variant="outlined"
        />
        {errors['username'] &&
          <Error>{errors['username']}</Error>
        }
        <InputField
          id="password"
          label="Пароль"
          type="password"
          value={password}
          onChange={changePass}
          margin="normal"
          variant="outlined"
        />
        {errors['password'] &&
          <Error>{errors['password']}</Error>
        }
        {errors['non_field_errors'] && errors['non_field_errors'].map((error, i) => (
          <Error key={i}>{error}</Error>
        ))}
        <ButtonStyled variant="outlined" onClick={signIn}>
          {loading ? <Loader /> : 'Войти'}
        </ButtonStyled>
      </LoginModalStyled>
    </Modal>
  )
}

export default memo(
  withRouter(LoginModal)
)