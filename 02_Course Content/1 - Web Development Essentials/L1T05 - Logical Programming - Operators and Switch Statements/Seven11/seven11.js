let dividend = Number(prompt("Please enter a number.")) //Cast user input to Number from String datatype to allow Mathematical computations.

/*I tried using the Modulo operator in a Switch Statement but it kept throwing errors.
After some reserach this post convinced me to use an if- else/if - else set up instead. 
https://stackoverflow.com/questions/24914700/in-a-switch-statement-is-it-possible-to-use-a-modulo-operator-in-each-case */

if(dividend % 7 === 0 && dividend % 11 === 0) {console.log(`${dividend} is divisable by both 7 and 11.`)}
else if (dividend % 7 ===0) {console.log(`${dividend} is divisable by 7`)}
else if (dividend % 11 === 0){console.log(`${dividend} is divisable by 11`)}
else {console.log(`${dividend} is divisable by neither 7 nor 11`)}

/*Initially I didn't know how to set up an operator to check if a number was equally divisable
by a divisor but I found the answer and explanantion here which I understand completely now. 
https://stackoverflow.com/questions/2821006/find-if-variable-is-divisible-by-2
Once the math wwas figured out the logic wasn't too hard to apply.
*/