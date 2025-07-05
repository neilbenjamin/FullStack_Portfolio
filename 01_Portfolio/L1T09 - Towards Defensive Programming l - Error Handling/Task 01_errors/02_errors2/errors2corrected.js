let animal = "Lion"; // Fixed //runtime error ReferenceError. Lion is not defined. Needs to be a string.
let animalType = "cub";
let numberOfTeeth = 16;
let numberOfLegs = Number("4");
/* Fixed potential runtime error ReferenceError later on when the if statement 
is referencing a Number. Cast the String to a Number*/

let fullSpec = `This is a ${animalType}. It is a ${animal} and it has ${numberOfTeeth} teeth`;
/*Added backticks to enable template literal quotes for variables and 
stop them from being strings. Also corrected the variable typo's and 
re-ordered them to make sense of the output sentence. Otherwise this error also throws": 
runtime error ReferenceError - animal_type is not defined && ReferenceError: number_of_teeth is not defined.*/

if (numberOfLegs === 4) {
  console.log(fullSpec);
}
/* Added parenthesis to the console.log to correc the syntax error. Corrected the assigmnet (=) to an equal (===) function 
and correct the number from 3 to 4 t match the NumberOfLegs Variable. I also corrected the typo for full_spec.*/
