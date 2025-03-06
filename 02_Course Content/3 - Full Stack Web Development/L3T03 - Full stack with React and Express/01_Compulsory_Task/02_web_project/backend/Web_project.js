const express = require("express");
const cors = require('cors');
const fs = require("fs");
const app = express();
//Require Cross Origin Resource Sharing Middleware to allow for backend and frontend compatibility. Solution courtesy of OpenAi.
app.use(cors());
app.use(express.json());

//Update each new project created with a new id based on the previous id + 1.
function generateUniqueId() {
  const apiData = getApiData();
  // Find the highest id and increment it by 1
  const highestId = apiData.reduce((maxId, project) => Math.max(maxId, project.id), 0);
  return highestId + 1;
}

//Get function. 
function getApiData() {
  try {
    const content = fs.readFileSync("api.json");
    return JSON.parse(content);
  } catch (e) {
    fs.writeFileSync("api.json", "[]");
    return [];
  }
}

//Get api router 
app.get("/api", (req, res) => {
  try {
    const apiData = JSON.parse(fs.readFileSync("api.json"));
    res.json(apiData);
  } catch (error) {
    console.error("Error reading api.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//Get api id router
app.get("/api/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  const apiData = getApiData();
  const data = apiData.find((item) => item.id === id);
  if (data) {
    resp.json(data);
  } else {
    resp.status(404).send("Data with specified ID not found");
  }
});

//Get api base/root router
app.get("/", (req, resp) => {
  const name = req.query.name;
  if (!name) {
    resp.send("Hi, this is the root!");
  } else {
    resp.send("Hello, " + name);
  }
});

//Get api description router
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

//Get api title router.
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

//Api create/POST router
app.post("/api", (req, resp) => {
  const newData = req.body;
  const createdProject = addApiData(newData);
  resp.json(createdProject);
});

//Api create/POST function
function addApiData(data) {
  const apiData = getApiData();
  const newProject = {
    ...data,
    id: generateUniqueId(),
  };
  apiData.push(newProject);
  fs.writeFileSync("api.json", JSON.stringify(apiData));
  return newProject;
}

//Api PUT/amend/update router
app.put("/api/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  const newData = req.body;
  const success = updateApiData(id, newData);
  if (success) {
    resp.json({ message: "Success, updated data" });
  } else {
    resp.status(404).send("Data with specified ID not found");
  }
});

//Api PUT/amend/update function
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

//Api Delete router
app.delete("/api/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  const success = deleteApiData(id);
  if (success) {
    resp.send("Success, deleted data");
  } else {
    resp.status(404).send("Data with specified ID not found");
  }
});

//Api Delete function
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

//Specify port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
