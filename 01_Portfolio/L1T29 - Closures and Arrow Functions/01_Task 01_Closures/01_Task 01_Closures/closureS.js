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
