createCanvas("windowWidth,windowHeight");

var Score=0;

setText("text_area65", Score);

setText("text_area15", Score);


onEvent("button1", "click", function( ) {
	console.log("button1 clicked!");
	setScreen("LevelSelection");
});
onEvent("button2", "click", function( ) {
	console.log("button2 clicked!");
	setScreen("StartQuiz");
});
onEvent("button3", "click", function( ) {
	console.log("button3 clicked!");
	setScreen("StartQuiz");
});
onEvent("button4", "click", function( ) {
	console.log("button4 clicked!");
	setScreen("StartQuiz");
});
onEvent("button7", "click", function( ) {
	console.log("button7 clicked!");
	setScreen("StartQuiz");
});
onEvent("button5", "click", function( ) {
	console.log("button5 clicked!");
	setScreen("StartQuiz");
});
onEvent("button8", "click", function( ) {
	console.log("button8 clicked!");
setScreen("1.q1");
});

onEvent("button20", "click", function( ) {
	console.log("button20 clicked!");
	if (getChecked("radio_button42")){
	  setScreen("Correct-img");

	}
	if (getChecked("radio_button31")) {
	  setScreen("incorrect-img");
	}
	if (getChecked("radio_button41")) {
	  setScreen("incorrect-img");
	}
	if (getChecked("radio_button40")) {
	  setScreen("incorrect-img");
	}
});






onEvent("button9", "click", function( ) {
	console.log("button9 clicked!");
	if (getChecked("radio_button42")) {
	  setScreen("1.q2");
	}
});

onEvent("button10", "click", function( ) {
	console.log("button10 clicked!");
		if (getChecked("radio_button31")) {
	  setScreen("1q2");
	}
	if (getChecked("radio_button41")) {
	  setScreen("1.q2");
	}
	if (getChecked("radio_button40")) {
	  setScreen("1.q2");
	}
});
onEvent("button12", "click", function( ) {
	console.log("button12 clicked!");
	if(getChecked("radio_button10")){
	  setScreen("Correct-img");
	}
	if(getChecked("radio_button7")){
	  setScreen("incorrect-img");
	}
	if(getChecked("radio_button8")){
	  setScreen("incorrect-img");
	}
	if(getChecked("radio_button9")){
	  setScreen("incorrect-img");
	}
});
onEvent("button9", "click", function( ) {
	console.log("button9 clicked!");
	
	if(getChecked("radio_button10")){
	  setScreen("1.q3");
	}
		
	
});

onEvent("button10", "click", function( ) {
	console.log("button10 clicked!");
	
	if(getChecked("radio_button7")){
	  setScreen("1.q3");
	}
	if(getChecked("radio_button8")){
	  setScreen("1.q3");
	}
	if(getChecked("radio_button9")){
	  setScreen("1.q3");
	}
});
onEvent("button13", "click", function( ) {
	console.log("button13 clicked!");
	if(getChecked("radio_button13")){
	  setScreen("Correct-img");
	}
	if(getChecked("radio_button11")){
	  setScreen("incorrect-img");
	}
	if(getChecked("radio_button14")){
	  setScreen("incorrect-img");
	}
	if(getChecked("radio_button12")){
	  setScreen("incorrect-img");
	}
});
onEvent("button9", "click", function( ) {
	console.log("button9 clicked!");
		if(getChecked("radio_button13")){
	  setScreen("1.q4");
	}
});
onEvent("button10", "click", function( ) {
	console.log("button10 clicked!");
		if(getChecked("radio_button11")){
	  setScreen("1.q4");
	}
	if(getChecked("radio_button14")){
	  setScreen("1.q4");
	}
	if(getChecked("radio_button12")){
	  setScreen("1.q4");
	}
});


