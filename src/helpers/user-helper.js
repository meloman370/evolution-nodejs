import axios from 'axios'

export const ROLES = {
  ADMIN: 1,
  MANAGER: 2,
  CUSTOMER: 3
}

export async function userLogin(username, password) {
  try {
    const response = await axios.post(process.env.API_URL + '/auth_token/token/login', {
      username,
      password
    })
    const token = response.data.auth_token
    localStorage.setItem('auth_token', token)
    return token
  } catch(error) {
    throw error.response.data
  }
}

export function userGetToken() {
  return localStorage.getItem('auth_token')
}

export function userIsLoggedIn() {
  const token = userGetToken()
  return !!token
}
