var firstNumber;
var secondNumber;

firstNumber =  Number(prompt("Дай мне круасан"));
secondNumber =  Number(prompt("Дай мне круасан"));
 sign = Number(prompt("What do you want? / input 1, * input 2, - input 3. + input 4"));

 if (sign===1){
 	var div  = firstNumber / secondNumber;
 	document.write(div);
 }

 if (sign===2) {
 	var en = firstNumber * secondNumber;
 	document.write(en);
 }

 if (sign===3) {
 	var enl = firstNumber + secondNumber;
 	document.write(enl);
 }

if (sign===4) {
 	var enla = firstNumber - secondNumber;
 	document.write(enla);
 }
