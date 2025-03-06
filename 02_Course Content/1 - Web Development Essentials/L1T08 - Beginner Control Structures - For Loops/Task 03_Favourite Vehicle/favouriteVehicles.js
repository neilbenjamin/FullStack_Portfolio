let carsArray = ["Opel", "Toyota", "Ford", "BMW", "Mercedes"]; //Array containing the car strings in indexes 0 - 4.
const favouriteCar = "Toyota";

for (let i = 0; i < carsArray.length; i++) {
  // Set counter condition; set loop condition and incriment loop.
  // run this code according to conditions mentioned above.
  if (carsArray[i] === favouriteCar) {
    //if statement used to compare new variable inside the index.
    console.log(`${carsArray[i].toUpperCase()} IS my favourite car!`); // print this if true
  } else {
    console.log(`${carsArray[i].toUpperCase()} is not my favourite car.`); // print this if true
  }
}
//I needed help with this mainly because I forgot to add the [i] to the variable name, courtesy of W3Schools and ChatGpt.
