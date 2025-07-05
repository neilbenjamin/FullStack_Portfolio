class Email {
  //Class name
  constructor(hasBeenRead = false, emailContents, isSpam = false, fromAddress) {
    //Class constructor with attributes and instatiating the attributes for later use with objects.
    //hasBeenRead and isSpam is initialised as false here in the constructor. Thanks Gwinyai for this tip.
    this.hasBeenRead = hasBeenRead;
    this.emailContents = emailContents;
    this.isSpam = isSpam;
    this.fromAddress = fromAddress;
  }
  //Method 1
  markAsRead() {
    //Boolean changer to be used later
    {
      this.hasBeenRead = true;
    }
  }
  //Method 2
  markAsSpam() {
    //Boolean changer to be used later
    this.isSpam = true;
  }
} //End of class

//Main Inbox array
let inbox = [];

//list of emails pushed into the array with the firstMailFunction
addEmail("I'm just checking if this is working", "neil@check.co.za");
addEmail("Hi, please can you bring pizza?", "neil@hungry.com");
addEmail("This project is taking way too much time", "neil@behind.co.za");
addEmail("Is it just me or have we missed a week?", "neil@coupedup.com");
addEmail("Thankfully the rain has stopped", "neil@nocycling.com");
addEmail(
  "Yes, it's stopped, but the wind has returned.",
  "neil@windycity.co.za"
);

// firstMainFunction - getEmail - Pushes the above emails into the inbox array.
function addEmail(emailContents, fromAddress) {
  //arguments take in mail contents and addresses
  const newEmail = new Email(false, emailContents, false, fromAddress); //New Class Instance(Onject) which uses the attribute quaities as set out in the class Email.
  inbox.push(newEmail); //Array method to push the enew instance of the class into the Array.
}

// Modified 1st function - Send email
function addNewEmail(emailContents, fromAddress) {
  //Accepts user prompts as arguments and passes these arguments into the function.
  emailContents = prompt("Add your message.");
  fromAddress = prompt("Add your address.");
  const newUserMail = new Email(false, emailContents, false, fromAddress); //Creates a new instance of the class so the user input matches the class rules.
  inbox.push(newUserMail); //Pushes the user input to the inbox array.
}

// 2nd Method - GetCount - Function to check amount of emails in the inbox array.
function getCount(inboxArray) {
  //When called, the function accepts the main inbox array as an argument for processing.
  let numOfMessages = inboxArray.length; //New variable to count the elenents in the array.
  alert(`You have ${numOfMessages} messages in your inbox`); //Outputs the total.
  console.log(`The number of messages in the inbox are ${numOfMessages}`);
  for (let i = 0; i < inboxArray.length; i++) {
    //Itirate through the array
    let numOfContent = inboxArray[i]; //New variable to store the results of the iteration.
    console.table(`Message ${i}: ${numOfContent.emailContents}`); //Outputs the incremented index number as well as each element that has been called with the dot
    //notation method for emailContents.
  }
}

//Modified 2nd method to check unread mails
function getUnreadMessages(inboxArray) {
  //When called, the function accepts the main inbox array as an argument for processing.
  let unreadMessages = inboxArray.filter((message) => !message.hasBeenRead); //New variable which stores the results of the array mthod filter passed onto the inbox array.
  //This checks every element (message) inside the array's hasBeenRead property. !message.hasBeenRead negates the value of the element's hasBeenRead's property and returs the opposite
  //thereof i.e. if the property is true, it will return false and vice versa. Logic courtesy of chatGpt and MDN Array Functions.
  let numOfMessages = unreadMessages.length; //New varaible to store the number of unread messages.
  alert(`You have ${numOfMessages} unread messages in your inbox`); //OUtputs the number of unread messages.
  console.log(`You have ${numOfMessages} unread messages in your inbox`);
  for (let i = 0; i < unreadMessages.length; i++) {
    //Iterates the unreadmessages and outputs them to the console.
    let numOfContent = unreadMessages[i];
    console.table(`Message: ${numOfContent.emailContents}`);
  }
}

//Modified 2nd method to check spam mails - The same process as above but cheking for isPam proprties instead.
function getSpamMessages(inboxArray) {
  let spamMessages = inboxArray.filter((message) => message.isSpam);
  let numOfMessages = spamMessages.length;
  alert(`You have ${numOfMessages} spam messages in your inbox`);
  console.log(`You have ${numOfMessages} spam messages in your inbox`);
  for (let i = 0; i < spamMessages.length; i++) {
    let spamMessage = spamMessages[i];
    console.log(`Message: ${spamMessage.emailContents}`);
  }
}

