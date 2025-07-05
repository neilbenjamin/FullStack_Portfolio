let userInput = Number(prompt("Please enter the amount of water you used this month in litres")) // prompt catsing to correct datatype for mathematical use

if(userInput <= 6000) {alert(`You owe the council R${userInput / 1000 * 15.73}.`)}
else if (userInput <= 10500) {let remainderNewRatio = userInput - 6000; alert(`You owe the council R${remainderNewRatio / 1000 * 22.38 + 94.38 }.`)} //inputting the remainder variable here courtesy of StackOverflow/ChatGPT and W3School. 
else if (userInput <= 35000) {let remainderNewRatio = userInput - 10500; alert(`You owe the council R${remainderNewRatio / 1000 * 31.77 + 94.38 + 100.71}.`)} //inputting the remainder variable here courtesy of StackOverflow/ChatGPT and W3School.
else if (userInput >= 35000 ){let remainderNewRatio = userInput - 35000; alert(`You owe the council R${remainderNewRatio / 1000 * 69.76 + 94.38 + 100.71 + 778.365}.`)} //inputting the remainder variable here courtesy of StackOverflow/ChatGPT and W3School.
else (alert(`Please only enter the amount used in in litres`)) //closing conditional statement


