const mysql = require("mysql2")

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db1',
    password: '#Ad28102001'
})
.on("connect", () => {
    console.log("DB connected");
})
.on("error", (err) => {
    console.log("DB not connected: ", err.message);
})