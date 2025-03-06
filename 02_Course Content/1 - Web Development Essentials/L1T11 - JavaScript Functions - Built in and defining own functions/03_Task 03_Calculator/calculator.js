/*Pseudocode. Create 3 different user prompts to obtain user data to determine the two operanders 
and which operator the user would like to use. This data needs be saved to appropriate variables for future use.
Creat 4 functions for each operator type namely +, -, * && /. Build a series of else-if statements to sort the control
of the user input. Output result. 
I really enjoyed this taks and managed to figure it all out alone without any help execpt for the !isNan() method which I  got from ChatGpt.
However, this project really cleared up the while loop and nested if statements for me. I have much better idea of how the control structures 
work with these elements now.
*/

// GLOBAL FUNCTIONS

//Addiiton Function
function addition(sum1, sum2) {
  let additionTotal = sum1 + sum2;
  return additionTotal;
}

//Subtaction Function
function subtraction(sum1, sum2) {
  let subtractionTotal = sum1 - sum2;
  return subtractionTotal;
}

//Multiplicatin Function
function multiplication(sum1, sum2) {
  let multiplicatinTotal = sum1 * sum2;
  return multiplicatinTotal;
}

//Division Function
function division(sum1, sum2) {
  let divisionTotal = sum1 / sum2;
  return divisionTotal;
}

while (true) {
  // UserPrompt1 - Operander 1.
  let userPrompt1 = Number(prompt("Choose your first number."));
  const firstNumber = userPrompt1;
  //Outer-If Control Flow
  if (!isNaN(firstNumber)) {
    // UserPrompt2 - Operander 2.
    let userPrompt2 = Number(prompt("Choose your second number."));
    const secondNumber = userPrompt2;
    //Inner-If Control Flow
    if (!isNaN(secondNumber)) {
      // UserPrompt3 - Operator Option.
      let userPrompt3 = prompt(
        "Choose one opertor + - x or / to run your programme."
      );
      const userOperator = userPrompt3;
      if (
        userPrompt3 === "+" ||
        userPrompt3 === "-" ||
        userPrompt3 === "*" ||
        userPrompt3 === "/"
      ) {
        //INJECT VARIABLES AND FUNCTIONS HERE
        if (userPrompt3 === "+") {
          alert(
            `${firstNumber} ${userOperator} ${secondNumber} = ${addition(
              firstNumber,
              secondNumber
            )}`
          );
        } else if (userPrompt3 === "-") {
          alert(
            `${firstNumber} ${userOperator} ${secondNumber} = ${subtraction(
              firstNumber,
              secondNumber
            )}`
          );
        } else if (userPrompt3 === "*") {
          alert(
            `${firstNumber} ${userOperator} ${secondNumber} = ${multiplication(
              firstNumber,
              secondNumber
            )}`
          );
        } else if (userPrompt3 === "/") {
          alert(
            `${firstNumber} ${userOperator} ${secondNumber} = ${division(
              firstNumber,
              secondNumber
            )}`
          );
        }
        break; //Break Loop - False responses below
      } else {
        alert("Please enter a valid operator + - * or / symbol only.");
      }
    } else {
      alert("Please enter a number only.");
    }
  } else {
    alert("Please enter a number only.");
  }
}
