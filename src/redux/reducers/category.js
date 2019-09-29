import { REQUEST_CATEGORY, RECEIVE_CATEGORY} from '../actions/category';

const defaultState = {
  isFetching: false,
  info: []
}

function category( state = defaultState, action) {
  switch (action.type) {
    case REQUEST_CATEGORY:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, {
        isFetching: false,
        info: action.info
      });
    default:
      return state
  }
}

export default category
