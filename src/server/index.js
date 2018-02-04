var express = require('express');
var app = express();
var bodyParser = require('body-parser')

const scoreboard = []

app.use(express.static(__dirname +'./../../public/')); //serves the index.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/scoreboard', (req, res) => {
  if (req.body.level) {
    scoreboard[req.body.level] = scoreboard[req.body.level] || []
    scoreboard[req.body.level].push({ name: req.body.name, score: req.body.moves.length })
  }
  res.send(JSON.stringify(scoreboard))
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
