//Number Manipulation

// Main array with stored user inputs
let numberArray = [];

//First Task Function - User Defined Function - Sum of array. Got help from ChatGpT, FreeCodeCamp and MDN Web Docs.
function arrayTotal(array) {
  // Declared Function with name of arrayTotal to accept the parameter argument of array.
  sumTotal = 0;
  for (let i = 0; i < array.length; i++) {
    // For loop to iterate through the argument "array" to add the numbers in the array together.
    sumTotal += array[i]; //Adds each index total to the new variable created, sumTotal and continues to do so on each iteration, ending up with the eventual total after all the iterations are complete.
  }
  return sumTotal.toFixed(2); //Return final sum rounded to two decimal places.
}

//Second Task Function - Built-In Method - Index of Max Number. Got help from MDN Web Docs.- Whomever designed this question is both very clever and crafty! Took me the better part fo the whole day to get this.
function arrayIndexMax(array) {
  // Declared Function with name of arrayIndexMax to accept the parameter argument of array.
  let maxNum = Math.max(...array); //This was confusing and eventually found this built-in method courtesy of the internet. I think the ... changes the array max to a number from an array..? Need clarity on this.
  let maxNumIndex = array.indexOf(maxNum); //Again, took me ages, but eventualy got it working with help from MDN.
  return maxNumIndex; // Return Max Num Index
}

//Third Task Function - Index of Min Number - Built-In Method - same process as Math.max() but just use Math.min() instead.
function arrayIndexMin(array) {
  //Declared Function with name of arrayIndexMin to accept the parameter argument of array.
  let NumMin = Math.min(...array);
  let MinNumIndex = array.indexOf(NumMin);
  return MinNumIndex; //Return Min Number Index
}

//Fourth Task - Calculate average and round off to the 2nd decimal - User Defined Function.
function arrayNumberAverage(array) {
  //Declared Function with name of arrayNumberAverage to accept the parameter argument of array.
  let sum = 0; //New variable created to help acalculate loop sum.
  for (let i = 0; i < array.length; i++) {
    //Used a for loop to iterate through the array. Still need to wrap my head around the forEach() and reduce() methods. I understand this method so I used it.
    sum += array[i] / array.length;
  }
  return sum.toFixed(2); //Used the built-in method toFixed(2) to reduce the decimal places to two.
}

//Fifth Task - Calculat Array Median - User Defined Function. I relied heavily on various sources to get this and avoid ternary operators as I don't know what they do yet (summary of if statements..?)
function arrayMedian(array) {
  //Declared Function with name of arrayMedian to accept the parameter argument of array.

  array.sort(function (a, b) {
    // Arranged the array from lowest value to highest using a built in method .sort().
    return a - b;
  }); //Got this from ChatGpt but it looks like the method has created a function withing itself
  //that compares two values to each other and sets out rules based on that outcome. Not quite ontop of this though.

  const length = array.length; //Then we need to check the length of the array using a built-in method.length
  const middleIndex = Math.floor(length / 2); //Assisting to rounding down to the next largest integer.

  if (length / 2 === 0) {
    //If statement to check if the array is equal or odd length array.
    const median = array[middleIndex - 1] + array[middleIndex] / 2; //Finding the avergae of the 2 middle numbers between ten. Not sure how this code does this though.
    return median; //Return even numbered array
  } else {
    return array[middleIndex]; //return odd numbered array.
  }
  //End of functions
}

// Add loop control number of userInputs:
for (let i = 0; i < 10; i++) {
  let userInput = parseFloat(
    prompt(`Please enter a mixture of ten whole and decimal numbers`)
  ); //Used ParseFloat to cast integers and include decimal point numbers.
  let pushToArray = numberArray.push(userInput);
}

// Console logs && Alerts

//Task_01
console.log("The Array Total is: " + arrayTotal(numberArray)); // Calling the function by it's name and passing in the main array "numberArray" as the parameter/argument.
alert("The Array Total is: " + arrayTotal(numberArray));

//Task_02
console.log(`The Maximum Number index is: ` + arrayIndexMax(numberArray));
alert(`The Maximum Number index is: ` + arrayIndexMax(numberArray));

//Task_03
console.log(`The Minimum Number index is: ` + arrayIndexMin(numberArray));
alert(`The Minimum Number index is: ` + arrayIndexMin(numberArray));

//Task_04
console.log(`The Array Average is: ` + arrayNumberAverage(numberArray));
alert(`The Array Average is: ` + arrayNumberAverage(numberArray));

//Task_05
console.log(`The Array Median is: ` + arrayMedian(numberArray));
alert(`The Array Median is: ` + arrayMedian(numberArray));
