//Creating Errors//

let brainFried = "Deadhead";
let hoursOfSleep = "7";
let brain = brainfried; // Runtime ReferenceError: brainfried is not defined. Incorrect spelling resulting in unknown  undefined variable. Fixed = brainFried

if (brain === "Deadhead" && hoursOfSleep === 7) {
  //Logical Error. Sting and Number Datatypes don't match so the programme's not sure of the user intent even though it's not technically "wrong". Fix = "7"
  console.log(
    `You need to make sure you get at least ${hoursOfSleep} hours of sleep every night or you will become a ${brainFried}!`
  );
}
