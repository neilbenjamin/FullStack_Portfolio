let userInput = prompt("Please enter a word ").toLowerCase();
let counter = 0;
let reverseCount = userInput.length - 1;
let forwardWord = "";
let backwardWord = "";

/*Initial Task. I reassigned theg user inputs to new variales and then compared the varaiables
but couldn't figure out how to do it with one while loop. This works but found a better solution below
courtesyof W3Schools and ChatGpt*/

while (reverseCount >= 0) {
  backwardWord += userInput[reverseCount];
  reverseCount--;
}
console.log(backwardWord);

while (counter < userInput.length) {
  forwardWord += userInput[counter];
  counter++;
}
console.log(forwardWord);

if (forwardWord === backwardWord) {
  console.log(`${forwardWord} is a palindrome`);
  alert(`${forwardWord} is a palindrome`);
} else {
  console.log(`${forwardWord} is not a palindrome`);
  alert(`${forwardWord} is not a palindrome`);
}

/*Easier, more practical solution using one whle loop. I learnt this solution from W3School and ChatGpt
and was able to check both conditions inside one while loop.*/

let i = 0;
let j = userInput.length - 1;

while (i < j) {
  if (userInput[i] !== userInput[j]) {
    console.log(`${userInput} is not a palindrome`);
    break;
  } //!== operator compares the ussr inputs
  else if (userInput[i] === userInput[j]) {
    console.log(`${userInput} is a palindrome.`);
    break;
  }
  i++;
  j--;
}
