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
			word.innerHTML = colors[5];
			document.getElementById("myButt").innerHTML = "I do";
			document.getElementById("intro-form").action = "/play";
			document.getElementById('bg').className = "tutorial-bg";
			document.getElementById('parent').className = "tutorial-parent";
			document.getElementById('child').className = "tutorial-child";
			myButt.disabled = true;
			for (var i = 1; i < 6; i++) { 
				switch (i) {
					case 1:
						butt1 = document.createElement("BUTTON");
						butt1.innerHTML = "PINK";
						butt1.onclick = tutcorrect;
						document.getElementById('child1').appendChild(butt1);
						break;
					case 2:
						butt2 = document.createElement("BUTTON");
						butt2.innerHTML = "BLUE";
						butt2.onclick = tutwrong;
						document.getElementById('child2').appendChild(butt2);
						break;
					case 3:
						butt3 = document.createElement("BUTTON");
						butt3.innerHTML = "GREEN";
						butt3.onclick = tutwrong;
						document.getElementById('child3').appendChild(butt3);
						break;
					case 4:
						butt4 = document.createElement("BUTTON");
						butt4.innerHTML = "YELLOW";
						butt4.onclick = tutwrong;
						document.getElementById('child4').appendChild(butt4);
						break;
					case 5:
						butt5 = document.createElement("BUTTON");
						butt5.innerHTML = "ORANGE";
						butt5.onclick = tutwrong;
						document.getElementById('child5').appendChild(butt5);
						break;
				}
			}
			clickNum = 0;
			break;
	}
}

function tutcorrect() {
	output.innerHTML = messages.tutright;
	myButt.disabled = false;
	butt1.disabled = true;
	butt2.disabled = true;
	butt3.disabled = true;
	butt4.disabled = true;
	butt5.disabled = true;
}

function tutwrong() {
	output.innerHTML = messages.tutwrong;
}