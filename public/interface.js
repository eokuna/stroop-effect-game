var clickNum = 0;					// initialize variable for number of times intro button is clicked
var score = 0;						// initialize player score
var ms = 30000;						// initialize time allowed to press button (ms)
var curr = ms / 1000;					// initialize tmie left to press button (s)

// create variables associated with document elements to be modified in js
var text = document.getElementById("text");
var word = document.getElementById("word");
var output = document.getElementById("output");

// create messages to be printed to html files
var messages = {
		betrayal: 'Your evil, jealous warlock brother has drugged you, dragged you out to a neighboring ghost town to perish in the cold while he tries to steal your throne again, and cast an illusion spell on you to prevent your return!',
		journey:'The roadways home are identified by color, and his spell appropriately tricks you into seeing all colors incorrectly. You must hurry back to stop him before the cold kills you by choosing the correct roads back.',
		warning: 'You do not have any time for mistakes--<br>not even for one wrong turn!!!',
		ready: 'Are you ready?',
		begin: 'Instructions:<br><br>Select one of the buttons on the right that describes the COLOR of the text on the left!',
		tutwrong: 'Wrong button.<br>Try again!',
		wrong: 'Oh no Game Over!!!',
		tutright: 'Correct!<br>Seems like you got it.',
		right: 'This appears to be the correct path.<br>The journey continues...',
		victory: 'Well, this looks familiar...'};

// create arrays for prompt text and text colors and button id names
var colors = ['BLACK', 'PINK', 'BLUE', 'GREEN', 'YELLOW', 'ORANGE']
var textColors = ["#000000", "#ff99aa", "#0000e6", "#00cc00", "#ffff00", "#e69500"];
var buttons = ["butt0", "butt1", "butt2","butt3", "butt4", "butt5"];
