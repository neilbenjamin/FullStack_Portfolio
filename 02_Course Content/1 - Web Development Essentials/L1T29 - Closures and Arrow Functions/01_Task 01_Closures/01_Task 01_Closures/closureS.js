// Pseudocode
// Create a function loop that iterates a total of ten times and ten pushes that incriment (i) to the inner function
// of an anonymous loop so the calculation can take place.

// Anonymous function declared and assigned to the name add
// The outer function has an empty variable container which will accept values later in time;
// This outer function then calls an anonymous function with the argument of i (loop incriment) and passes whatever that
// value is at that increment to the inner function for calculation, which is then added and returned to the loopTotal container
// which is updated on each increment.

const add = () => {
  let loopTotal = 0;
  return (i) => {
    loopTotal = i * 5;
    return loopTotal;
  };
};

const loopMultiplication = add();

// The for loop is created below the function to allow the add variable to be assigned to memory for access.
// It loops from 0 to 9 and on each iteration calls and runs the add function

for (let i = 0; i <= 9; i++) {
  console.log(`${i} + 5 = ${loopMultiplication(i)} `);
}
