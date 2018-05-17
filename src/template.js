export default (content, state) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
  <link href="main.css?4cc357827dc4284ff431" rel="stylesheet"></head>
  <body>
      <div id="content">${content}</div>
  <script>
    window.__NGP = ${JSON.stringify(state)}
  </script>
  <script type="text/javascript" src="main.js?4cc357827dc4284ff431"></script></body>
  </html>
  `
}