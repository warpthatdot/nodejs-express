const express = require('express')
const app = express()


app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
app.post('/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});

module.exports = app
