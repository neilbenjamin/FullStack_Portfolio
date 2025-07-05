let charInput = prompt("Please enter an uppercase letter, a lowercase letter or a number.");
let numberInput = parseInt(charInput) 

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
