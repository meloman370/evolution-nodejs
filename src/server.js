import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import {configureServerStore} from './redux/configureStore'
import App from './app'
const serverHandler = require('./helpers/server-handler')


module.exports = async function render(path) {
  // Configure the store with the initial state provided
  const store = configureServerStore()
  const sheet = new ServerStyleSheet()
  serverHandler.path = path

  // render the App store static markup ins content variable
  let content = renderToString(
    sheet.collectStyles(
      <StaticRouter location={path}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    )
  );

  // Get preloaded state
  await serverHandler.collectPreloadedState()

  // Get styled tags for server slyling
  const styleTags = sheet.getStyleTags()
  sheet.seal()

  // Get a copy of store data to create the same store on client side 
  const preloadedState = store.getState()

  return {content, preloadedState, styleTags};
}
