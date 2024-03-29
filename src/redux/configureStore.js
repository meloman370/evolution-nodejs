import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import menuReducer from './reducers/menu'
import blockReducer from './reducers/block'
import productListReducer from './reducers/product_list'
import categoryReducer from './reducers/category'
import productReducer from './reducers/product'
import profileReducer from './reducers/profile'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  menu: menuReducer,
  block: blockReducer,
  product_list: productListReducer,
  category: categoryReducer,
  product: productReducer,
  profile: profileReducer
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