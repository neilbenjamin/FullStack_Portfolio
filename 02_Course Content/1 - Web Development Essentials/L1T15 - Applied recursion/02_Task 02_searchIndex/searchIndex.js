// searchIndex

//Declare function below

//Add two arguments. One is the array, and the other is an index to help us iterate over array.
//Good learning here too courtesy of the internet. One is able to specify the index as an argument
//without passing it as a parameter.
//The index has been set as 0 in the argument so as to start from the 0 index of the string inside the array.
function findString(wordToFind, index = 0) {
  //Conditional stop statement. Stop the loop when index = the length of the sampleArray and start it from index 0 of the array.
  let sampleArray = ["car", "rat", "fish"];
  if (index <= sampleArray.length) {
    //Nested conditional. It checks the current index of the array and keeps checking it until it === wordToFind whatever string it was the user passed in.
    //then it prints the output."
    if (sampleArray[index] === wordToFind) {
      return console.log(`${wordToFind} is found at Index No: ${index}`); //Output of true and end stop loop.
    } else {
      // else, continue searching and call the function again, but this time, shift the index up by 1
      //and check that index against the conditional.
      return findString(wordToFind, index + 1);
    }
    //return -1 when the the function does not find the "fish"
  } else {
    console.log(-1);
  }
}
findString("fish");
