while (true) {
  try {
    //Vital first branch of conditional options.
    let userFirstPrompt = prompt(
      "Would you like to calculate distance, time, or speed?"
    ).toLowerCase(); //userError handling to add - Forced user entry to lowercase to negate incorrect capitalisation.
    if (userFirstPrompt === "") {
      //Vital branching here. It took me long time to realize to use the a blank string instead of specifying a specific option, thus allowing the user the options to choose.
      alert("You have not entered anything. Please try again.");
      throw new Error("User entered nothing for first prompt."); //Try-Catch Error Message and return loop.

      // Distance calculation
    } else if (userFirstPrompt === "distance") {
      //Time variable
      let userTimePrompt = prompt(
        "Please enter the time in HHMM format e.g., 258 = 2 hours 58 minutes"
      ); //Prompts user for time, and suggests preferred format.
      if (isNaN(userTimePrompt)) {
        //Checks if user input is a number, if not, return loop and log try/catch error.
        alert("Please enter a numeric value for time.");
        throw new Error("User entered incorrect time format."); //errorlogged.
      } else if (userTimePrompt === "") {
        //if blank input, retunr loop and log try/catch error
        alert("You have not entered anything for time. Please try again.");
        throw new Error("User entered nothing for time."); // try/catch error logged. The throw keyword acts like continue, returning the loop.
      } //Math.round() method courtesy of freecodecamp and ChatGPT.
      let hours = Math.floor(userTimePrompt / 100); //Uses the Math.round method to divide the user input by 100 and round it to the nearest whole number to get the hour portion.
      let minutes = userTimePrompt % 100; //Divides the remainder by 100 to get the seconds.
      //Time Total
      let time = hours + minutes / 60; //Divides the seconds to the fraction portion and then adds it back to the hour to get the time in hours.Assign user input to time variable.

      //Speed Variable
      let userSpeedPrompt = prompt(
        "Please enter your speed in kilometers per hour."
      );
      if (isNaN(userSpeedPrompt) || userSpeedPrompt === "") {
        //Checks to see if user input is a number.
        alert("Please enter a numeric value for speed."); //Return alert
        throw new Error("User entered incorrect speed format."); //Logs try/catch error.
      }
      let speed = parseFloat(userSpeedPrompt); //Use the parseFloat() string method to account for decimal points. Assign userinput to speed variable.
      //Distance Result
      let distance = time * speed; //Final Output
      alert("Your distance total is " + distance.toFixed(2)); //I used the toFixed(2) to cut off the trailing decimal points and only include 2.

      // Time calculation
    } else if (userFirstPrompt === "time") {
      //Distance variable
      let userDistancePrompt = prompt("Please enter your distance");
      if (isNaN(userDistancePrompt)) {
        alert("Please enter a numeric value for your distance");
        throw new Error("User entered incorrect data for distance");
      } else if (userDistancePrompt === "") {
        alert("You have not entered anything for distance. Please try again.");
        throw new Error("User entered nothing for distance."); //false conditionals returning both try/catch errors & user alerts as well as returning the loop.
      }
      let distance = parseFloat(userDistancePrompt); //Assigning userinput to distance. Once again, using the parseFloat() method to account for decimal points.
      //Speed Variable
      let userSpeedPrompt = prompt(
        "Please enter your speed in kilometers per hour."
      );
      if (isNaN(userSpeedPrompt) || userSpeedPrompt === "") {
        //Checks to see if user input is a number.
        alert("Please enter a numeric value for speed.");
        throw new Error("User entered incorrect speed format.");
      } //false conditionals returning both try/catch errors & user alerts as well as returning the loop.
      let speed = parseFloat(userSpeedPrompt); //Assigning userinput to speed variable

      //Time Result
      let time = distance / speed;
      alert("Your time  is " + time.toFixed(2) + " hours.");

      //Speed Calculation
    } else if (userFirstPrompt === "speed") {
      //Distance Variable
      let userDistancePrompt = prompt("Please enter your distance");
      if (isNaN(userDistancePrompt)) {
        //Checks to see if user input is a number.
        alert("Please enter a numeric value for your distance");
        throw new Error("User entered incorrect data for distance");
      } else if (userDistancePrompt === "") {
        alert("You have not entered anything for distance. Please try again.");
        throw new Error("User entered nothing for distance."); //false conditionals returning both try/catch errors & user alerts as well as returning the loop.
      }
      let distance = parseFloat(userDistancePrompt); // Assigns userinput to distance
      //Time Variable
      let userTimePrompt = prompt(
        "Please enter the time in HHMM format (e.g., 258 = 2 hours 58 minutes)"
      );
      if (isNaN(userTimePrompt)) {
        //Checks to see if user input is a number.
        alert("Please enter a numeric value for time.");
        throw new Error("User entered incorrect time format.");
      } else if (userTimePrompt === "") {
        alert("You have not entered anything for time. Please try again.");
        throw new Error("User entered nothing for time."); //false conditionals returning both try/catch errors & user alerts as well as returning the loop.
      }
      let hours = Math.floor(userTimePrompt / 100);
      let minutes = userTimePrompt % 100;
      let time = hours + minutes / 60;
      //Speed result
      let speed = distance / time;
      alert("Your speed is " + speed.toFixed(2));
    } else {
      alert("You entered incorrectly. Please check your entry and try again.");
      throw new Error("User entered incorrect option.");
    }

    break; //Exit while loop.
  } catch (error) {
    //Catch Block to handle errors.
    console.log(error + " " + error.id + " " + error.name); //Logging errorrs.
  }
}
//End
