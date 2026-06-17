const db = require("../config/db");

async function create(name, email, password) {

    const [result] = await db.execute(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password]
    );

    return result;
}

async function findByEmail(email) {

    const [rows] = await db.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );

    return rows[0];
}

module.exports = {
    create,
    findByEmail
};