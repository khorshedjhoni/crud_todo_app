const userRepository = require("../repositories/userRepository");
const { isValidEmail } = require("../utils/validation");

async function register(name, email, password) {

    if (!name.trim()) {
        console.log("Name cannot be empty.");
        return;
    }

    if (!isValidEmail(email)) {
        console.log("Invalid email format.");
        return;
    }

    if (password.length < 4) {
        console.log("Password must be at least 4 characters.");
        return;
    }

    const user = await userRepository.findByEmail(email);

    if (user) {
        console.log("Email already exists.");
        return;
    }

    await userRepository.create(name, email, password);

    console.log("Registration successful!");
}

async function login(email, password) {

    const user = await userRepository.findByEmail(email);

    if (!user) {
        console.log("Invalid email or password.");
        return null;
    }

    if (user.password !== password) {
        console.log("Wrong credential");
        return null;
    }

    console.log("Login successful!");

    return user; 
}
module.exports = {
    register,
    login
};