//Pseudocode

//1. Pass the array into the function for evaluation.
//2. Write conditionals to match teh winning moves of the inputted grids.
//3. Print the winning outputs to the console from withing the function.

function evaluatePlay(grid) {
  //rowWin Conditional
  if (grid[0][0] === "O" && grid[0][1] === "O" && grid[0][2] === "O") {
    console.log(`RowWin Ouput\n\nO Won\nX Lost`);
    //colWin Conditional
  } else if (grid[0][1] === "X" && grid[1][1] === "X" && grid[2][1] === "X") {
    console.log(`colWin Ouput\n\nX Won\nO Lost`);
    //diagonalWin
  } else if (grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O") {
    console.log(`diagonalWin Ouput\n\nO Won\nX Lost`);
    //diagonalWinInverse
  } else if (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X") {
    console.log(`diagonalWinInverse Ouput\n\nX Won\nO Lost`);
  }
}
// Define arrays

const rowWin = [
  ["O", "O", "O"],
  ["", "", ""],
  ["", "", ""],
];
// console.log(rowWin[0][2]===rowWin[0][0])

const colWin = [
  ["", "X", ""],
  ["", "X", ""],
  ["", "X", ""],
];

const diagonalWin = [
  ["", "", "O"],
  ["", "O", ""],
  ["O", "", ""],
];

const diagonalWinInverse = [
  ["X", "", ""],
  ["", "X", ""],
  ["", "", "X"],
];

evaluatePlay(rowWin);
evaluatePlay(colWin);
evaluatePlay(diagonalWin);
evaluatePlay(diagonalWinInverse);
