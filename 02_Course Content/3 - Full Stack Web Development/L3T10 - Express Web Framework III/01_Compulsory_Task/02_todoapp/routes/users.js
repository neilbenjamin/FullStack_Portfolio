//This was a really good learning curve and I feel like I really started getting a deeper understanding of 
//endpoints and how they work by using Thunderclient as the API fetch tool. Super helpful. 
//Solutions courtesy of Thunderclient, Postman, Hyperion Dev and OpenAi.

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const todosFilePath = path.join(__dirname, "todos.json");
const userLoginDetailsPath = path.join(__dirname, "userLoginDetails.json");
const { checkJWTToken, onlyGmailUsers, checkTaskLength, ensureJSONContentType } = require("./middleware");
const { v4: uuidv4 } = require('uuid');

//REGISTER USER ENDPOINT ROUTER
router.post("/register", onlyGmailUsers, ensureJSONContentType, (req, res) => {
  try {
    // Ensure the userLoginDetails.json file exists
    if (!fs.existsSync(userLoginDetailsPath)) {
      fs.writeFileSync(userLoginDetailsPath, JSON.stringify({}));
      console.log("userLoginDetails.json file created");
    }

    // Load users from the file
    const userLoginDetailsRaw = fs.readFileSync(userLoginDetailsPath);
    const userLoginDetails = JSON.parse(userLoginDetailsRaw);

    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      console.log("Registration attempt with missing username or password");
      return res
        .status(400)
        .send({ message: "Username and password are required" });
    }

    // Check if user already exists
    if (userLoginDetails[username]) {
      console.log(`Registration failed: User ${username} already exists`);
      return res.status(409).send({ message: "User already exists" });
    }

    // Add new user to the object
    userLoginDetails[username] = { password };

    // Write the updated users object back to the file
    fs.writeFileSync(
      userLoginDetailsPath,
      JSON.stringify(userLoginDetails, null, 2),
      "utf8"
    );
    console.log(`User ${username} registered successfully`);

    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).send({ message: "An error occurred during registration" });
  }
});

//Post request for user-login authorization reading from userLoginDetails.json

router.post("/login", ensureJSONContentType, (req, res) => {
  // Load users from the file
  const userLoginDetailsRaw = fs.readFileSync(userLoginDetailsPath);
  const userLoginDetails = JSON.parse(userLoginDetailsRaw);

  console.log("Loaded user details:", userLoginDetails); // Log the parsed user details

  const { username, password } = req.body;
  console.log("Attempting login with:", username, password); // Log the received username and password

  // Check if user exists and password matches
  if (
    userLoginDetails[username] &&
    userLoginDetails[username].password === password
  ) {
    let jwtToken = jwt.sign({ username }, "secretKey", { expiresIn: "24h" });
    res.send({ token: jwtToken });
  } else {
    res
      .status(401)
      .send({ message: "SORRY, Username or password is incorrect" });
  }
});

// Function to read todos from file
function readTodosFromFile() {
  try {
    const todosRawData = fs.readFileSync(todosFilePath);
    const todos = JSON.parse(todosRawData);
    console.log("Todos read from file:", todos); // Check what's being read
    return todos;
  } catch (error) {
    console.error("Error reading todos file:", error); // Log any error
    return [];
  }
}

function writeTodosToFile(todos) {
  try {
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), "utf8");
  } catch (error) {
    // handle error, for example log it and/or send an error response to the client
    console.error("Error writing to file:", error);
  }
}

//CRUD OPERATIONS

/* GET user's TODO. - OPERATIONAL */
router.get("/getTodo", checkJWTToken, ensureJSONContentType, (req, res) => {
  let todos = readTodosFromFile();
  res.json(todos);
});

// POST a new todo
router.post("/addTodo", checkJWTToken, checkTaskLength, ensureJSONContentType, (req, res) => {
  let todos = readTodosFromFile();

  // Create a new todo object using the data from req.body
  const newTodo = {
    id: uuidv4(), // Basic ID iteration
    ...req.body, // Spread the contents of req.body into this object
  };

  // Add the new todo to the array
  todos.push(newTodo);

  // Write the updated todos array back to the file
  writeTodosToFile(todos);

  // Respond with a message and the updated todos
  res.json({ message: "Todo added successfully", todos });
});

//UPDATE the todolist:

// PUT to update an existing todo
router.put("/updateTodo/:id", checkJWTToken, checkTaskLength, ensureJSONContentType, (req, res) => {
  const { id } = req.params; // Extract the id from the URL
  const updatedTodoData = req.body;
  let todos = readTodosFromFile();
  let todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    // Todo with the given id not found
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  // Update the todo at the found index
  todos[todoIndex] = { ...todos[todoIndex], ...updatedTodoData };

  // Write the updated todos array back to the file
  writeTodosToFile(todos);

  // Respond with a message and the updated todo
  res.json({ message: "Todo updated successfully", todo: todos[todoIndex] });
});

// DELETE to remove an existing todo
router.delete("/deleteTodo/:id", checkJWTToken, ensureJSONContentType, (req, res) => {
  const { id } = req.params; // Extract the id from the URL
  let todos = readTodosFromFile();
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    // Todo with the given id not found
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  // Remove the todo from the array
  todos.splice(todoIndex, 1);

  // Write the updated todos array back to the file
  writeTodosToFile(todos);

  // Respond with a message
  res.json({ message: "Todo deleted successfully", id: id });
});

module.exports = router;
