// npm init
// npm install express --save
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('welcome to my assignment')
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started');
});