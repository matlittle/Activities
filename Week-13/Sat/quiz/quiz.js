const connObj = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'oblivion',
    database: 'quiz'
}

const MySQL = require('mysql');
const conn = MySQL.createConnection(connObj);

connect();

async function connect() {
    return conn.connect( async (err) => {
        if(err) throw err;
        const data = await queryDB();
        console.log(data);
        await disconnect();
    });
}


async function queryDB() {
    const res = await conn.query('SELECT * FROM test');
    console.log(res);
    return "test";
}

async function disconnect() {
    conn.end(async (err) => {
        if(err) throw err;
        return;
    });
}
