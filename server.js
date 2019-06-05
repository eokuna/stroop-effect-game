var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',
	function (req, res) {
		res.sendFile(__dirname + "/public/interface.html");
		console.log("Introducing the game.");
});

app.get('/play',
	function(req, res) {
		res.sendFile(__dirname + '/public/play.html');
		console.log("User playing now.");
});

app.get('/lose',
	function(req, res) {
		res.sendFile(__dirname + '/public/player-lost.html');
		console.log("The player has lost.");
});

app.get('/win',
	function(req, res) {
		res.sendFile(__dirname + '/public/player-won.html');
		console.log("The player has won.");
});

var server = app.listen(3024,
	function () {
		var host = server.address().address
		var port = server.address().port
		console.log("Stroop app listening at http://" + host + ":" + port);
		console.log(records[1].name);
});
