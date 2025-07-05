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
