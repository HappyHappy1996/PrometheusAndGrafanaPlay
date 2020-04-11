const express = require('express');
const { initPrometheus } = require('./init-prometheus');

const app = express();

initPrometheus(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
