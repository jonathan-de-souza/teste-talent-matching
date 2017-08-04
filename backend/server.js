process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');

var app = express();

require('./middlewares')(app);
require('./config/dbStart');
require('./server/api/app')(app);

app.listen(process.env.PORT, () => { console.log('API Running'); console.log('listening on: ' + process.env.PORT) });

module.exports = app;