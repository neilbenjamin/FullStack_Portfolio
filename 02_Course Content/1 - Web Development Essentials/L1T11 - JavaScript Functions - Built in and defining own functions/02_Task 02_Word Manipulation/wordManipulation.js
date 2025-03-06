//Function body - This took me almost 24 hours to figure out and even with the help of every resource, I still struggled.
// I understand how the code below works, but it's very challenging to reconfigure one's brain to think in this
//manner and will need a lot more practise with this.

while (true) {
  //Create a while loop to bring the user back to the initial prompt if he doesn't enter a word with 6 letters.

  //Prompt user to enter a word. Assign this userInput as the argument for the function replaceSecondLetter.
  const userInput = prompt("Enter a word with at least six letters:");
  // replaceSecondLetter(userInput);
  let savedUserInput = userInput;
  //We can then call the function by it's name and pass in the argument, which in this case is the userPrompt.

  //Conditional If Statement to check on user entering 6 letters.

  if (savedUserInput.length >= 6) {
    //FUNCTIONS

    //array is used as a parameter but it's currenlt accepting the userInput from the prompt.
    function replaceSecondLetter(array) {
      // Using the built-in method to convert a String to an Array. This took me almost 12 hours to figure out. No swearing...
      // assigning the result of the array.split('') to a new vraible - stringToArray.
      let stringToArray = array.split("");

      //Now that the string is split into an array, we can iterate the indexes of each letter much easier than
      //if the word was pushed to an array. Adding 2 to each iteration instead with the 1 +=2.
      for (let i = 1; i < stringToArray.length; i += 2) {
        //This calls every 2nd index of array stringToArray and changes it's value to "!" by assigning it with the new value.
        stringToArray[i] = "!";
      }

      //Once the indexes have been changed, the built-in method .join('') then converts the array back into a string.
      // by assigning it to a new variable, arrayToString.
      let arrayToString = stringToArray.join("");

      //We then return the final output arrayToString
      return arrayToString;
    }

    //Second Task - Reverse String

    function reverseWord(WordToBeReversed) {
      let string = WordToBeReversed;
      let convertString = string.split("");
      convertString.reverse();
      let returnString = convertString.join("");
      return returnString;
    }

    //Third Task - Capitalize 6th Letter. - This was hard and I used a lot of online resources including CHatGpt and STack Overflow

    function everySix(wordToBeManipulated) {
      // Splitting the string into an array using the built-in method.
      const capSix = wordToBeManipulated.split("");

      // Loop through the array and capitalize every sixth letter staring from the index after 5 and then every 6th letter thereafter.
      for (let i = 5; i < capSix.length; i += 6) {
        capSix[i] = capSix[i].toUpperCase(); //Capitalizing the 6th letter
      }
      // Convert the array back into a string using the built-in method.
      const modifiedWord = capSix.join("");

      return modifiedWord;
    }

    //Fourth Task - Find ASCII Code of each letter

    function arrayOfAscii(userAscii) {
      //Naming function and argument
      let charCode = userAscii; //Passing userInput value to a new variable charCode;

      for (
        let i = 0;
        i < charCode.length;
        i++ // Iterate through the userinput word.
      ) {
        asciiValue = charCode.charCodeAt(i) + " - " + charCode[i]; // Assigning the built-in method charCodeAt() to the userinput and then
        //it to a new variable, asciiValue.
        console.log(asciiValue); //Printing the new value to the console.
      }
    }

    console.log(replaceSecondLetter(savedUserInput));
    alert(replaceSecondLetter(savedUserInput));

    console.log(reverseWord(savedUserInput));
    alert(reverseWord(savedUserInput));

    console.log(everySix(savedUserInput));
    alert(everySix(savedUserInput));

    console.log(arrayOfAscii(savedUserInput));
    break;
  } //Break the loop once complete
  else {
    alert("Please enter a word longer than 6 letters");
  } //Return to initial prompt
}
