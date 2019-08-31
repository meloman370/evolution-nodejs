// html skeleton provider
function template(title, initialState = {}, content = "", styleTags = ""){
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
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
                <script src="assets/client.js"></script>
              </body>
              `;

  return page;
}

module.exports = template;
