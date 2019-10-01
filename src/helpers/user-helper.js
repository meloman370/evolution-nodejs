import axios from 'axios'

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
