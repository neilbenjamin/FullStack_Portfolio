// Solution No. 1 -  As per instruction 

//Array to be mapped
const wordsArray = ["Treble", "Bass", "Piano", "Guitar", "Clarinet", "Violin", "Trombone", "Flute", "Saxophone", "Voice","Keyboard"];

//Filter function with 2 arguments. First Argumnet is the array and the 2nd is the callbackFunction.
const myFilterFunction = (array, callback) => {
    //Empty array to store final output;
    const result = [];
    //The first argument is mapped and each element of the argument (wordsArray) is
    // passed into an anonymouns function as a parameter (checkLength) where we have created a variable to store the length value of the iterated element (checkLength).
    //This value is determined by calling the element value (checklength) with the callback argument, which is the callbackFuntion
    // that will then check to see if the checkLength parameter has 6 characters. It will then save all the true instances as the words 
    //and the false as "underfined" in the value variable.
    array.map((checkLength) => {
      const value = callback(checkLength);
      //the if-statement then looks for elements that are not "undefined" and pushes those elements to the results array.
      if (value !== undefined) {
        result.push(value);
      }
    });
    return result;
  };
  
  //Anonymous function to check values when invoked.
  const callbackFunction = (checkValues) => {
    if (checkValues.length === 6) {
      return checkValues;
    }
  };

  // Calling the filter function
  
  console.log(myFilterFunction(wordsArray, callbackFunction));



