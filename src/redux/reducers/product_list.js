import { REQUEST_PRODUCT_LIST, RECEIVE_PRODUCT_LIST} from '../actions/product_list';

const defaultState = {
  isFetching: false,
  products: [],
  count: 0
}

function product_list( state = defaultState, action) {
  switch (action.type) {
    case REQUEST_PRODUCT_LIST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PRODUCT_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        products: action.products,
        count: action.count
      });
    default:
      return state
  }
}

export default product_list
