import { REQUEST_PRODUCT, RECEIVE_PRODUCT} from '../actions/product';

const defaultState = {
  isFetching: false,
  info: []
}

function product( state = defaultState, action) {
  switch (action.type) {
    case REQUEST_PRODUCT:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {
        isFetching: false,
        info: action.info
      });
    default:
      return state
  }
}

export default product