// 3rd Function - Get email - returns contents of email. - Mark as read
function getEmail(inboxArray) {
  //When called, the function accepts the main inbox array as an argument for processing.
  let userFirstPrompt = prompt(
    "Please select the number index of the mail you'd like to read."
  ); //Prompts the user for input
  if (isNaN(userFirstPrompt)) {
    //Checks is the inputs is a number.
    alert("This is not a number. Please try again."); //If not, try again.
  }
  const index = parseInt(userFirstPrompt); //New variable casting the userinput to an integer datatype.
  if (index >= 0 && index < inboxArray.length) {
    //Love this logic. Checks the length of the array from 0 to however long it gets.
    let message = inboxArray[index]; //Creates a new variable to save the output of userinput on the array.
    message.markAsRead(); //Passess the class method hasBeenRead boolean to the message.
    alert(
      `Message: ${message.emailContents} from ${message.fromAddress} has been marked as read.`
    ); //Outputs the messages which are affected.
    console.log(`Message: ${message.emailContents}`);
    console.table(`From Sender: ${message.fromAddress}`);
  } else {
    alert("Invalid index. Please try again.");
  }
}
//Modified 3rd Function - Get email - returns contents of email. - Mark as spam - This uses the same logic as above but uses teh isSpam method instead.
function getSpamEmail(inboxArray) {
  let userFirstPrompt = prompt("Please enter a number index to mark as spam");
  if (isNaN(userFirstPrompt)) {
    alert("This is not a number. Please try again.");
  }
  const index = parseInt(userFirstPrompt);
  if (index >= 0 && index < inboxArray.length) {
    let message = inboxArray[index];
    message.markAsSpam();
    alert(
      `Message: ${message.emailContents} From Sender: ${message.fromAddress}, has been marked as spam.`
    );
    console.log(`Message: ${message.emailContents}`);
    console.table(`From Sender: ${message.fromAddress}`);
  } else {
    alert("Invalid index. Please try again.");
  }
}

//Modified 3rd function - Delete email. - This uses the same logic as above but inpliments the .splice() array method on line 130.
function deleteEmail(inboxArray) {
  let userFirstPrompt = prompt(
    "Please enter a number index to delete the email"
  );
  if (isNaN(userFirstPrompt)) {
    alert("This is not a number. Please try again.");
  }
  const index = parseInt(userFirstPrompt);
  if (index >= 0 && index < inboxArray.length) {
    let deletedMessage = inboxArray.splice(index, 1)[0]; //Removes 1 element from the inbox at the specified index i.e. userinput 0 will remove index 0. It then saves that
    //deleted element in the new variable deltedMessage and index 0 because there is only 1 index in the new array.
    alert(
      `Message: ${deletedMessage.emailContents} From Sender: ${deletedMessage.fromAddress}, has been deleted.`
    ); //Outputs the results.
    console.log(
      `Message: ${deletedMessage.emailContents} From Sender: ${deletedMessage.fromAddress}, has been deleted.`
    );
  } else {
    alert("Invalid index. Please try again.");
  }
}

// USERCHOICES

userChoice = "";
while (userChoice != "7") {
  userChoice = prompt(
    "What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?"
  );
  //read email
  if (userChoice == "1") {
    //	Place your logic here
    getCount(inbox); //Calls get count fuction to display contents of inbox
    getEmail(inbox); //Get's users email as chosen and mark's it as read.
  } else if (userChoice == "2") {
    //	Place your logic here
    getSpamEmail(inbox); //Calls the get spam function and marks the user's choice as spam.
  } else if (userChoice == "3") {
    //	Place your logic here
    addNewEmail(); //Calls the addNewEmail function and pushes user input to the inbox array.
  } else if (userChoice == "4") {
    //	Place your logic here
    deleteEmail(inbox); //Calls the delete function and deletes user's input.
  } else if (userChoice == "5") {
    //	Place your logic here
    getSpamMessages(inbox); //Calls the getSpamMessages fuction and retrieves the messages marked as spam.
  } else if (userChoice == "6") {
    //	Place your logic here
    getUnreadMessages(inbox); //Calls the getUnReadMessages and retrieves the unread messages.
  } else if (userChoice == "7") {
    //exit loop
    console.log("Goodbye");
  } else {
    console.log("Oops - incorrect input");
  }
}
//end
