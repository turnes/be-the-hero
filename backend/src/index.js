var express = require('express');
const routes = require('./routes');
const cors = require('cors');

var app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(3000, '0.0.0.0', function () {
  console.log();
});