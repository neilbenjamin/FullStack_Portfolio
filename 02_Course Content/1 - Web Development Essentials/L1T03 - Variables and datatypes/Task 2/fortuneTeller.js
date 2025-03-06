const mothersFirstName = prompt("What is your mother's first name?");
let nameOfStreet = prompt("What is the name of the street your grew up on?");
let favouriteColour = prompt("What was your favourite colour when you were a child?");
let currentAge = Number(prompt("What is your current age?"));
let randomNumber = Number(prompt("Please choose a number between 1 and 10!"))

console.log(`You will meet your best friend in ${randomNumber} years.
Your new best friend's name will be ${mothersFirstName} ${nameOfStreet}.
You will get married in ${Math.round(currentAge / randomNumber)} years.
You are going to have ${currentAge%randomNumber} children and in ${currentAge - randomNumber}
years you are going to dye your hair ${favouriteColour}.`)

/* Looked up the Math.round() method here. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round*/
