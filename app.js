const express = require('express')
const app = express()

//app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Example app listening on port ' + PORT)
});