// Code here for Compulsory Task 1

// setting variables to hold the intervalID
// and also a counter
let intervalID; //intervalID is initialised with a value of undefined.
let counter = 0;

//create the logic needed in the setInterval() function for
//incrementing the counter and outputting to the console.

//Inner closure function that is able to update and increment the external variable "counter" on each iteration. The loop is
//mananged by the build-in jS method setInterval(). The inner function is a higher order function because it both accepts an anonymous function as it's first argument. This
//is also the callback argument. //The 2nd argument, is the counter delay.
let startCounter = function () {
  intervalID = setInterval(
    //intervalID is now assigned the value of function and not redeclared, so that it can updated the variable globally.
    () => {
      console.log(counter);
      counter++;
    },
    1000
  );
};

// add the logic required to stop the counter
// using clearInterval()
//Regular functin using the built-in JS method to stop the loop.
function stopCounter() {
  clearInterval(intervalID); //Able to access the intervalID.
}

let startButton = document.getElementById("start"); //Linking the HTML id and assigning it to startButton.
let stopButton = document.getElementById("stop"); //Linking the HTML id and assigning it to stopButton.

// the event listener is missing a callback function argument
// this button should start the outputting of the counter to the console

startButton.addEventListener("click", startCounter); //Method addEventListener() with 2 arguments, one for which event to ;listen" for, in this case, the click,
//and then the callback function to be executed when that event occurs i.e. the function will be called back at that time when the click occurs and executed at that point in
//time and not when the addEventListener method is executed.

// the event listener is missing a callback function argument
// this button should the counter from outputting to the console
stopButton.addEventListener("click", stopCounter);