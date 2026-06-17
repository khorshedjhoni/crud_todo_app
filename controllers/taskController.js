const readline = require("readline-sync");
const taskService = require("../services/taskService");

async function addTask(user) {

    const title = readline.question("Enter task title: ");
    const description = readline.question("Enter description: ");
    const dueDate = readline.question("Enter due date (YYYY-MM-DD): ");
    const priority = readline.question("Enter priority (Low/Medium/High): ");

    await taskService.addTask(user.id, title, description, dueDate, priority);
}

async function viewTasks(user) {
    await taskService.viewTasks(user.id);
}

async function editTask(user) {

    const id = readline.questionInt("\nEnter task ID to edit: ");

    const task = await taskService.getTaskById(id, user.id);

    if (!task) {
        console.log("Task not found.");
        return;
    }

    console.log("\n--- Edit Task ---\n");

    const title = readline.question(
        `Current Title: ${task.title}\nEnter new title: `
    );

    console.log("");

    const description = readline.question(
        `Current Description: ${task.description}\nEnter new description: `
    );

    console.log("");

    const dueDate = readline.question(
        `Current Due Date: ${task.dueDate}\nEnter new due date: `
    );

    console.log("");

    const priority = readline.question(
        `Current Priority: ${task.priority}\nEnter new priority: `
    );

    console.log("");

    await taskService.editTask(id, user.id, {
        title,
        description,
        dueDate,
        priority
    });
}
async function deleteTask(user) {

    const id = readline.questionInt("Enter task ID to delete: ");
    const confirm = readline.question("Are you sure? (yes/no): ");

    if (confirm.toLowerCase() !== "yes") {
        console.log("Delete cancelled.");
        return;
    }

    await taskService.deleteTask(id, user.id);
}

async function searchTasks(user) {

    const keyword = readline.question("Enter search keyword: ");
    await taskService.searchTasks(user.id, keyword);
}

module.exports = {
    addTask,
    viewTasks,
    editTask,
    deleteTask,
    searchTasks
};