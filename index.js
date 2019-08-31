const express = require('express'),
          app = express(),
     template = require('./views/template')
         path = require('path');


// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

// our apps data model
const data = require('./assets/data.json');

let initialState = {
  isFetching: false,
  apps: data
}

//SSR function import
const ssr = require('./views/server');

app.get('*', (req, res) => {
  const { preloadedState, content, styleTags}  = ssr(initialState, req.path)
  const response = template("Evolution", preloadedState, content, styleTags)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});
