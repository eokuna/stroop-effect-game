var express = require('express');					// use Node.js Express web app framework
var app = express();

app.use(express.static('public'));					// serve the static files located in the public folder

app.get('/',								// respond to the initial GET request with interface.html
	function (req, res) {
		res.sendFile(__dirname + "/public/interface.html");
		console.log("Introducing the game.");			// report to the console the players whereabouts (intro)
});

app.get('/play',							// handle play GET
	function(req, res) {						//	by sending play.html file (choose gameplay mode)
		res.sendFile(__dirname + '/public/play.html');
		console.log("User choosing challenge.");
});

app.get('/play-finite',							// handle play-finite GET
	function(req, res) {						//	by sending play-finite.html file (finite gameplay)
		res.sendFile(__dirname + '/public/play-finite.html');
		console.log("User playing finite now.");
});

app.get('/play-infinite',						// handle play-infinite GET
	function(req, res) {						//	by sending play-infinite.html file (infinite gameplay)
		res.sendFile(__dirname + '/public/play-infinite.html');
		console.log("User playing infinite now.");
});

app.get('/win',								// handle win GET
	function(req, res) {						//	by sending player-won.html file
		res.sendFile(__dirname + '/public/player-won.html');
		console.log("The player has won.");
});

app.get('/lose-finite',							// handle lose-finite GET
	function(req, res) {						//	by sending player-lost-finite.html file
		res.sendFile(__dirname + '/public/player-lost-finite.html');
		console.log("The player has lost.");
});

app.get('/lose-infinite',						// handle lose-infinite GET
	function(req, res) {						//	by sending player-lost-infinite.html file (show high scores)
		res.sendFile(__dirname + '/public/player-lost-infinite.html');
		console.log("The player has lost.");
});

var server = app.listen(3024,						// listen on port 3024
	function () {
		var host = server.address().address;
		var port = server.address().port;
		console.log("Stroop app listening at http://" + host + ":" + port);
});
