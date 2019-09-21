import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import menuReducer from './reducers/menu'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  menu: menuReducer
})

export function configureServerStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware
    )
  )
}

export function configureClientStore(preloadedState) {
  const composeEnhancers = composeWithDevTools({});
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware
      )
    )
  )
}