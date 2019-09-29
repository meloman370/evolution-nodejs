import { REQUEST_BLOCK, RECEIVE_BLOCK} from '../actions/block';

const defaultState = {
  isFetching: false,
  items: []
}

function block( state = defaultState, action) {
  switch (action.type) {
    case REQUEST_BLOCK:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_BLOCK:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state
  }
}

export default block
