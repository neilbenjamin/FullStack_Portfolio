array = []; // Empty array to store user data

for (let i = 0; i < 11; i++) { //for loop to control user input totals
  let userInput = prompt(
    `Please add some names to your guestlist for your party. Maximum of ten names`
  );
  array.push(userInput); //Pushing user input into the array
  if (userInput === array[10]) { //Outer if statement to check condition which breaks the initial for loop when user exceeds ten inputs.
    let yesNo = prompt(`
      You've exceeded the number of guests. Would you like to replace a previous entry with the one you just entered? Yes or No.
    `);
    if (yesNo === "Yes") { // inner if statement to  check on user input value. 
      poppedElement = array.pop(); // Removes the 11th element from the array and stores it in a variable named poppedElement. Courtesy of W3Schools.
      console.log(poppedElement); //Checking on  variable to make sure it worked.
      while (true) { //While loop to control user input to make sure they enter the same details as they did earlier. 
        deleteElement = prompt(
          `Choose a name you would like to remove: ${array}`
        );
        if (!array.includes(deleteElement)) { // Awesome method to check if userinput matches elements in an array, .includes(). Courtesy of ChatGpt.
          alert(
            `${deleteElement} is not one of the names you entered earlier. Please try again.`// Loops the user back if it's not 100% the same as before.
          );
        } else if (array.includes(deleteElement)) {
          break;//Once true, the loop is broken and the program can continue to run.
        }
      }
      alert(
        `Let's remove, ${deleteElement} and add your last entry, ${poppedElement} to the list`// Added this as a check to see if things were working.
      );
      indexToRemove = array.indexOf(deleteElement);// Finding the index of the previous user input and saving it to a new variable, indexToRemove.
      console.log(indexToRemove);//Checking if it worked
      array.splice(indexToRemove, 1, poppedElement);//Removing the element which the user indicated they wanted to swap and adding the 11th name on the guestlist. 
      console.log(array);//Checking to see if it worked.
      alert(`Your new guest list is: ${array}`); //New guest list.
    } else if (yesNo === "No" || yesNo !== "Yes") {//False condition for outer if statement which just prints teh user's original list.
      poppedElement = array.pop();
      alert(`Here's your original guestlist ${array}`);
    }
  }
}
