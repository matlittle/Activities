var fs = require('fs');

var cmd = process.argv[2];

switch (cmd) {
	case 'total':
		getTotal(true);
		break;

	case 'withdraw':
		transaction('withdraw', process.argv[3])
		break;

	case 'deposit':
		transaction('deposit', process.argv[3])
		break;

	case 'lotto': 
		lotto(process.argv[3]);
		break;

	default:
		console.log("Unrecognized command");
		break;
}


function getTotal(bool, amt) {
	fs.readFile('bank.txt', 'utf8', (err, data) => {
		if(err) throw err

		var total = 0;
		data.split(',').forEach( (tran) => {
			total += parseFloat(tran.trim());
		});
	
		if(bool){
			var display = convertToCurrency(total);
			console.log(display);
		} else {
			if( parseFloat(amt) > total ) {
				console.log("Withdrawl is greater than balance");
			} else {
				withdraw(amt);
			}
		}
	});
}

function transaction(type, amt) {
	if(type === 'withdraw') {
		getTotal(false, amt)
	} else {
		deposit(amt.trim())
	}
}

function withdraw(str) {
	var newTran = `, -${str.trim()}`;
	fs.appendFile('bank.txt', newTran, (err) => {
		if(err) throw err;
		getTotal(true);
	});
}

function deposit(str) {
	var newTran = `, ${str.trim()}`;
	fs.appendFile('bank.txt', newTran, (err) => {
		if(err) throw err;
		getTotal(true);
	});
}

function lotto(num) {
	var rand = Math.floor( Math.random() * 10 );

	if (parseInt(num) === rand) {
		console.log(`You won the lotto! ${num} was correct.`)
		transaction('deposit', '10');
	} else {
		console.log(`You lost! Your number: ${num}. Winning number ${rand}.`);
		transaction('withdraw', '1');
	}
}

function checkLotto(num) {
	
}

function convertToCurrency(num) {
	var str = num.toString();
	var nums = str.split('.');

	nums[1] = nums[1].substring(0, 2);
	while(nums[1].length < 2) {
		nums[1] += '0';
	}

	return `$${nums[0]}.${nums[1]}`;
}



