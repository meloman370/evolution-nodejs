import { REQUEST_PROFILE, RECEIVE_PROFILE} from '../actions/profile';

const defaultState = {
  isFetching: false,
  info: []
}

function profile( state = defaultState, action) {
  switch (action.type) {
    case REQUEST_PROFILE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PROFILE:
      return Object.assign({}, state, {
        isFetching: false,
        info: action.info
      });
    default:
      return state
  }
}

export default profile
