//Another very informative and super useful technique to keep the code seperated and easier to use.
//Very good. Solutions courtesy of Hyperion Dev and OpenAi.

let jwt = require("jsonwebtoken");

//CHECK TOKEN.
function checkJWTToken(req, res, next) {
  if (req.headers.token) {
    let token = req.headers.token;
    jwt.verify(token, "secretKey", function (error, data) {
      if (error) {
        res.send({ message: "Invalid Token" });
        next();
      } else {
        req.username = data.username;
        req.password = data.password;
        next();
      }
    });
  } else {
    res.send({ message: "No token attached to the request" });
  }
}

//CHECK PASSWORD CHANGE/NOT REQUIRED BUT KEEPING IT FOR FUTURE.
function changePasswordVerification(req, res, next) {
  if (
    req.body.newPassword === req.body.confirmPassword &&
    req.body.newPassword.length >= 6
  ) {
    req.newUserpassword = req.newPassword;
    next();
  } else if (req.body.newPassword.length < 6) {
    res.send({
      message: "The new password needs to be longer than six characters.",
    }),
      next();
  } else {
    res.send({
      message: "Confirmation Password and New Password does not match.",
    });
    next();
  }
}

//CHECK OLNY GMAIL USERS
function onlyGmailUsers(req, res, next) {
  const { username } = req.body; // Assuming 'username' is sent in the body of the request

  // Check if the username ends with '@gmail.com'
  if (username && username.endsWith("@gmail.com")) {
    next(); // Proceed to next middleware or route handler
  } else {
    console.log(
      `Registration failed: Username ${username} is not a Gmail account`
    );
    res
      .status(403)
      .send({ message: "Only Gmail accounts are allowed to register" });
  }
}

//CHECK TASK LENGTH FUNCTION
function checkTaskLength(req, res, next) {
  const content = req.body.content;

  if (content && content.length > 140) {
    // Content is too long
    return res.status(400).send({
      message: "Content exceeds the maximum length of 140 characters.",
    });
  }

  // Content is fine, proceed to the next middleware/route handler
  next();
}

// CHECK CONTENT-TYPE = APPLICATION/JSON
function ensureJSONContentType(req, res, next) {
  // Check the 'Content-Type' header of the incoming request
  if (req.headers["content-type"] === "application/json") {
    // If it is 'application/json', proceed to the next middleware/route handler
    next();
  } else {
    // If not, reject the request and send a 415 Unsupported Media Type status code
    res.status(415).send({
      message: "Invalid 'Content-Type'. Only 'application/json' is supported.",
    });
  }
}

module.exports = {
  // ... other exported middlewares
  ensureJSONContentType,
};

module.exports = {
  checkJWTToken,
  changePasswordVerification,
  onlyGmailUsers,
  checkTaskLength,
  ensureJSONContentType,
};
