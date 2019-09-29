import axios from 'axios'

export const REQUEST_PRODUCT_LIST = 'REQUEST_PRODUCT_LIST'
export const RECEIVE_PRODUCT_LIST = 'RECEIVE_PRODUCT_LIST'

function requestProductList() {
  return {
    type: REQUEST_PRODUCT_LIST
  }
}

function receiveProductList(response) {
  return {
    type: RECEIVE_PRODUCT_LIST,
    products: response.results,
    count: response.count
  }
}

function shouldFetchProductList(state) {
  if (state.product_list.isFetching || state.product_list.products.length > 0) {
    return false
  }
  return true
}

export function fetchProductList(params = {}) {
  return dispatch => {
    dispatch(requestProductList())
    return axios.get(process.env.API_URL + `/products/`, {params}).then(response => {
      dispatch(receiveProductList(response.data))
    }).catch(error => {
      dispatch(receiveProductList([]))
    }) 
  }
}

export function fetchProductListIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchProductList(getState())) {
      return dispatch(fetchProductList())
    }
  }
}
