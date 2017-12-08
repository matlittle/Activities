// USER SEARCH

    // Takes two parameters, a name and location
    // Write name, and location properties with given parameters
    // Write data property with current date. 
    // The getWeather method will return the weather obj based on the stored location

const Weather = require('weather-js');

function UserSearch(name, loc) {
    this.name = name;
    this.location = loc;
    this.time = this.getDate();
}

UserSearch.prototype.getDate = function() {
    var d = new Date;
    var str = `${d.toDateString()} ${d.toLocaleTimeString()}`;
    return str;
}

UserSearch.prototype.getWeather = function() {
    Weather.find({
        search: this.location, 
        degreeType: 'F'
    }, this.handleReturn.bind(this) );
}

UserSearch.prototype.handleReturn = function(err, result) {
    if(err) console.log(err);
    this.weather = result;
    //console.log( JSON.stringify(result, null, 2) );
    this.displayWeather(result);
}

UserSearch.prototype.displayWeather = function(w) {
    var disp = `Location: ${w[0].location.name}\n`;
    disp += `Current Temp: ${w[0].current.temperature}\n`;
    disp += `Low: ${w[0].forecast[0].low}  High: ${w[0].forecast[0].high}`

    console.log(disp);
}


module.exports = UserSearch;


