if (process.argv[2] === "algebra") {

	console.log( algebra(process.argv[3]) );

} else {
	var a = parseFloat(process.argv[3]);
	var b = parseFloat(process.argv[4]);

	switch(process.argv[2]) {
		case "add": 
			console.log(a + b);
			break;
		case "subtract": 
			console.log(a - b);
			break;
		case "multiply": 
			console.log(a * b);
			break;
		case "divide": 
			console.log(a / b);
			break;
		case "remainder": 
			console.log(a % b);
			break;
		case "exp":
			//console.log(Math.pow(a, b));
			break;
	}
}


function algebra(str) {
	var plusPos = str.indexOf("+");
	var eqPos = str.indexOf("=");

	var num1 = parseFloat(str.substring( 0, plusPos-1 ));
	var num2 = parseFloat(str.substring( plusPos+1, eqPos));
	var eq = parseFloat(str.substring( eqPos+1 ));

	return ( (eq - num2) / num1 )
}


