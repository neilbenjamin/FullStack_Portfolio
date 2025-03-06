let charInput = prompt("Please enter an uppercase letter, a lowercase letter or a number.");
let numberInput = parseInt(charInput) 
/* I got the solution on line 2 from ChatGPT but it still confuses me. My understanding
is that this method checks the user input and pushes it to the new variable "numberInput
only if it's an integer. All direct inputs from the prompt input returned as a string datatype when
check with typeof and even the Number.isInteger() method did not covert or change the identity of 
of the data type from a string to an integer. This was the only one that worked for me.
Pretty sure I missed something here. This is pretty confusing */

/*The if/else-if/else code below is too ong and cumbersome. I spent almost the whole day 
looking for a solution and almost got it right but, the specal characters kept identifying 
as uppercase letters so this solution was at teh end of teh day the only one that worked as per the brief,
even though I'm sure it's not what you wanted. I did put my original code at the bottom,
commented out*/

if (Number.isInteger(numberInput)){console.log(`${numberInput} is an integer.`)}
else if (charInput == "a" || charInput == "b" || charInput =="c" || charInput =="d"
|| charInput == "e" || charInput == "f" || charInput =="g" || charInput =="h" 
|| charInput == "i" || charInput == "j" || charInput =="k" || charInput =="l"
|| charInput == "m" || charInput == "n" || charInput =="o" || charInput =="p" 
|| charInput == "q" || charInput == "r" || charInput =="s" || charInput =="t"
|| charInput == "u" || charInput == "v" || charInput =="w" || charInput =="x"  
|| charInput == "y" || charInput =="z" ) 
{console.log(`${charInput} is a lowercase letter`)}
else if (charInput == "A" || charInput == "B" || charInput =="C" || charInput =="D"
|| charInput == "E" || charInput == "F" || charInput =="G" || charInput =="H" 
|| charInput == "I" || charInput == "J" || charInput =="K" || charInput =="L"
|| charInput == "M" || charInput == "N" || charInput =="O" || charInput =="P" 
|| charInput == "Q" || charInput == "R" || charInput =="S" || charInput =="T"
|| charInput == "U" || charInput == "V" || charInput =="W" || charInput =="X"  
|| charInput == "Y" || charInput =="Z") 
{console.log(`${charInput} is an uppercase letter`)}
else (console.log(`${charInput} is not a letter or a number.`))

// ORIGINAL CODE
// if (Number.isInteger(numberInput)){console.log(`${numberInput} is an integer.`)}
// else if(charInput.toUpperCase() == charInput)
// {console.log(`${charInput} is a capital letter.`)}
// else if (charInput.toLowerCase() == charInput)
// {console.log(`${charInput} is a lowercase letter`)}
// else if (charInput !== charInput.toUpperCase || charInput !== charInput.toLowerCase){console.log(`${charInput} is not a letter.`)}

