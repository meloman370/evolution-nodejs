import axios from 'axios'

export const REQUEST_PRODUCT = 'REQUEST_PRODUCT'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'


function requestProduct() {
  return {
    type: REQUEST_PRODUCT
  }
}

function receiveProduct(json) {
  return {
    type: RECEIVE_PRODUCT,
    info: json
  }
}

function fetchProduct(id) {
  return dispatch => {
    dispatch(requestProduct())
    return axios.get(process.env.API_URL + `/product/` + id).then(response => {
      dispatch(receiveProduct(response.data))
    }).catch(error => {
      dispatch(receiveProduct([]))
    }) 
  }
}

function shouldFetchProduct(id, state) {
  if (state.product.isFetching || state.product.info.id == id) {
    return false
  }
  return true
}

export function fetchProductIfNeeded(id) {
  return (dispatch, getState) => {
    if (shouldFetchProduct(id, getState())) {
      return dispatch(fetchProduct(id))
    }
  }
}
