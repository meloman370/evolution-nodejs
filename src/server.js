import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import configureStore from './redux/configureStore'
import App from './app'


module.exports = function render(initialState, path) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState)
  const sheet = new ServerStyleSheet()

  // render the App store static markup ins content variable
  let content = renderToString(
    sheet.collectStyles(
      <StaticRouter location={path}>
        <Provider store={store} >
          <App />
        </Provider>
      </StaticRouter>
    )
  );

  // Get styled tags for server slyling
  const styleTags = sheet.getStyleTags()
  sheet.seal()

  // Get a copy of store data to create the same store on client side 
  const preloadedState = store.getState()

  return {content, preloadedState, styleTags};
}
