// html skeleton provider
function template(title, initialState = {}, content = "", styleTags = ""){
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=600, initial-scale=1">
                <meta name="Description" content="Put your description here.">
                <title> ${title} </title>
                <link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
                ${styleTags}
              </head>
              <body style="margin:0">
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>
                <script>
                  window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="/assets/client.js"></script>
              </body>
              `;

  return page;
}

module.exports = template;
