const connObj = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'oblivion',
    database: 'quiz'
}

const MySQL = require('mysql');
const Inquirer = require('inquirer');
const conn = MySQL.createConnection(connObj);

connect();

function connect() {
    conn.connect((err) => {
        if(err) throw err;
        getQuery();
    });
}

function getQuery() {
    Inquirer.prompt({
        type: "list",
        name: "search",
        message: "What would you like to search for?",
        choices: [
            "Artist", 
            "Song",
            "Artists with multiple top songs",
            "Range of songs"
        ]
    }, (result) => {
        const qType = result.search;
        handleSearchChoice(result.search);
    });
}

function handleSearchChoice(s) {
    if(s === "artist" || s === "songs") {

    } else if (true) {

    }
}

function queryDB(t, s) {
    if(t === "artist" || t === "song") {
        conn.query(
        "SELECT * FROM top5000 WHERE ? = ?", 
        [t, s], 
        (err, data) => {
            if(err) throw err;
            displayResults(data);
        });
    }
}

function displayResults(r) {
    console.log(r);
}

function disconnect() {
    conn.end((err) => {
        if(err) throw err;
    });
}