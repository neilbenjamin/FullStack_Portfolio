// New map created storing key/value pairs/
let translator = new Map();
translator.set("Bicycle", "Fiets");
translator.set("Ride", "Ry");
translator.set("Chain", "Ketang");
translator.set("Seat", "Sitplek");
translator.set("Headlight", "Lig");
translator.set("Faster", "Vinniger");
translator.set("Stand", "Staan");
translator.set("Be careful", "Wees versigtig");
translator.set("Slowly", "Stadig");
translator.set("Have fun", "Geniet dit");

//While loop to assist with prompt control.
while (true) { // Loop will keep running until false or break.
  let userQuestion = prompt(`Select a word to translate to Afrikaans:
  Bicycle
  Ride
  Chain
  Seat
  Headlight
  Faster
  Stand
  Be careful
  Slowly
  Have fun`);

  if (translator.has(userQuestion)) { //Outer if, Checking userQuestion again contents of the map. If true, the value of the key will be printed.
    alert(
      `${userQuestion} in Afrikaans is: ${translator.get(`${userQuestion}`)}`// if condition
    );
//Inner if, prompting for another try.
    yesNo = prompt("Would you like to check another word? Yes/No?").toUpperCase();
  
    if (yesNo === "YES") {//Loop automatically starts again without any assistance at this point.
  
    } else if (yesNo !== "Yes") {
      alert(`Thanks for using our application. Goodbye`);//Option for user to exit the program.
      break;
    }
  } //Outer loop to check on user spelling for inital prompt
  else {
    alert(`Sorry, please check your spelling and try again.`);//Loops again until user spells it correctly.
  }
}
