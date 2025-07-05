const jwt = require('jsonwebtoken')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())


// Users and their permissions saved in array. Thanks to YouTube and OpenAi for the solution.
const users = [
  { username: 'Mazvita', password: 'mazziestar', permissions: ['/a'] },
  { username: 'Meagan', password: 'meglaDonna', permissions: ['/a', '/b'] },
  { username: 'Kabelo', password: 'kabkidz', permissions: ['/b', '/c'] },
];

// Login endpoint - Accessible all users
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user in the array.
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // User found, create JWT token with permissions. All users receive their own unique tokens WITH the permissions written into them. Clever. 
    const payload = {
      'name': user.username,
      'permissions': user.permissions
    };

    //JWT Algorithm encodes the user details to base64 encoding key.
    const token = jwt.sign(payload, 'jwt-secret', { algorithm: 'HS256' });
    res.send({ 'token': token });
  } else {
    // User not found, respond with error
    res.status(403).send({ 'err': 'Incorrect login credentials!' });
  }
});

// Middleware to check permissions. Solution of Open AI. Useful function  checking 
//requested authorizations in the header request. It also has a next argument for including any additional 
//next steps we may need in the stack. 
const checkPermission = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).send({ 'err': 'No authorization header provided' });
  }

  //Checking the token encryption
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, 'jwt-secret');
    //passing encryption data to req.user
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ 'err': 'Invalid token' });
  }
};

//Checking each endpoint for validity based on the checkPermissions encryption values
//Use postman to test all teh end points and the different user token auth on various endpoint to see they all 
//match the requirements as per the task.

// Route for /a
app.get('/a', checkPermission, (req, res) => {
  if (req.user.permissions.includes('/a')) {
    res.send({ 'msg': `Hello, ${req.user.name}! You have access to /a.` });
  } else {
    res.status(403).send({ 'err': `${req.user.name}! You do not have access to this resource.` });
  }
});

// Route for /b
app.get('/b', checkPermission, (req, res) => {
  if (req.user.permissions.includes('/b')) {
    res.send({ 'msg': `Hello, ${req.user.name}! You have access to /b.` });
  } else {
    res.status(403).send({ 'err': `${req.user.name}! You do not have access to this resource.` });
  }
});

// Route for /c
app.get('/c', checkPermission, (req, res) => {
  if (req.user.permissions.includes('/c')) {
    res.send({ 'msg': `Hello, ${req.user.name}! You have access to /c.` });
  } else {
    res.status(403).send({ 'err': `${req.user.name}! You do not have access to this resource.` });
  }
});

app.listen(port, () => console.log(
   `Now listening at http://localhost:${port}`))