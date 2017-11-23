
var primes = [];

for (var i = 1; i <= 1000; i++) {

	if(isPrime(i)) {
		primes.push(i);
		console.log(i);
	}
}

function isPrime(num) {

	if(num > 2) {
		var isPrime = true;
		var breakPoint = num/2;

		for (var i = 0; i < primes.length; i++) {

			iterations += 1;

			if(primes[i] > breakPoint) {
				break;
			}

			if(num % primes[i] === 0) {
				isPrime = false;
			}
		}

		return isPrime;

	} else {
		if(num === 1) {
			return false;
		} else if(num === 2) {
			return true;
		} 
	}
	
}



//Create function to store the current number
function checkPrime(max) {
	//Set empty array, variables for numbers, and primes array
	var empty = [], n, m, primes = [];
	//increment from 2 to the max
	for(var n = 2; n <= max; n += 1) {
		//If n hasn't been marked after this, it is prime
		if(!empty[n]){
			//Push the number to the primes array
			primes.push(n);
			//When number #2 is equal to number #1 shifted left 1 bit, and the 
			for(m = n << 1; m <= max; m += n) {
				empty[m] = true;
			}
		}

	}
	return primes;
}


