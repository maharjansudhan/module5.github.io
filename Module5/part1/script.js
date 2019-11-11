// Reverse a word


function string() {
	
	var newWord = prompt('Enter a word: ');

	var finalWord = "";
	for (var i=newWord.length-1;i>=0;i--){
		finalWord += newWord[i];
	}
	
	var h1 = document.createElement('h1');
	var textAnswer = document.createTextNode('The reversed word is ' + finalWord + '.');

	h1.setAttribute('id', 'String');
	h1.appendChild(textAnswer);
	document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
	document.getElementById('String').remove();
}



// Multiplication table
function multiplication(){
	var num = document.getElementById('number').value;
 	var multiply = Array.from(new Array(20), (x,i) => i + 1);
 	var value = multiply.map(x => x * num);
 	var x = "";  
 	for (let i = 0; i<value.length; i++) {  
    	if (i%4 == 0) {
      		x += "<tr><td>" + value[i] + "</td>";
    	} else if (i + 1 % 4 == 0) {
      		x += "<td>" + vaue[i] + "</td></tr>";
    	} else {
      		x += "<td>" + value[i] + "</td>";
    	}  
  }
  var table = '<table>' + x + '</table>';  
  return(table)
};

function callback(){
  var output = document.getElementById("target");
  output.innerHTML = multiplication();
}
