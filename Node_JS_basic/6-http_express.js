const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.writeHead(200);
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
