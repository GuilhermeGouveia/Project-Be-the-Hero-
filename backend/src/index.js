var express = require('express');
const route = require('./routes');
const cors = require('cors');
var app = express();
app.use(express.json())
app.use(route)
app.use(cors())

app.listen(4444);
