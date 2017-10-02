
var express = require("express");
var key = require('./server/config/keys');
var app = express();
app.get('/', (req, res) => {
    res.send(key);
});
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('--------running--------');
});