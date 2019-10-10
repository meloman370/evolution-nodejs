import React, {memo} from 'react'
import {ROLES} from '../../../../helpers/user-helper'
import AdminPanel from './components/AdminPanel'

const {
  ADMIN, 
  MANAGER, 
  CUSTOMER
} = ROLES

const Profile = ({role}) => {
  switch(role) {
    case ADMIN:
      return <AdminPanel/>
    case MANAGER:
      return <div>manager</div>
    case CUSTOMER:
      return <div>customer</div>
    default:
      return <div>role undefined</div>
  }
}

export default memo(Profile)