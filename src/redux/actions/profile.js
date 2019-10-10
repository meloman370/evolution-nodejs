import axios from 'axios'
import {userGetToken} from '../../helpers/user-helper'

export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'

function requestProfile() {
  return {
    type: REQUEST_PROFILE
  }
}

function receiveProfile(json) {
  return {
    type: RECEIVE_PROFILE,
    info: json
  }
}

export function fetchProfile() {
  return dispatch => {
    dispatch(requestProfile())
    const token = userGetToken()
    return axios.get(process.env.API_URL + `/my-profile/`, {headers: {Authorization: `Token ${token}`}}).then(response => {
      dispatch(receiveProfile(response.data))
    }).catch(error => {
      dispatch(receiveProfile([]))
    }) 
  }
}