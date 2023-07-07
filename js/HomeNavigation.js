var originalGame=true;
var storyType=1;

//Set up the changing of values on Play Expeience
var playRadios = document.forms["playForm"].elements["playRadio"];
for (var i = 0, max = playRadios.length; i < max; i++){
	playRadios[i].onclick = function(){
		inputStyle = this.value;
		//alert(inputStyle);

		if (inputStyle == "Original Game"){originalGame=true;}
		else{originalGame=false;}
		//alert(originalGame);
	}
}

//Set up the changing of values on Story Choice
var storyRadios = document.forms["storyForm"].elements["storyChoice"];
for (var i = 0, max = storyRadios.length; i < max; i++){
	storyRadios[i].onclick = function(){
		storyStyle = this.value;
		//alert(storyStyle);

		if (storyStyle == "randStory"){storyType=1;}
		else if(storyStyle == "Choose Story"){storyType=2;}
		else{storyType=3;}
		//alert(storyType);
	}
}

var SetPlayBtn = document.getElementById("SetPlayBtn");
SetPlayBtn.onclick = function(){
	document.getElementById("Settings").style.display='none';
	//alert(originalGame);
	//alert(storyType);
	if (storyType == 1){
		randNum = Math.floor(Math.random()*21)+1;
		//alert(randNum);
		storyNo = "str"+randNum;
		//alert(storyNo);1
		document.getElementById(storyNo).style.display='block';
	}
	else if (storyType == 2){
		//alert("StorySelect");
		window.location.href = 'html/story_select.html';
	}
	else {
		//alert("Long");
		if(originalGame==true){window.location.href = 'html/Stories/og_long.html';}
		else{window.location.href = 'html/Stories/en_long.html';}
	}
}