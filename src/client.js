import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import {configureClientStore} from './redux/configureStore'
import App from './app'

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureClientStore(state)

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

hydrate(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#app')
)
