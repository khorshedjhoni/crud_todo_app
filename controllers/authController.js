const authService = require("../services/authService");
const readline = require("readline-sync");

async function register() {

    const name = readline.question("Enter your name: ");
    const email = readline.question("Enter your email: ");
    const password = readline.question("Enter your password: ");

    await authService.register(name, email, password);
}

async function login() {

    const email = readline.question("Enter your email: ");
    const password = readline.question("Enter your password: ");

    const user = await authService.login(email, password);

    return user;
}

module.exports = {
    register,
    login
};