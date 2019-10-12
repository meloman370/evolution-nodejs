import React, {memo} from 'react'
import {withRouter} from 'react-router-dom'
import {TabPanelTitle, TabPanelDescription, TabPanelContent} from '../../style'
import {ProfileTabStyled, ButtonStyled} from './style'
import {userLogout} from '../../../../../../helpers/user-helper'

const ProfileTabPanel = ({history}) => {
  const logout = () => {
    userLogout()
    history.push('/')
  }

  return(
    <ProfileTabStyled>
      <TabPanelTitle>Мой профиль</TabPanelTitle>
      <TabPanelDescription>Настройки профиля</TabPanelDescription>
      <TabPanelContent>
        <ButtonStyled onClick={logout} variant="contained" color="secondary">Выйти</ButtonStyled>
      </TabPanelContent>
    </ProfileTabStyled>
  )
}

export default memo(
  withRouter(ProfileTabPanel)
)