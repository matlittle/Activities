

const UserSearch = require('./user-search');
const Logging = require('./log-cmd');

const cmd = process.argv[2];

if (cmd === 'admin') {
    Logging.readFromFile();

} else if (cmd === 'user') {
    const name = process.argv[3];
    const loc = process.argv[4];

    if (name === undefined || loc === undefined) {
        console.log("Missing parameters");
    } else {
        var search = new UserSearch(name, loc);
        Logging.writeToFile(search);
        search.getWeather();
    }

} else {
    console.log("Unrecognized command");
}




