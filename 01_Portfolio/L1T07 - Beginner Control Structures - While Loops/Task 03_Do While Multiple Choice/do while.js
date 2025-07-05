alert("Welcome to Multiple Choice");

do {
  // sets the loop to run until it becomes false or breaks.
  let stopLoop = false;
  let userInput = prompt(`Why is the sky blue?

  A - Sunlight breaking up as it enters the atmosphere appears blue;
  B - Space is blue;
  C - We're all just colourblind;
  D - It's a reflection of the sea.

  Please only select the correct letter.
  
  `).toLowerCase(); //template literal forcing user to lowercase to meet the if statement requirements
  if (userInput !== "a") {
    // outer if statement.
    let playAgain = prompt(
      // Inner if statement. New varaible created to assign value of userinput.
      `Incorrect. Would you like to try again ? Please enter Y or N`
    ).toUpperCase();
    if (playAgain === "Y") {
      alert`Awesome! Go again. Good luck!`;
    } else if (playAgain === "N") {
      alert(`Thanks for playing. Goodbye!`);
      break; // break at the end.
    }
  } else if (userInput === "a") {
    alert(`Well done! ${userInput.toUpperCase()} is the correct answer.`);
    stopLoop = true;
  }

  if (userInput === "a") {
    break;
  } 
} while (true); 
