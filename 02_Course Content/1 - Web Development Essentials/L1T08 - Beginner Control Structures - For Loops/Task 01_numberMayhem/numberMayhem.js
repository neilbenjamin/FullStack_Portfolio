//Loop 1
for (let i = 20; i >= 0; i--) {
  console.log(i);
}
console.log(""); // create a line of space.

//Loop 2
// I found the Modulo solution online.
for (let j = 1; j <= 20; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}
console.log(""); // create a line of space.

//Loop 3
//I used the example.js for assistance with this one.
let star = "";
for (let x = 1; x <= 5; x++) {
  console.log((star += "*"));
}
