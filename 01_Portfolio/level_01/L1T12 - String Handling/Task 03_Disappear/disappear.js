disappearString = (myString, toErase) => {
    //re-assigned arguments
  
    let testString = myString;
    let vowelString = toErase;
  
    //For loop to seperate each character in the vowelString
    for (let vowelIndex = 0; vowelIndex < vowelString.length; vowelIndex++) {
      let vowels = vowelString[vowelIndex]; //assigning the output from the loop to a new variable to use for comparison. 
      testString = testString.replace(vowels, ""); //assigning the string to be manipulated to itself BUT with an attached method that
      //replaces the vowels as indicated in the vowels variable with nothing " "" ".
    }
    return testString; //return this function back to variable /got/.
  };
  
  // DO NOT EDIT BELOW THIS LINE
  let testStrings = [
    "the quick brown fox jumps over the lazy dog",
    "hello world",
    "software engineering is fun",
    "i like javascript",
    "clown case",
    "rhythms",
  ];
  
  let stringToDisappear = "aeiou";
  
  let correctStrings = [
    "th qck brwn fox jumps over the lzy dog",
    "hll world",
    "sftwr engneering is fn",
    " lik jvascript",
    "clwn cs",
    "rhythms",
  ];
  
  for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];
  
    let got = disappearString(test, stringToDisappear);
  
    if (got == correct) {
      console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
      console.log(
        `${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`
      );
    }
  }
  