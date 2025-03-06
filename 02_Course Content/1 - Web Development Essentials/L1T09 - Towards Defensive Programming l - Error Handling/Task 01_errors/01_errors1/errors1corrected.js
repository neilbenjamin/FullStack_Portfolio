// This example program is meant to demonstrate errors.

// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

console.log("Welcome to the error program"); //Added parenthesis - Syntax Error.
console.log("\n"); //Added parenthesis and removedd capital "C" from console. - Syntax Error as well as a runtime TYpeError.

let ageStr = "24"; //Removed additonal assigment operator as well as " years old" but kept it as a string datatype - Syntax error.
let age = Number(ageStr); //Added "let" variable keyword and added the JS built-in Number function to convert the variable ageSTr to a Number - Run Time Error  ReferenceError.

console.log("I'm " + age + " years old."); // Added spaces in the string for correct gramatical print out of the sentence to the console - Syntax Error.

let three = Number("3"); //Added the built in Number function to convert the string datatype to a number - runtime error - ReferrenceError
let pointFive = Number(0.5); //Assigned a decimal value to account for the 6 months to a new variable called pointFive.This is necessary in order for the math to work out - Logical Problem.
console.log(three);

let answerYears = age + three + pointFive;

console.log("The total number of years: " + answerYears); //Added parenthesis and seprated the string from the variable. This  would result in a syntax errors as well as the logic not being implimented as the variable is currently a string.
let answer = answerYears; // Added a variable to store data to be used below.

let answerMonths = answer * 12; // Added ley keyword and used new variable. Without it would have resulted in ReferrenceError as answer was not defined yet.
console.log("In 3 years and 6 months, I'll be " + answerMonths + " months old"); //Corrected the syntax error by adding Parenthesis.

//HINT, 330 months is the correct answer

//Original code below:

// console.log "Welcome to the error program";
//     Console.log "\n";

//     let ageStr == "24 years old";
//     age = Integer(ageStr)
//     console.log("I'm"+age+"years old.");
// let three = "3";

//     let answerYears = age + three;

// console.log "The total number of years:" + "answerYears";//syntax error
// answerMonths = answer*12 //VM104:1 Uncaught ReferenceError: answerMonths is not defined
// console.log "In 3 years and 6 months, I'll be " + answerMonths + " months old";

// //HINT, 330 months is the correct answer
