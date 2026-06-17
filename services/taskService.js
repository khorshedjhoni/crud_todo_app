const taskRepository = require("../repositories/taskRepository");

async function addTask(userId, title, description, dueDate, priority) {

    if (!title.trim()) {
        console.log("Task title cannot be empty.");
        return;
    }

    if (!["Low", "Medium", "High"].includes(priority)) {
        console.log("Invalid priority.");
        return;
    }

    await taskRepository.create(userId, title, description, dueDate, priority);

    console.log("Task added successfully!");
}

async function viewTasks(userId) {

    const tasks = await taskRepository.findAllByUser(userId);

    if (tasks.length === 0) {
        console.log("No tasks found.");
        return;
    }

    console.log("\nYour Tasks:");

    tasks.forEach(t => {
        console.log(`
ID: ${t.id}
Title: ${t.title}
Due Date: ${t.dueDate}
Priority: ${t.priority}
Status: ${t.status}
        `);
    });
}
async function editTask(id, userId, data) {

    const task = await taskRepository.findById(id, userId);

    if (!task) {
        console.log("Task not found.");
        return;
    }
    console.log("DEBUG EDIT DATA:", data);
console.log("TASK ID:", id);
console.log("USER ID:", userId);

    await taskRepository.updateTask(id, userId, {
    title: data.title || task.title,
    description: data.description || task.description,
    dueDate: data.dueDate || task.dueDate,
    priority: data.priority || task.priority
});
    if (result.affectedRows === 0) {
        console.log("Update failed.");
        return;
    }

    console.log("Task updated successfully!");
}
async function getTaskById(id, userId) {
    return await taskRepository.findById(id, userId);
}
async function deleteTask(id, userId) {

    const result = await taskRepository.deleteTask(id, userId);

    if (result.affectedRows === 0) {
        console.log("Task not found.");
        return;
    }

    console.log("Task deleted successfully!");
}

async function searchTasks(userId, keyword) {

    const tasks = await taskRepository.search(userId, keyword);

    if (tasks.length === 0) {
        console.log("No matching tasks found.");
        return;
    }

    tasks.forEach(t => {
        console.log(`
ID: ${t.id}
Title: ${t.title}
Description: ${t.description}
Status: ${t.status}
        `);
    });
}

module.exports = {
    addTask,
    viewTasks,
    deleteTask,
    searchTasks,
    editTask,
    getTaskById
};