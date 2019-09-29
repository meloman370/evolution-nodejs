import axios from 'axios'
import {fetchProductList} from './product_list'

export const REQUEST_CATEGORY = 'REQUEST_CATEGORY'
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'


function requestCategory() {
  return {
    type: REQUEST_CATEGORY
  }
}

function receiveCategory(json) {
  return {
    type: RECEIVE_CATEGORY,
    info: json
  }
}

function fetchCategory(url) {
  return async dispatch => {
    dispatch(requestCategory())
    try {
      const response = await axios.get(process.env.API_URL + `/categories/`, {
        params: {
          url_alias: url
        }
      })
  
      if (response.data.length) {
        dispatch(receiveCategory(response.data[0]))
        await dispatch(fetchProductList({
          category: response.data[0].id
        }))
      } else {
        dispatch(receiveCategory([]))
      }
    } catch {
      dispatch(receiveCategory([]))
    }
  }
}

function shouldFetchCategory(url, state) {
  if (state.category.isFetching || (state.category.info.id && state.category.info.url_alias == url)) {
    return false
  }
  return true
}

export function fetchCategoryIfNeeded(url) {
  return (dispatch, getState) => {
    if (shouldFetchCategory(url, getState())) {
      return dispatch(fetchCategory(url))
    }
  }
}
