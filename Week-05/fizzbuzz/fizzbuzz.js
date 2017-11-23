

for (var i = 1; i <= 100; i++) {
	var text = i;

	if(i % 3 === 0){
		text = "Fizz";
		if(i % 5 === 0) {
			text += "Buzz";
		}
	} else if (i % 5 === 0) {
		text = "Buzz";
	} 

	console.log(text);
}