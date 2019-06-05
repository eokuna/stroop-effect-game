// run setup() when the player-finite.html page loads
setup();
var counter;	// initialize the interval variable for updating the time left
var timer;	// initialize the timeout variable for triggering wrong() when the player takes too long to answer correctly

// setup the prompt and buttons
// randomize the prompt text and text color, adjust the onclick functions of each of the five buttons
function setup() {
	var correctColor = Math.floor(Math.random() * 5) + 1;	// randomly select a number from 1 to 5
	var randColor = Math.floor(Math.random() * 5) + 1;	// randomly select another number from 1 to 5
	word.innerHTML = colors[randColor];			// use the random numbers to set text properties
	word.style.color = textColors[correctColor];
	for (var i =  1; i < 6; i++) {				// iterate through the buttons to set onclick of each one
		// set onclick of the correct button
		if (i == correctColor) {
			// after player reaches a score of 30, they have won; so trigger correct()
			if (score >= 30) {
				document.getElementById(buttons[i]).setAttribute("onclick", "correct()");
			}
			// otherwise, clicking the correct button triggers then next round
			else {
				document.getElementById(buttons[i]).setAttribute("onclick", "keepPlaying()");
			}
		}
		// set onclick of all other buttons
		else {
			document.getElementById(buttons[i]).setAttribute("onclick", "wrong()");
		}
	}
	document.getElementById("score").innerHTML = String(score);	// print the player's score
	document.getElementById("time").innerHTML = String(curr);	// print the time left to press a button
	
	// every second, update the time left to press a button
	counter = setInterval(function(){ curr = curr - 1; document.getElementById("time").innerHTML = String(curr); }, 1000);
	// every round, reduce the time allowed to press a button; if total time passes, trigger wrong()
	timer = setTimeout(wrong, ms);
}

// triggers when correct button is pressed when score <30
function keepPlaying() {
	text.innerHTML = messages.right;			// print message
	score++;						// increase the score
	clearInterval(counter);					// reset the counter and timer
	clearTimeout(timer);
	if (ms > 1000) {					// error prevention: allow enough time for correct() to trigger
		ms = ms - 1000;					// reduce the time allowed to press button
	}
	curr = ms / 1000;					// convert ms (for timer) to s (for counter)
	var leftpx = String(30 * score + 5) + 'px';		// move the "progress character" graphic right
	document.getElementById("character").style.left = leftpx;
	setup();						// reset prompt and buttons
}

// triggers when the last correct button (score = 30) is pressed, at which point player has won
function correct() {	
	clearInterval(counter);					// reset the counter and timer
	clearTimeout(timer);
	text.innerHTML = messages.victory;			// print message
	endButt = document.createElement("BUTTON");		// create a button to send win GET
	endButt.innerHTML = "Go On";				//	and navigate to next page (player-won.html)
	endButt.type = "submit";
	document.getElementById('end-form').appendChild(endButt);
	document.getElementById('end-form').action = "/win";
	document.getElementById("butt1").disabled = true;	// disable the other buttons
	document.getElementById("butt2").disabled = true;
	document.getElementById("butt3").disabled = true;
	document.getElementById("butt4").disabled = true;
	document.getElementById("butt5").disabled = true;
}

// triggers when a wrong button is pressed or the timer runs out
function wrong() {
	clearInterval(counter);					// reset the counter and timer
	clearTimeout(timer);
	text.innerHTML = messages.wrong;			// print message
	endButt = document.createElement("BUTTON");		// create a button to send lose-finite GET
	endButt.innerHTML = "Go On";				//	and navigate to next page (player-lost-finite.html)
	endButt.type = "submit";
	document.getElementById('end-form').appendChild(endButt);
	document.getElementById('end-form').action = "/lose-finite";
	document.getElementById("butt1").disabled = true;	// disable the other buttons
	document.getElementById("butt2").disabled = true;
	document.getElementById("butt3").disabled = true;
	document.getElementById("butt4").disabled = true;
	document.getElementById("butt5").disabled = true;
}
