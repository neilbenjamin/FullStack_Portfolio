const jwt = require('jsonwebtoken')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())

// AUTHENTICATION ENDPOINT
//Checking the User Login Authentication using Postman POST Method.
//Ensure thee Content-Type is Application - JSON and paste the srn and pwd 
//into the body section using raw and JSOBN mode.

app.post('/login', (req, res) => {
   const usr = req.body.username
   const pwd = req.body.password

   if (usr==='neil' && pwd==='TimeMachine'){

      //JWT Token generated when correct login details provided.
      payload = {
         'name': usr,
         'admin': true
      }
      //Digital signature for token
      const token = jwt.sign(JSON.stringify(payload), 'jwt-secret',
         {algorithm: 'HS256'})
      res.send({'token': token})

   }else{
      res.status(403).send({'err':'Incorrect login dude!'})
   }
   res.send(`Username: ${usr}\n Password: ${pwd}`)
})

// RESOURCE ENDPOINT
//Grant user access to the resource endpoint.
//Enter token granted in the Auth section and ensure it's 
//Enetered in to the header in this correct format as:
//Authorization: Bearer <token>.

app.get('/resource', (req, res) => {
   const auth = req.headers['authorization']
   const token = auth.split(' ')[1]
   try {
       const decoded = jwt.verify(token, 'jwt-secret')
       res.send({'msg':
     `Hello, ${decoded.name}! Your JSON Web Token has been verified Neil Enjoy your resource.`})
   }catch (err) {
       res.status(401).send({'err': 'Bad JWT!'})
} })

// ROLEPOINT ENDPOINTS

app.get('/admin_resource', (req, res) => {
   const token = req.headers['authorization'].split(' ')[1]
   try {
       const decoded = jwt.verify(token, 'jwt-secret')
       if (decoded.admin){
           res.send({'msg': 'Success!'})
       }else{
           res.status(403).send(
           {'msg': 'Your JWT was verified, you are Admin Neil.'})
       }
   }catch (e) {
       res.sendStatus(401)}})


app.listen(port, () => console.log(
   `Now listening at http://localhost:${port}`))