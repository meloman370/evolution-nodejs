import axios from 'axios'

export const REQUEST_MENU = 'REQUEST_MENU'
export const RECEIVE_MENU = 'RESIEVE_MENU'


function requestMenu() {
  return {
    type: REQUEST_MENU
  }
}

function receiveMenu(json) {
  return {
    type: RECEIVE_MENU,
    items: json
  }
}

export function fetchMenu() {
  return dispatch => {
    dispatch(requestMenu())
    return axios.get(process.env.API_URL + `/menu/`).then(response => {
      dispatch(receiveMenu(response.data))
    }).catch(error => {
      dispatch(receiveMenu([]))
    }) 
  }
}

function shouldFetchMenu(state) {
  if (state.menu.isFetching || state.menu.items.length > 0) {
    return false
  }
  return true
}

export function fetchMenuIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchMenu(getState())) {
      return dispatch(fetchMenu())
    }
  }
}
