const readline = require("readline-sync");
const authController = require("./controllers/authController");
const taskController = require("./controllers/taskController");

let currentUser = null;

async function main() {

    while (true) {

        if (!currentUser) {
            console.log("\nWelcome to Todo App");
            console.log("1. Register");
            console.log("2. Login");
            console.log("3. Exit");

            let choice = readline.question("Enter your choice: ");

            switch (choice) {

                case "1":
                    await authController.register();
                    break;

                case "2":
                    const user = await authController.login();
                    currentUser = user;
                    break;

                case "3":
                    process.exit();

                default:
                    console.log("Invalid choice");
            }

        } else {
                console.log("\nTodo Menu");
                console.log("1. Add Task");
                console.log("2. View Tasks");
                console.log("3. Edit Task");
                console.log("4. Delete Task");
                console.log("5. Search Tasks");
                console.log("6. Logout");

            let choice = readline.question("Enter your choice: ");

           switch (choice) {


                case "1":
                    await taskController.addTask(currentUser);
                    break;

                case "2":
                    await taskController.viewTasks(currentUser);
                    break;

                case "3":
                    await taskController.editTask(currentUser);
                    break;

                case "4":
                    await taskController.deleteTask(currentUser);
                    break;

                case "5":
                    await taskController.searchTasks(currentUser);
                    break;

                case "6":
                    currentUser = null;
                    console.log("Logged out!");
                    break;

                default:
                    console.log("Invalid choice");

                }
            
        }
    }
}

main();