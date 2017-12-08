const connObj = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'oblivion',
    database: 'bids'
}

const MySQL = require('mysql');
const Inquirer = require('inquirer');
const conn = MySQL.createConnection(connObj);

connectToDB().then(() => { }); // No op

async function connectToDB() {
    return conn.connect(async (err) => {
        if(err) return Promise.reject(err);

        const command = await getCommand();
        const result = await doCommand(command);

        console.log(result);

        const end = await disconnect(conn);
        console.log(`End: ${end}`);

    });
}

async function getCommand() {
    const uInput = await Inquirer.prompt({
        type: "list",
        name: "cmd",
        message: "What would you like to do?",
        choices: [
            "Post an item", 
            "Bid on an item"
        ]
    })

    return uInput.cmd;
}

async function doCommand(command) {
    try {
        switch (command) {
            case "Post an item": 
                return await postBid();
            case "Bid on an item": 
                return await bidOnItem();
        }
    } catch(err) {
        return Promise.reject(err);
    }
}

async function postBid() {
    return Promise.resolve("Post bid");
}

async function bidOnItem() {
    return Promise.reject("Bid on item");
}

async function disconnect(c) {
    const result = await c.end();
    return result;
}

