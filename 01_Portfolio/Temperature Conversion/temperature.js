// Step1 - Prompt user to enter the metric they are using and converting from.

let userMetricInput = prompt(`In which metric is the temprature you are converting from?

C - Celsius
F - Fahrenheit
K - Kelvin

Please choose a letter.`).toUpperCase(); // .toUpperCase() Method taken from W3Schools

// Select the Metric to convert from.

switch (userMetricInput){
    case "C": userMetricInput;
    break;
    case "F": userMetricInput;
    break;
    case "K": userMetricInput;
    break;
    default: alert(`${userMetricInput} is not the correct input. Please input only the letter corresponding to the metric i.e. C for "Celsius etc..."`); 
    userMetricInput =prompt(`In which metric is the temprature you are converting from?
    C - Celsius
    F - Fahrenheit
    K - Kelvin
    
    Please choose a letter.`).toUpperCase(); 
}
console.log(userMetricInput)

// //Step 2 Prompt the user to enter a temperature they would like to convert in numbers.

let userTemp = Number(prompt("Please enter the number you would like to convert "))
if (!isNaN (userTemp)){userTemp}
else {alert(`Please enter a number only`); userTemp = Number(prompt("Please enter the number you would like to convert ")) } 
console.log(userTemp)

// the NaN check function courtesy of ChatGpT.

// Enter Metric to convert to.

let convertToMetric = prompt(`To which Temperature would you like to convert your number to?

C - Celsius
F - Fahrenheit
K - Kelvin

Please choose a letter.`).toUpperCase();

switch (convertToMetric) {
case "C": convertToMetric;
break;
case "F": convertToMetric;
break;
case "K": convertToMetric;
break;
default:  alert(`${convertToMetric} is not the correct input. Please input only the letter corresponding to the metric i.e. C for "Celsius etc..."`);
convertToMetric = prompt(`To which Temperature would you like to convert your number to?

C - Celsius
F - Fahrenheit
K - Kelvin

Please choose a letter.`).toUpperCase();
}

// Conversion Process

// UserInput Celsius and Permutations thereof:
if (userMetricInput === "C" && convertToMetric === "C"){conversionResult = userTemp; console.log(conversionResult); alert(`${userTemp} Celsius is ${conversionResult} Celsius`)}
else if (userMetricInput === "C" && convertToMetric === "F"){conversionResult = userTemp / 5 * 9 + 32; console.log(conversionResult); alert(`${userTemp} Celsius is ${conversionResult} Fahrenheit`)}
else if (userMetricInput === "C" && convertToMetric === "K"){conversionResult = userTemp + 273.15; console.log(conversionResult); alert(`${userTemp} Celsius is ${conversionResult} Kelvin`)}
// UserInput Fahrenheit and Permutations thereof:
else if (userMetricInput === "F" && convertToMetric === "F"){conversionResult = userTemp; console.log(conversionResult); alert(`${userTemp} Fahrenheit is ${conversionResult} Fahrenheit`)}
else if (userMetricInput === "F" && convertToMetric === "C"){conversionResult = (userTemp -32) * 5/9; console.log(conversionResult); alert(`${userTemp} Fahrenheit is ${conversionResult} Celsius`)}
else if (userMetricInput === "F" && convertToMetric === "K"){conversionResult = (userTemp -32) * 5/9 + 273.15; console.log(conversionResult); alert(`${userTemp} Fahrenheit is ${conversionResult} Kelvin`)}
// UserInput Kelvin and Permutations tehreof:
else if (userMetricInput === "K" && convertToMetric === "K"){conversionResult = userTemp; console.log(conversionResult); alert(`${userTemp} Kelvin is ${conversionResult} Kelvin`)}
else if (userMetricInput === "K" && convertToMetric === "C"){conversionResult = userTemp - 273.15; console.log(conversionResult); alert(`${userTemp} Kelvin is ${conversionResult} Celsius`)}
else if (userMetricInput === "K" && convertToMetric === "F"){conversionResult = (userTemp -273.15) / 5 * 9 + 32; console.log(conversionResult); alert(`${userTemp} kelvin is ${conversionResult} Fahrenheit`)}

//end
