/*I battled with this one as I couldn't figure out how to include the avarge itieration 
in the same while loop that was checking for the correct user number input, so I used a 2nd while
loop to do that avarage calculation.*/

let wrongNum = []; // receives the wrong numbers from user input.
let averagesSum = 0; // adds the array integers together
let i = 0; //counter

while (true) {
  let userInput = Number(prompt("Please enter a number"));
  if (userInput !== -1) {
    wrongNum.push(userInput);
    console.log(
      `This ${userInput} is not the correct number, please try again`
    );
  } // push the wrong number to a new variable - wrongNum
  else if (userInput === -1) {
    console.log("Well done, you have entered the correct answer.");
    break;
  }
}

// Below is the 2nd while loop to calculate the average for the sum of wrong answers entered.
// I got this average calculation from W3Schools and ChatGpt.

while (i < wrongNum.length) {
  averagesSum += wrongNum[i];
  i++;
}
let average = averagesSum / wrongNum.length;
console.log(
  `The number average for all incorrect numbers entered is ${average}`
);
