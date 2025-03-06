/*Pseudo-Code.

Objective
To examine the sentences inside the testStrings and check if any of the characters inside the variable 
stringToDissapear are present. If they are, then remove the first instance of that letter and then return that 
changed string. 

Control-Flow
TestSTrings holds the variable with the elements that need to be changed. This testString is passed through a 
for-loop and each iteration of the array is passed into the test variable. The variable stringToDisappea holds the 
letters we are using as target letters. Both these variable are then passed in as parameters into the function
disappearString and assigned to the got variable. Check the datatype for each argument inside the function to 
determine which methods to use. Once code is passed in the function and returned back to the got variable, the got vraiable 
is then passed through an if statment to check the true or false nature of the data got holds as returned from the function.

Plan of execution
1 - Check data types of the arguments. If stringm use string methods and if array, use array appropriate methods. - Checked. Both are strings. Use String Array
2 - Figure out how to check if the test string has any of the vowles in it. Find the appropriate method. 

Possible solution:
1 - Iteration options - Loop through the vowel array using a for loop. Save the output of the loop in a new variable.
compare that variable content with the testString variable and remove the first instance of the vowel variable from
the teststring variable. I need more help in really understanding the simplicity yet mind-boggling complexity behind this. 

2 - Comparison options 
3 - Easier method options which have yet to be discovered...?
*/

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
  