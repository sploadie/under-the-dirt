var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const fs = require('fs')
const PORT = process.env.PORT || 8080;

let scoreboard = []
fs.readFile('./scoreboard.json', (err, data) => {
	console.log(JSON.parse(data));
	scoreboard = JSON.parse(data)
});

app.use(express.static(__dirname +'./../../public/')); //serves the index.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/scoreboard', (req, res) => {
	if (req.body.level >= 0) {
		scoreboard[req.body.level] = scoreboard[req.body.level] || []
			scoreboard[req.body.level].push({ name: req.body.name, score: req.body.moves.length })
	}
	console.log(scoreboard)
		fs.writeFile('./scoreboard.json', JSON.stringify(scoreboard), 'utf8')
		res.send(JSON.stringify(scoreboard))
});

//app.listen(3000); //listens on port 3000 -> http://localhost:3000/
app.listen(PORT, error => (
	error
		? console.error(error)
		: console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));
