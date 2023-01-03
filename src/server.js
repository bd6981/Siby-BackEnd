// console.log('May Node be with you')
const express = require('express');
const app = express();

app.get(endpoint, callback)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function() {
  console.log('listening on 3000')
})