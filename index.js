const compression = require('compression')
const express = require('express')
          app = express()
     template = require('./views/template')
         path = require('path')
         cors = require('cors')
require('dotenv').config()

// Set cors origin allow all
app.use(cors())
app.options('*', cors())

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// Compress response
app.use(compression({threshold: 0}))

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 80);

//SSR function import
const ssr = require('./views/server');

app.get('*', async (req, res) => {
  const { preloadedState, content, styleTags} = await ssr(req.path)
  const response = template("Evolution", preloadedState, content, styleTags)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});
