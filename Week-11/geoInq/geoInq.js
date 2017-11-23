const GC = require('geocoder');
const Inquire = require('inquirer');


Inquire.prompt([
    {
        type: 'input',
        message: 'Enter a city and state',
        name: 'city'
    }
]).then((input) => {
    getGeo(input.city);
});

function getGeo(city) {
    GC.geocode(city, (err, res) => {
        if(!err) {
            console.log( JSON.stringify(res, null, 2) );
        }
    });
}

