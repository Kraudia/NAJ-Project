const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    _ = require('lodash');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use('/api', require('./routers/api'));

app.listen(8081, function() {
    console.log('Server started on port 8081.');
})