var express = require('express');
const routes = require('./routes');
const cors = require('cors');

var app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3000, '0.0.0.0', function () {
  console.log('Example app listening on port 3000!');
});