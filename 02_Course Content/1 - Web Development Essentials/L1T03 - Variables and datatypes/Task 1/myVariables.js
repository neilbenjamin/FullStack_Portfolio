let myFirstNumber = 7;
let mySecondNumber = 9;
let myFirstString = "Hi there.";
let mySecondString = "How are you doing?"
let myBoolean = true;
let numberToBoolean = Boolean(myFirstNumber);

console.log(myFirstNumber * mySecondNumber);
console.log(`${myFirstString} ${mySecondString}`);
console.log(`The first number I have is a ${myFirstNumber} and the second number is ${mySecondNumber}.
If you add them together you get ${myFirstNumber + mySecondNumber} and if you multiply them you get
${myFirstNumber * mySecondNumber}, and the modulo of 9 and 7 is ${mySecondNumber%myFirstNumber}.
"${myFirstString} ${mySecondString}", will be the concatenated first and second string I used. 
Casting a number to a boolen will produce ${numberToBoolean} if it's not zero and in this instance the boolean is also ${myBoolean}!
`)

