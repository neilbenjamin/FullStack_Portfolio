let userInput = prompt("Please enter a word ").toLowerCase();
let counter = 0;
let reverseCount = userInput.length - 1;
let forwardWord = "";
let backwardWord = "";

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
