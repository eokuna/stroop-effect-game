var clickNum = 0;
var text = document.getElementById("text");
var word = document.getElementById("word");
var messages = {
		betrayal: 'Your evil, jealous warlock brother has drugged you, dragged you out to a neighboring ghost town to perish in the cold while he tries to steal your throne again, and cast an illusion spell on you to prevent your return!',
		journey:'The roadways home are identified by color, and his spell appropriately tricks you into seeing all colors incorrectly. You must hurry back to stop him before the cold kills you by choosing the correct roads back.',
		warning: 'You do not have any time for mistakes--<br>not even for one wrong turn!!!',
		ready: 'Are you ready?',
		begin: 'Instructions:<br><br>Select one of the buttons on the right that describes the COLOR of the text on the left!',
		wrong: 'You have taken the wrong road and died :(',
		right: 'This appears to be the correct path.<br>The journey continues...'};
var colors = {
	pink: 'PINK',
	blue: 'BLUE',
	grey: 'GREY',
	orange: 'ORANGE',
	red: 'RED',
	green: 'GREEN',
	purple: 'PURPLE'};
function dialogue() {
	clickNum++;
	switch (clickNum) {
		case 1:
			text.innerHTML = messages.betrayal;
			break;
		case 2:
			text.innerHTML = messages.journey;
			break;
		case 3:
			text.innerHTML = messages.warning;
			break;
		case 4:
			text.innerHTML = messages.ready;
			document.getElementById("myButt").innerHTML = "Let's Go!";
			break;
		case 5:
			text.innerHTML = messages.begin;
			document.getElementById("myButt").innerHTML = "Begin";
			document.getElementById('bg').className = "tutorial-bg";
			document.getElementById('parent').className = "tutorial-parent";
			document.getElementById('child').className = "tutorial-child";
			var i;
			for (i = 1; i < 6; i++) { 
				switch (i) {
					case 1:
						butt1 = document.createElement("BUTTON");
						butt1.innerHTML = "PINK";
						document.getElementById('child1').appendChild(butt1);
						break;
					case 2:
						butt2 = document.createElement("BUTTON");
						butt2.innerHTML = "BLUE";
						document.getElementById('child2').appendChild(butt2);
						break;
					case 3:
						butt3 = document.createElement("BUTTON");
						butt3.innerHTML = "GREEN";
						document.getElementById('child3').appendChild(butt3);
						break;
					case 4:
						butt4 = document.createElement("BUTTON");
						butt4.innerHTML = "GREY";
						document.getElementById('child4').appendChild(butt4);
						break;
					case 5:
						butt5 = document.createElement("BUTTON");
						butt5.innerHTML = "ORANGE";
						document.getElementById('child5').appendChild(butt5);
						break;
				}
			}
			word.innerHTML = colors.purple;
			break;
	}
}
function correct() {
	text.innerHTML = messages.right;
}
function wrong() {
	text.innerHTML = messages.wrong;
}