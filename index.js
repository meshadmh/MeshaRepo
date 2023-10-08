const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '8080';

app.get('/', (req, res) => {
  res.send('Hello again,World!');
});

app.listen(port, () => {
  console.log('Example app listening on port ${port}');
});
