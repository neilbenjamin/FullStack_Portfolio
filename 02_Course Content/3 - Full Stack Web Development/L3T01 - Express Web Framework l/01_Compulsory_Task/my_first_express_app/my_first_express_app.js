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
