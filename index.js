const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '8000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.status(200).send('Node.JS App');
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
})