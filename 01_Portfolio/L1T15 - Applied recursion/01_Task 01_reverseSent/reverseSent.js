//Reverse Semtence

function reverseSent(sentence, index) {

  // 2 arguments accepted into the function, namely a string(sentence) and a number (index),
  //the length of string which was determined at the beginning by passing the .length()message 
  //to the string and minusing 1 to ensure we point to 0 and not 1 when we are calculating the output.
  
  if (index < 0) {//Conditional statement that sets the break point. Once the index reaches 0, 
    //the recursive process stops and returns the string with the ouput of the current recursive loop..
   return ""
  } 
  else {//otherwise, if the condiions above are not met, then...
  
    return sentence[index] + reverseSent(sentence, index - 1) ; //take the current index of the sentence and 
    //run the recursive loop again, but this time shifting the character back another spot, until it reaches 0.
  }
}
let sampleSentence = "Testing this recursive function."
console.log(reverseSent(sampleSentence, sampleSentence.length -1));