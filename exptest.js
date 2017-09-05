const express = require('express');
const app = express();

/*
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */

// GET Hello world route
app.get('/', function (req, res) {
  res.send('Hello World!')
});

// POST Hello world route
app.post('/', function (req, res) {
  res.send('Hello World Post!')
});

// POST Hey there route
app.post('/hey', function (req, res) {
  var x = 'hey';
  x += ' there';

  res.json({
    message: x,
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
