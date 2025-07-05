isPalindrome = (myString) => {

    //  Force to lowercase to counter user error. We have not accounted for numerical errors.
    let forceToLowerC = myString.toLowerCase();
    
    let reversedStr = forceToLowerC.split("").reverse().join("");
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