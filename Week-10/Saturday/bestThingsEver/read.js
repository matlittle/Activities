var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', function(err, data) {
	if(err) {
		console.log(err);
	} else {
		logMovies(data);
	}
});

function logMovies(data) {
	data.split(',').forEach( function(el) {
		console.log(el.trim());
	});
}
