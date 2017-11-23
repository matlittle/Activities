var bands = require("./bands.js");

for(key in bands) {
	console.log(`${bands[key]} is a ${key} band`);
}