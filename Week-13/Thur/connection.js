const connObj = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'oblivion',
    database: 'musicDB'
}

const MySQL = require('mysql');
const Inquirer = require('inquirer');
const conn = MySQL.createConnection(connObj);

connectToDB();

function connectToDB() {
    conn.connect(function(err) {
        if(err) throw err;
        console.log(`Connected as ID: ${conn.threadId}`);
        getCommand();
    });
}

function getCommand() {
    Inquirer.prompt({
        type: "list",
        name: "cmd",
        message: "What would you like to do?",
        choices: [
            "Add Song", 
            "Delete Song", 
            "Get Genres"
        ]
    }).then(function(answers) {
        handleCmd(answers.cmd);
    });
}

function handleCmd(cmd) {
    switch (cmd) {
        case "Add Song":
            insertSong();
            break;
        case "Delete Song":
            deleteSong(); 
            break;
        case "Get Genres":
            showGenre();
            break;
    }
}

function insertSong() {
    Inquirer.prompt([{
            type: "input",
            name: "title",
            message: "What's the title?"
        },
        {
            type: "input",
            name: "artist",
            message: "What's the artist?"
        },
        {
            type: "input",
            name: "genre",
            message: "What's the genre?"
        }
    ]).then( function (answers) {
        console.log(answers);
        conn.query('INSERT INTO songs SET ?', [answers], function(err, res) {
            if(err) throw err;
            console.log(`Insert successful`);
        }
    });
}

function deleteSong() {
    Inquirer.prompt({
        type: "input",
        name: "title",
        message: "What song would you like to delete?"
    }).then( function (answers) {
        console.log(answers);
        conn.query('DELETE')
    });
}

function showGenre() {
    Inquirer.prompt({
        type: "input",
        name: "genre",
        message: "What genre would you like to show?"
    }).then( function (answers) {
        console.log(answers);
    });
}

function showGenre() {
    conn.query('SELECT * FROM songs', function(err, res) {
        if(err) throw err;

        res.forEach(function(data) {
            var s = `| `;
            for(k in data) {
                s += `${k}: ${data[k]} | `;
            }
            console.log(s);
        });

        disconnect();
    });
}

function disconnect() {
    conn.end(function(err) {
        if(err) throw err;
    });
}






