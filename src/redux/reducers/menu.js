import { REQUEST_MENU, RECEIVE_MENU} from '../actions/menu';

const defaultState = {
  isFetching: false,
  items: []
}

function menu( state = defaultState, action) {
  switch (action.type) {
    case REQUEST_MENU:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_MENU:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state
  }
}

export default menu
