let dividend = Number(prompt("Please enter a number.")) 

if(dividend % 7 === 0 && dividend % 11 === 0) {console.log(`${dividend} is divisable by both 7 and 11.`)}
else if (dividend % 7 ===0) {console.log(`${dividend} is divisable by 7`)}
else if (dividend % 11 === 0){console.log(`${dividend} is divisable by 11`)}
else {console.log(`${dividend} is divisable by neither 7 nor 11`)}
