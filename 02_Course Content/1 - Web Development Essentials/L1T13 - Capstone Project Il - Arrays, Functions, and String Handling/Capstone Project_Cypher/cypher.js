//Dear Kyle - Apologies. I was using 1 to test the wrap around function and forgot to change it back to 15. It has been corrected. Thank you for your patience.


//Pseudo Code.

// 1. Create a function that takes in a string.
// 2. Determine the Ascii value of the string using appropriate string method.
// 3. Set up a loop to loop through the inputted string.
// 3. Convert the text to the base ascii values
// 4. Find the upper and lowercase parameter numbers in the Ascii table.
// 5. Shift the values of teh original values by 15.
/* 6. Set rules for when the numbers exceed the parameter limits. - This was the real learning for me 
in this task. I have been at it since 5 am and very happy I get the concept now.*/
// 7. Apply If-Statements to both Upper and Lowercase parameters

//CODE BELOW

//FUNCTION

//Function with argument "wordToEncrypt" to encrypt.
cypherFunction = (wordToEncrypt) => {
  //eventual variable to save the output of the for loop and if statements below.
  let completedEncryption = " ";

  /*Create a for loop to loop through the unencrypted word. It loops the number of times of the length of the string's characters.
In this case wordToEncrypt, which is what ever is entered at the initial string variable, unencrypytedWord.*/
  for (let i = 0; i < wordToEncrypt.length; i++) {
    //Each one of the loop's iterations are saved to the variable charLoop.
    let charLoop = wordToEncrypt[i];
    //This line finds the associated Ascii value of the string starting at the String's 0 index on each iteration, hence the (0)
    //using the CharCodeAt() string method.
    let originalAsciiValue = charLoop.charCodeAt(0);
    //Test Ouput - Success. Outputs the Ascii value of the string
    // completedEncryption += originalAsciiValue

    //If-Statement to set Asciii parameters.

    //CAPITAL LETTER PARAMETERS

    //Inner if-statement.
    if (originalAsciiValue >= 65 && originalAsciiValue <= 90) {
      //Checks for Capital letter Parameters between Ascii values 65 & 90
      let shiftedValues =
        originalAsciiValue +
        15; /*Sets the value of how much to shift value by and assigns it to shiftedValues.
  It will return the value of IF it remains within the parameters set, else...*/

      if (shiftedValues > 90) {
        //Cont...ShiftedValues is now new new ascii association shifted by 15 places. If this value exceeds the parameters we
        //set above, then:
        shiftedValues = shiftedValues - 91 + 65;
      }
      /* It takes the value and minuses 91 from it to bring it back to a zero base index. The remainder
        will be added to 0 and then to 65 to put it back in it's parameter (65 - 90) and in this manner, we can control the numbers wrapping
        around back to 0 and then a certain point. So if we shifted initial value by 1 and added Z, it would exceed the limited by 1 count, 
        making it 91. We then minus 91 which gives us 0. We then add 65 to get the original base point for the start index for the 
        capitalized letters and arrive at the new result which is 65, and converted, gives us A. So we entered Z and receive A as
        a returned answer. The shifted value stays in the wrap. I'm so very happy I understand how this works now. It's modulo but 
        easier to grasp for non-math boffins*/

      /*String method to convert ascii back to text. Interesting Syntax. A new variable is created to store the
        converted result and then passed into the completeEncryption variable waiting for input outside the for-loop
        above.*/

      let asciiToChar = String.fromCharCode(shiftedValues);
      completedEncryption += asciiToChar;
    }

    //If-Else Statement
    /*LOWERCASE LETTER PARAMETERS - The exact same logic applies to this statement as above, except the
      parameters for lowers-case have changed*/
    else if (originalAsciiValue >= 97 && originalAsciiValue <= 122) {
      let shiftedValues = originalAsciiValue + 15;

      if (shiftedValues > 122) {
        shiftedValues = shiftedValues - 123 + 97;
      }

      let asciiToChar = String.fromCharCode(shiftedValues);
      completedEncryption += asciiToChar;
    }
    //else statement which returns any characters as they are which are not specified in the parameters above.
    else {
      completedEncryption += charLoop;
    }
  }
  /*Returns the variable completedEncryption holding the computation from the for-loop and if-statements out 
    back through the function*/
  return completedEncryption;
};

//Create string to push to function for encryption
let unencryptedWord = "Abe cat dog";
/*creat a variable to store the data from the function when it is returned as well as allowing to pass the 
unencrypted parameter to the function for processing.*/
let encryptedWord = cypherFunction(unencryptedWord);

//Eventual ouput from the variable encryptedWord
console.log(encryptedWord);
