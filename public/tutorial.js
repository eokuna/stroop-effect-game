// change contents in the parent div on the introduction and tutorial pages
function dialogue() {
	// dialogue() triggers only on button click, so increment clickNum and change contents accordingly
	clickNum++;
	switch (clickNum) {
		// just change the dialogue text ============================================================
		case 1:
			text.innerHTML = messages.betrayal;
			break;
		case 2:
			text.innerHTML = messages.journey;
			break;
		case 3:
			text.innerHTML = messages.warning;
			break;
		// ========================================================================================
		// change the dialogue and append a button to proceed to the tutorial
		case 4:
			text.innerHTML = messages.ready;
			document.getElementById("myButt").innerHTML = "Let's Go!";
			break;
		// change the dialogue and setup the tutorial
		case 5:
			text.innerHTML = messages.begin;		
			word.innerHTML = colors[5];
			document.getElementById("myButt").innerHTML = "I do";
			document.getElementById("intro-form").action = "/play";
			document.getElementById('bg').className = "tutorial-bg";
			document.getElementById('parent').className = "tutorial-parent";
			document.getElementById('child').className = "tutorial-child";
			myButt.disabled = true;			// disable button until player completes tutorial
			for (var i = 1; i < 6; i++) { 		// create the five tutorial buttons
				// appends buttons to preset divs, inserts text, and sets onclick actions
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

// triggers when the correct (pink) button is clicked
function tutcorrect() {
	output.innerHTML = messages.tutright;		// output success message
	myButt.disabled = false;			// enable button so player may progress
	butt1.disabled = true;				// disable buttons to enforce continuing
	butt2.disabled = true;
	butt3.disabled = true;
	butt4.disabled = true;
	butt5.disabled = true;
}

// triggers when any other button is clicked
function tutwrong() {
	output.innerHTML = messages.tutwrong;		// output retry message
}
