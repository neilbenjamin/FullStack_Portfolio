// Pseudo-Code - Assitance from MDN WebDocs and ChatGpt.

/* Create a function that accepts a string as an argument. We then need to do a comparison on the string to 
determine if the string is the same if reverses. Once we have determined hoow to do that, we need to do an 
if-statement to return the correct output back to the console.
*/

//Function First
isPalindrome = (myString) => {

    //  Force to lowercase to counter user error. We have not accounted for numerical errors.
    let forceToLowerC = myString.toLowerCase();
  
    /* The engine part of the function. This took me literally again 10 hours to comprehend.
      String datatypes don't have the .reverse() method so we need to use string method split 
      on the string which then changes the string into an array, which can then be reversed and 
      then converted back to a string. This is a massive learning courtesy of ChatGpt. 
      I'm also very grateful to see that we can tag the methods onto each other concurrently to 
      avoid having to create additional variables and passind data from one to the other unecessarily. 
      This is super valuable.*/
    let reversedStr = forceToLowerC.split("").reverse().join("");
  
    /* Added an if statement to compare the initial string with the reversed string.
    Loops/Functions/Conditional Statements are one-way mirrors that can push data out 
    which is why the return statements still link to the function and able to send the data back out. */
    if (reversedStr === forceToLowerC) {
      return true;
    } else {
      return false;
    }
  };
  
  // DO NOT EDIT BELOW THIS LINE
  let testStrings = [
    "The Quick Brown Fox Jumps Over The Lazy Dog",
    "helloworld",
    "tacocat",
    "anna",
    "racecar",
    "dad",
    "level",
    "noon",
    "rotator",
    "tenet",
    "saippuakivikauppias",
    "hyperiondev",
    "rhythms",
  ];
  
  let correctStrings = [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
  ];
  
  for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];
  
  /*variable passing the string as a parameter to the function. 
  This variable also the receives the return ouput of the function computation.*/
    let got = isPalindrome(test);
  
    if (got == correct) {
      console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
      console.log(
        `${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`
      );
    }
  }