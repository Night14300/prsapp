const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Quinn!');
});

app.get('/checkHighScore', (req, res) => {
  res.send('9');
});


app.listen(3000, () => {
  console.log('App listening on port 3000');
});