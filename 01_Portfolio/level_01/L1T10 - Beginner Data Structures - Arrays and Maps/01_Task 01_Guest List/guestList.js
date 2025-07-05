let guestList = []; // empty array ready to store user input.
let inviteOrder = [
  "first ",
  "second ",
  "third ",
  "fourth ",
  "fifth ",
  "sixth ",
  "seventh ",
  "eighth ",
  "ninth ",
  "tenth ",
];

//for loop that prompts the user a predetermined number of times.
for (let counter = 0; counter < 10; counter++) {
  /*Prompt that loops ten times and then pushes userGuestInput to the guestList by using the push() method. 
This information is then assigned to new variable addGuests which stores the userGuestInput as an integers relating 
to the array index. I also added a counter to the string to show teh user which number they're on.*/
  userGuestInput = prompt(
    "Please add the " +
      inviteOrder[counter] +
      "name of the guests you woud like to attend your dinner party. Maximum ten guests allowed."
  );
  addGuests = guestList.push(userGuestInput);
  //The new variable is then used as a condition to set max amount of users entered.
  if (addGuests === 10) {
    alert(
      `You can only enter a maximum of ten guests. Please click ok to view the guests you have invited.`
    );
  }
}

alert(`Your guest list is:
${guestList}`);
console.log(`Your guest list is:
${guestList}`);
