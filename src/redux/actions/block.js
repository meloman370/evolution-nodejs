import axios from 'axios'

export const REQUEST_BLOCK = 'REQUEST_BLOCK'
export const RECEIVE_BLOCK = 'RECEIVE_BLOCK'

function requestBlock() {
  return {
    type: REQUEST_BLOCK
  }
}

function receiveBlock(json) {
  return {
    type: RECEIVE_BLOCK,
    items: json
  }
}

export function fetchBlock() {
  return dispatch => {
    dispatch(requestBlock())
    return axios.get(process.env.API_URL + `/blocks/`).then(response => {
      dispatch(receiveBlock(response.data))
    }).catch(error => {
      dispatch(receiveBlock([]))
    }) 
  }
}

function shouldFetchBlock(state) {
  if (state.block.isFetching || state.block.items.length > 0) {
    return false
  }
  return true
}

export function fetchBlockIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBlock(getState())) {
      return dispatch(fetchBlock())
    }
  }
}
