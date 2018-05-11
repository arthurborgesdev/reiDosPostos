const express = require('express')
var secure = require('ssl-express-www');
const app = express()

app.use(secure);
//app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Example app listening on port ' + PORT)
});


// Mongo Atlas Cluster 0 login credentiails

// rdp
// LM0bL6FZs68iR1Rq
