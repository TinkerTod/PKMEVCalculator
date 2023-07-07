/*
*	Check over the submission to make sure that 
*/
function checking() {
	var empty = 0;
	$('input[type=text]').each(function(){
		maxInput++;
		if (this.value == "") {empty++;} 
	})
	if (empty == 0){
		alert("All inputs filled");
		document.getElementById("inputArea").style.display="none";
		document.getElementById("answer").style.display='block';
	}
	else{alert(empty + ' empty input(s)')}
}

function appendData(){
	for (i=1, max = maxInput; i < max; i++){
		if(i < 10){
			document.getElementById('val0'+ i).innerHTML = document.getElementById("in0" + i).value;	
		}
		else{
			document.getElementById('val'+ i).innerHTML = document.getElementById("in" + i).value;
		}
	}
}


function text2speech(){
    if ('speechSynthesis' in window) {
        var synth = speechSynthesis;
        var flag = false;
     
        /* references to the buttons */
        var playEle = document.querySelector('#play');
        var pauseEle = document.querySelector('#pause');
        var stopEle = document.querySelector('#stop');
     
        /* click event handlers for the buttons */
        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);
     
        function onClickPlay() {
            if(!flag){
                flag = true;
                utterance = new SpeechSynthesisUtterance(
                      document.querySelector('#storycomplete').textContent);
                utterance.voice = synth.getVoices()[0];
                utterance.onend = function(){
                    flag = false;
                };
                synth.speak(utterance);
            }
            if(synth.paused) { /* unpause/resume narration */
                synth.resume();
            }
        }
        function onClickPause() {
            if(synth.speaking && !synth.paused){ /* pause narration */
                synth.pause();
            }
        }
        function onClickStop() {
            if(synth.speaking){ /* stop narration */
                /* for safari */
                flag = false;
                synth.cancel();
            }
        }
    }
}








var startBtn = document.getElementById("startBtn");
startBtn.onclick = function(){
	checking();
	appendData();
	text2speech();
}
