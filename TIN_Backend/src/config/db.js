const mysql = require("mysql2");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 's22277PiotrPioro',
    database: 'tindb'
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected to database")
});

module.exports = connection;