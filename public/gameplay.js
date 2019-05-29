setup();
var counter;
var timer;

function setup() {
	if (score == 30) {
		correct();
	}
	var correctColor = Math.floor(Math.random() * 5) + 1;
	var randColor = Math.floor(Math.random() * 5) + 1;
	word.innerHTML = colors[randColor];
	word.style.color = textColors[correctColor];
	for (var i =  1; i < 6; i++) {
		if (i == correctColor) {
			document.getElementById(buttons[i]).setAttribute("onclick", "keepPlaying()");
			word.style.color = textColors[i];
		}
		else {
			document.getElementById(buttons[i]).setAttribute("onclick", "wrong()");
		}
	}
	document.getElementById("score").innerHTML = String(score);
	document.getElementById("time").innerHTML = String(curr);
	counter = setInterval(function(){ curr = curr - 1; document.getElementById("time").innerHTML = String(curr); }, 1000);
	timer = setTimeout(wrong, ms);
}

function keepPlaying() {
	text.innerHTML = messages.right;
	score++;
	clearInterval(counter);
	clearTimeout(timer);
	ms = ms - 1000;
	curr = ms / 1000;
	var leftpx = String(30 * score + 5) + 'px';
	document.getElementById("character").style.left = leftpx;
	setup();
}

function correct() {	
	clearInterval(counter);
	clearTimeout(timer);
	text.innerHTML = messages.victory;
	endButt = document.createElement("BUTTON");
	endButt.innerHTML = "Go On";
	endButt.type = "submit";
	document.getElementById('end-form').appendChild(endButt);
	document.getElementById('end-form').action = "/win";
	document.getElementById("butt1").disabled = true;
	document.getElementById("butt2").disabled = true;
	document.getElementById("butt3").disabled = true;
	document.getElementById("butt4").disabled = true;
	document.getElementById("butt5").disabled = true;
}

function wrong() {
	clearInterval(counter);
	clearTimeout(timer);
	text.innerHTML = messages.wrong;
	endButt = document.createElement("BUTTON");
	endButt.innerHTML = "Go On";
	endButt.type = "submit";
	document.getElementById('end-form').appendChild(endButt);
	document.getElementById('end-form').action = "/lose";
	document.getElementById("butt1").disabled = true;
	document.getElementById("butt2").disabled = true;
	document.getElementById("butt3").disabled = true;
	document.getElementById("butt4").disabled = true;
	document.getElementById("butt5").disabled = true;
}