// Task 01 - Affirmations
//I tried so many methods but kept coming up with the CORS error. I have now 
//assumed that this is meant to be broken and the aim of this assignment is to
//print teh resulting error message.

//Array to store fetched items
let items = [];
//Fetch function declared assigned to a const variable, fetchPromise
const fetchPromise = fetch("https://www.affirmations.dev/");
//Invoking the fetch function
fetchPromise
  //
  //.then() method with an anonymous callback function that uses the built in javascript json parsing method to
  //convert the json string to a javascript object, will execute if the promise is met.
  .then((response) => response.json())
  //Additionally, the chained .then() then another callback function will execute if the promise is
  //fullfilled and assign the result value to the variable items for use by the console.log()
  //below.
  .then((result) => {
    items = result;
    console.log(items);
    //I tried using the , (error) as instructed in the manual but it kept throwing errors
    //and after some reserach this seemed like the most used practice, to impliment a catch
    //method instead. This will run if the above code doesn't execute.
  })
  .catch((error) => {
    console.log("Could not complete the fetch. Error:", error);
  });
