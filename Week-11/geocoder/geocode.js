const GC = require('geocoder');

var str = '';

for (let i = 2; i < process.argv.length; i++) {
    str += `${process.argv[i]} `;
}

str.trim();

GC.geocode(str, (err, res) => {
    if(!err) {
        console.log( JSON.stringify(res, null, 2) );
    }
});