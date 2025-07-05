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
