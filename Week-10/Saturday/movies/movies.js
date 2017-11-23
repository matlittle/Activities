// Include the request npm package (Don't forget to run "npm install request" in this folder first!)

const request = require('request');


// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = "";

for(var i = 2; i < process.argv.length; i += 1) {
	movieName += ` ${process.argv[i].trim()}`;
}

movieName = movieName.trim().replace(" ", "+");



// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
//console.log(queryUrl);


// Then create a request to the queryUrl

request(queryUrl, function(err, res, body){
	// If the request is successful
	if(!err) {
		// Then log the Release Year for the movie
		var year = JSON.parse(body).Year
		var title = JSON.parse(body).Title
		console.log(`${title} - ${year}`);
	}
});

  