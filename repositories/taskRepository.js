const db = require("../config/db");

async function create(userId, title, description, dueDate, priority) {
    const [result] = await db.execute(
        `INSERT INTO tasks (userId, title, description, dueDate, priority, status)
         VALUES (?, ?, ?, ?, ?, 'Pending')`,
        [userId, title, description, dueDate, priority]
    );
    return result;
}

async function findAllByUser(userId) {
    const [rows] = await db.execute(
        "SELECT * FROM tasks WHERE userId = ?",
        [userId]
    );
    return rows;
}
async function findById(id, userId) {

    const [rows] = await db.execute(
        "SELECT * FROM tasks WHERE id = ? AND userId = ?",
        [id, userId]
    );

    return rows[0];
}
async function updateTask(id, userId, data) {

    const [result] = await db.execute(
        `UPDATE tasks 
         SET title=?, description=?, dueDate=?, priority=?
         WHERE id=? AND userId=?`,
        [
            data.title,
            data.description,
            data.dueDate,
            data.priority,
            id,
            userId
        ]
    );

    return result;
}
async function deleteTask(id, userId) {
    const [result] = await db.execute(
        "DELETE FROM tasks WHERE id=? AND userId=?",
        [id, userId]
    );
    return result;
}

async function search(userId, keyword) {
    const [rows] = await db.execute(
        `SELECT * FROM tasks 
         WHERE userId=? 
         AND (title LIKE ? OR description LIKE ?)`,
        [userId, `%${keyword}%`, `%${keyword}%`]
    );
    return rows;
}

module.exports = {
    create,
    findAllByUser,
    updateTask,
    deleteTask,
    search,
    findById
};