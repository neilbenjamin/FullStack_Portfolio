//This was a tricky exercise and took me a full day or digging, trial and error to come to this solution. I
//relied on the previous 2 tasks quite heaviliy for the underlying logic and comprehension as well as using
//YouTube and and openAi to assist with the Postman operations and the differences between using the query selectors and
//the path parameters.

//Importing necessary modules Express and node modules and assigning them to variables for use in the project.

//Importing express.
const express = require("express");
//File system module to to read, write, check and delete file systems on a computer.
const fs = require("fs");
//Express assigned to app
const app = express();
//Middleware function to analzye and breakdown or parse data from the main body of an incoming http request.
const bodyParser = require("body-parser");
//Instruction to parse incoming request bodies that are in JSON bodies.
app.use(bodyParser.json());

// GET/READ Router Handles specific data from various end-points.
// Declare json object in the url right after the root directory, parse the data and
//respond with the api data.

app.get("/api", (req, res) => {
  try {
    const apiData = JSON.parse(fs.readFileSync("api.json"));
    res.json(apiData);
  } catch (error) {
    console.error("Error reading api.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//return id
app.get("/api/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  const apiData = getApiData();
  const data = apiData.find((item) => item.id === id);
  if (data) {
    resp.json(data); // Send the specific object as JSON response
  } else {
    resp.status(404).send("Data with specified ID not found");
  }
});

// Base directory passing data using teh query method
app.get("/", (req, resp) => {
  const name = req.query.name;
  if (!name) {
    resp.send("Hi, this is the root!");
  } else {
    resp.send("Hello, " + name);
  }
});

// Get description by ID using the path parameter method to access id and relevant description from api data body.
app.get("/api/:id/description", (req, resp) => {
  const id = parseInt(req.params.id);
  const apiData = getApiData();
  const data = apiData.find((item) => item.id === id);
  if (data) {
    const description = data.description;
    resp.send(description);
  } else {
    resp.status(404).send("Data with specified ID not found");
  }
});

// Get title by ID using the path parameter method to access id and relevant description from api data body.
app.get("/api/:id/title", (req, resp) => {
  const id = parseInt(req.params.id);
  const apiData = getApiData();
  const data = apiData.find((item) => item.id === id);
  if (data) {
    const title = data.title;
    resp.send(title);
  } else {
    resp.status(404).send("Data with specified ID not found");
  }
});

// Get URL by ID using the path parameter method to access id and relevant description from api data body.
app.get("/api/:id/URL", (req, resp) => {
  const id = parseInt(req.params.id);
  const apiData = getApiData();
  const data = apiData.find((item) => item.id === id);
  if (data) {
    const URL = data.URL;
    resp.send(URL);
  } else {
    resp.status(404).send("Data with specified ID not found");
  }
});

//GET/READ Function

//Reads API data, and creates a JSON object and retruns the data, and if it doesn't exist, it returns an empty array.
//This is what we/re using when we call the initial reuqest to the browser.
function getApiData() {
  try {
    const content = fs.readFileSync("api.json");
    return JSON.parse(content);
  } catch (e) {
    // File non-existent
    fs.writeFileSync("api.json", "[]");
    return [];
  }
}

// POST/CREATE Router handles a POST request to the specified end-point

// Create new API data
app.post("/api", (req, resp) => {
  const newData = req.body;
  addApiData(newData);
  resp.send("Success, added data");
});

//POST/CREATE utility function
// Takes incoming data and adds it to the existing JSON data and retruns a new JSON object with the new data
function addApiData(data) {
  const apiData = getApiData();
  apiData.push(data);
  fs.writeFileSync("api.json", JSON.stringify(apiData));
}

// PUT/UPDATE Router
// Update API data by ID at the specified end-point
app.put("/api/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  const newData = req.body;
  const success = updateApiData(id, newData);
  if (success) {
    resp.send("Success, updated data");
  } else {
    resp.status(404).send("Data with specified ID not found");
  }
});

// PUT/UPDATE updateApiData function to place new data at the specified end-point.
function updateApiData(id, newData) {
  const apiData = getApiData();
  const itemIndex = apiData.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    apiData[itemIndex] = { ...apiData[itemIndex], ...newData };
    fs.writeFileSync("api.json", JSON.stringify(apiData));
    return true;
  }
  return false;
}

//DELETE Router

// Delete API data by ID end-point
app.delete("/api/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  const success = deleteApiData(id);
  if (success) {
    resp.send("Success, deleted data");
  } else {
    resp.status(404).send("Data with specified ID not found");
  }
});

// DELETE deleteApiData function to delete the stiipulated index and associated data.
function deleteApiData(id) {
  const apiData = getApiData();
  const itemIndex = apiData.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    apiData.splice(itemIndex, 1);
    fs.writeFileSync("api.json", JSON.stringify(apiData));
    return true;
  }
  return false;
}

//Server listening on port 8080 with message confirming the server is running.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
