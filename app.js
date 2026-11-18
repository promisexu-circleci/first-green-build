const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Getting Your First Green Build on CircleCI</title>
  </head>
  <body style="font-family: sans-serif; display: grid; place-items: center; min-height: 100vh; margin: 0;">
    <h1>Getting Your First Green Build on CircleCI</h1>
  </body>
</html>`);
});

module.exports = app;
