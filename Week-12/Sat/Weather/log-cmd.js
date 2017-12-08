
const FS = require('fs');

const Logging =  {
    writeToFile: function(sObj) {
        var str = `Name: ${sObj.name}`;
        str += `\tLocation: ${sObj.location}`;
        str += `\tTime: ${sObj.time}`;

        FS.appendFile('./log.txt', `${str}\n`, (err) => {
            if (err) console.log(err);
        });
    }, 

    readFromFile: function(callBack) {
        var info = FS.readFile('./log.txt', 'utf8', this.displayInfo);
    },

    displayInfo: function(err, result) {
        if (err) console.log(err);

        console.log( result );
    }
}

module.exports = Logging;
