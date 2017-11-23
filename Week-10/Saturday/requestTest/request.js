var request = require('request');

request("www.google.com", function(err, res, body) {
    console.log(body);
});
