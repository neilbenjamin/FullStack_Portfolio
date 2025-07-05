// Task 01
//Link the fetch function to node for use
const fetch = require("isomorphic-fetch");
//asynchronous funciton which will run alongside any other synchronous code in Javascript simultaneously.
//The async keyword is a built-in keyword which activates the asynchronous function thereafter.
async function apiFunction() {
  //Fetch function assigned to variable "item" which will store all the fetched data once retrieved.
  //However, the process is put in hold with the await keyword, which stalls the execution of the
  //program UNTIL the promises or the fetch is true, and then continues with the process and completes the code.
  //The fetch is collecting data from teh URl linked below and once complete, it will return the data
  //which has now be filtered with to call only the URL using .notation like we do with object pairs.
  let item = await fetch("https://cdn2.thecatapi.com/images/4mk.gif");
  console.log(item.url);
}
apiFunction();
