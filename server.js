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
		console.log("User choosing challenge.");
});

app.get('/play-finite',
	function(req, res) {
		res.sendFile(__dirname + '/public/play-finite.html');
		console.log("User playing finite now.");
});

app.get('/play-infinite',
	function(req, res) {
		res.sendFile(__dirname + '/public/play-infinite.html');
		console.log("User playing infinite now.");
});

app.get('/win',
	function(req, res) {
		res.sendFile(__dirname + '/public/player-won.html');
		console.log("The player has won.");
});

app.get('/lose-finite',
	function(req, res) {
		res.sendFile(__dirname + '/public/player-lost-finite.html');
		console.log("The player has lost.");
});

app.get('/lose-infinite',
	function(req, res) {
		res.sendFile(__dirname + '/public/player-lost-infinite.html');
		console.log("The player has lost.");
});

var server = app.listen(3024,
	function () {
		var host = server.address().address
		var port = server.address().port
		console.log("Stroop app listening at http://" + host + ":" + port);
});
