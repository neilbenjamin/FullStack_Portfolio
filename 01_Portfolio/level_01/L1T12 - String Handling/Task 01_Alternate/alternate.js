alternativeString = (myString) => { //Function name and argument saved as myString which holds the value of the(test)parameter passed below with the got variable. 
    // Place your code here
  
    let wordToChange = "";
    
    /*At this stage, now have one index from the testStrings array pushed into this function, namely "Hello World"
    Once the first iteration of the code has been done, the next index will be called into the fuction as per the for loop
    implimented at the bottom of the code block using the strIdx keywoard as a counter which has looped through the testStrings
    array and assined that list to the test keyword which in turn was passed as a parameter for the function*/
    
    /*Each string receieved by myString function now has it's individual characters checked for it's length using
    the standard i iterator*/
    for (let i = 0; i < myString.length; i++) {
      /*If statement using math to determine the capitalizing process. If the value of i / 2 === 0 it means the number is an even number 
      increments thereof will be too as long as it's === to 0.*/
      if (i % 2 === 0) {
        wordToChange += myString[i].toUpperCase();//Capitalize all even numbered characters and add them to the wordToChange variable.
      } else {
        wordToChange += myString[i].toLowerCase();//Lowercase all odd numbered characters and add them to the wordToChange variable.
      }
    }
    return wordToChange;// return the function to the variable declared at the top, wordToChange.
  }
  
  // DO NOT EDIT BELOW THIS LINE
  let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "clown case"
  ]
  
  let correctStrings = [
    "HeLlO WoRlD",
    "HeLlO",
    "HeLlO",
    "SoFtWaRe eNgInEeRiNg iS FuN",
    "I LiKe jAvAsCrIpT",
    "ClOwN CaSe"
  ]
  
  for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];
  
    let got = alternativeString(test);
  
    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
  }
  