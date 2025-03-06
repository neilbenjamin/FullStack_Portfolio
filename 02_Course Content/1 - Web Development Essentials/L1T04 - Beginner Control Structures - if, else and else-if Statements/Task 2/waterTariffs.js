
let userInput = Number(prompt("Please enter the amount of water you used this month in litres")) // prompt catsing to correct datatype for mathematical use

if(userInput <= 6000) {alert(`You owe the council R${userInput / 1000 * 15.73}.`)}
else if (userInput <= 10500) {let remainderNewRatio = userInput - 6000; alert(`You owe the council R${remainderNewRatio / 1000 * 22.38 + 94.38 }.`)} //inputting the remainder variable here courtesy of StackOverflow/ChatGPT and W3School. 
else if (userInput <= 35000) {let remainderNewRatio = userInput - 10500; alert(`You owe the council R${remainderNewRatio / 1000 * 31.77 + 94.38 + 100.71}.`)} //inputting the remainder variable here courtesy of StackOverflow/ChatGPT and W3School.
else if (userInput >= 35000 ){let remainderNewRatio = userInput - 35000; alert(`You owe the council R${remainderNewRatio / 1000 * 69.76 + 94.38 + 100.71 + 778.365}.`)} //inputting the remainder variable here courtesy of StackOverflow/ChatGPT and W3School.
else (alert(`Please only enter the amount used in in litres`)) //closing conditional statement

/* I got very confused as to how to go about splitting the new priceing rations
into their new price brackets. This literally blew my head out. Maths was not a strength
of mine in school. I'm sure there must be a better was to do this, but I think this works too.*/

// console.log(userInput, typeof userInput) // check datatype 

//incremental water tariff table pseudo-code
// if water consumption is between 0 & 6kl, cost is R15.73 per litre.
// if water consumption is between 6kl & 10.5kl, cost is now R22.38 per litre.
// if water consumption is between 10.5kl & 35kl, cost is now R31.77 per litre.
// if water consumption is more than 35kl, cost is now R69,76 per litre.


