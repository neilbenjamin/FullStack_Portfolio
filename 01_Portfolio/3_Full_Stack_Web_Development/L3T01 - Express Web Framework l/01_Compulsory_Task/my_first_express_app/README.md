# My First Express.js Application

This project is a foundational Express.js application designed to demonstrate basic server setup, serving static files, reading local JSON data, and handling simple routes. It showcases how to create a minimal web server that responds to HTTP requests and serves content from a `person.json` file.

## 🌟 Features

* **Express.js Server:** Sets up a basic web server using the Express.js framework.
* **Static File Serving:** Uses `express.static` middleware to serve static files (e.g., HTML, CSS, images) from a `public` directory.
* **Local JSON Data Reading:** Reads and parses data from a local `person.json` file using Node.js's built-in `fs` (file system) module.
* **Root Route (`/`):** Responds to GET requests on the root URL by sending a personalized welcome message using data from `person.json`.
* **Error Handling:** Implements a basic 404 error handler for any routes not explicitly defined, providing a user-friendly message.
* **Environment Variables:** Demonstrates how to access and utilize `process.env` for configurable settings like the server port, defaulting to `3000` if not specified.
* **Nodemon Integration:** Configured to use `nodemon` for automatic server restarts during development, enhancing the developer experience.

My First Express.js Application
This project is a foundational Express.js application designed to demonstrate basic server setup, serving static files, reading local JSON data, and handling simple routes. It showcases how to create a minimal web server that responds to HTTP requests and serves content from a person.json file.

🌟 Features
Express.js Server: Sets up a basic web server using the Express.js framework.

Static File Serving: Uses express.static middleware to serve static files (e.g., HTML, CSS, images) from a public directory.

Local JSON Data Reading: Reads and parses data from a local person.json file using Node.js's built-in fs (file system) module.

Root Route (/): Responds to GET requests on the root URL by sending a personalized welcome message using data from person.json.

Error Handling: Implements a basic 404 error handler for any routes not explicitly defined, providing a user-friendly message.

Environment Variables: Demonstrates how to access and utilize process.env for configurable settings like the server port, defaulting to 3000 if not specified.

Nodemon Integration: Configured to use nodemon for automatic server restarts during development, enhancing the developer experience.

📁 Project Structure
The project will typically have the following structure:

├── public/                # Directory for static files (e.g., index.html, style.css)
│   └── index.html         # Example static file (optional)
├── person.json            # JSON file containing data to be read by the server
├── app.js                 # Main server application file (your provided JavaScript code)
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Exact dependency versions
└── README.md              # This file
Example person.json
JSON

{
  "name": "John Doe"
}
Example public/index.html (Optional, for serving static content)
HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express Static Page</title>
</head>
<body>
    <h1>Hello from a Static HTML Page!</h1>
    <p>This page is served by the Express.js application.</p>
</body>
</html>
📦 Dependencies
This project relies on the following key dependencies, as listed in package.json:

express: The fast, unopinionated, minimalist web framework for Node.js.

nodemon: A utility that monitors for any changes in your source and automatically restarts your server. This is highly recommended for development.

🚀 How to Run the Project
For this project to work, you must have Node.js installed on your system.

If you don't have Node.js installed, please visit the official Node.js website to download and install it. You can verify your installation by opening your terminal or command prompt and typing node -v and npm -v.

Once Node.js is installed, follow these steps:

Create Your Project Directory:
Create a new folder for your project and navigate into it using your terminal or command prompt:

Bash

mkdir my-express-app
cd my-express-app
Initialize npm:
Initialize a new Node.js project to create the package.json file.

Bash

npm init -y
Install Dependencies:
Install express and nodemon as project dependencies:

Bash

npm install express nodemon
Create app.js:
Create a file named app.js in your project's root directory and paste the provided JavaScript code into it.

JavaScript

const express = require('express')
//Import the fs (file system module from node)
const fs = require('fs'); 
const app = express()

//Using the middleware (express.static) method to serve the public files to the user.
app.use(express.static('public'));

// Read the content of the person.json file and parse it so we can use it in JS.
//This fs module allows us to acess and parse the json object and assign it to the
//personData variable. Solution courtesy of YouTube, Hyperion  Doc's and OPenAi.

const personData = JSON.parse(fs.readFileSync('person.json', 'utf8'));

//Using the express root directory to send the json object property
//to the selected browser port.
app.get('/', function (req, res) {
  // Send the name property as a response using 
  res.send(`Welcome ${personData.name}`);
});

//Error handling
app.get('*', function(req, res, next) {
    let err = new Error('Sorry! Can’t find that resource. Please check your URL.');
    err.statusCode = 404;
    // Send a simplified error message as the response
    res.status(404).send(err.message);
});

//Setting environment variables to the process.env object to allow us to ascertain what we have in the 
//is correct, like for example a password or a portnumber. 
console.log('The value of process.env is:', process.env);

//Selecting the ouput ports to serve the information to the user. I had the port on 7020 initially, apologies. 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
Create person.json:
Create a file named person.json in your project's root directory with some content (e.g., {"name": "Alice"}).

Create public directory and index.html (Optional):
Create a folder named public in your project's root directory. Inside public, create an index.html file if you want to test serving static content.

Start the Server:
The package.json includes a start script that uses nodemon. Run the server using:

Bash

npm start
This will start the server and automatically restart it if you make changes to app.js or person.json.

🌐 Accessing the Application
Once the server is running, open your web browser and navigate to:

http://localhost:3000/: You should see the welcome message (e.g., "Welcome Alice").

http://localhost:3000/any-other-path: You should see the 404 error message ("Sorry! Can’t find that resource. Please check your URL.").

http://localhost:3000/index.html: If you created public/index.html, you should see the content of that static HTML file.

⚙️ Available Scripts
In the project directory, you can run:

npm start
Starts the Express.js server using nodemon. This is the recommended way to run the application during development as it provides live reloading.

npm test
Currently, this script just outputs an error message, as no specific tests are configured for the project.