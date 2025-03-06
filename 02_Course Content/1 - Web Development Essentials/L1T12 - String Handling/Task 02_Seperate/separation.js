separationString = (myString) => {
  /* The split string method tunrs the string into an array with individual words as elements.
    However, you need to leave a space between the " " double quotation marks or it will split the array into an 
    array of individual characters. This almost drove me mad trying to figure it out. I used CHatGpt to help me solve 
    the conundrum.
    Then the .join() array method joins the split elements together appending the new-line technique in between each new 
    word thus separting them into a new line.
    */
  let newLine = myString.split(" ").join("\n");
  return newLine;
};

// DO NOT EDIT BELOW THIS LINE
let testStrings = [
  "Hello World",
  "Hello",
  "HELLO",
  "Software Engineering is Fun",
  "I like Javascript",
  "Line1 Line2 Line3 Line4 Line5 Line6 Line7 Line8 Line9",
];

console.log("------------------------------------------------");

testStrings.forEach((sentence) => {
  let sep = separationString(sentence);
  console.log(sep);
  console.log("------------------------------------------------");
});
