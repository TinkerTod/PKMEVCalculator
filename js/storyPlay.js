/*
*	Check over the submission to make sure that 
*/
function checking() {
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
/**
 *  Calculate the Vitamins and print
 * */
function appendData(){
    var Vit = 10;
    var HP = parseInt(document.getElementById('HP').value);
    var Attack = parseInt(document.getElementById('Attack').value);
    var Defense = parseInt(document.getElementById('Defense').value);
    var SpAttack = parseInt(document.getElementById('SpAttack').value);
    var SpDef = parseInt(document.getElementById('SpDef').value);
    var Speed = parseInt(document.getElementById('Speed').value);

    var HPVit = math.round(HP/parseInt(Vit);
    var AttVit = math.round(Attack/parseInt(Vit);
    var DefVit = math.round(Defense/parseInt(Vit);
    var SpAttVit = math.round(SpAttack/parseInt(Vit);
    var SpDefVit = math.round(SpDef/parseInt(Vit);
    var SpeeVit = math.round(Speed/parseInt(Vit);

	document.getElementById('HPVit').innerHTML = HPVit;
    document.getElementById('AttVit').innerHTML = AttVit;
    document.getElementById('DefVit').innerHTML = DefVit;
    document.getElementById('SpAttVit').innerHTML = SpAttVit;
    document.getElementById('SPDefVit').innerHTML = SpDefVit;
    document.getElementById('SpeeVit').innerHTML = SpeeVit;
}

var startBtn = document.getElementById("startBtn");
startBtn.onclick = function(){
	checking();
	appendData();
}