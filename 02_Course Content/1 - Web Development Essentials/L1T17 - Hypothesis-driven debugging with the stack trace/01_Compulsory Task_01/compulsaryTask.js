let printValuesOf = (jsObject, keys) => {
  keys = keys.split(","); //Fixed Input . Can also use the spread operator here "..."
  //or just shift the seperator " ," to avoid having to adding the trim method. This took me some time to
  //figure out but eventually when I logged keys to console I saw I was only getting Lisa and then I could
  //continue to figire it out.
  // console.log(keys) - Checking input into function.
  for (let i = 0; i < keys.length; i++) {
    //Looping through the keys array.
    let key = keys[i].trim(); //Removed white space and assign the loop value to key variable.
    //console.log(key)//Check if removed or not
    console.log(jsObject[key]); //Calling the object's key (which is iterated) in it's current value with bracket notation and then
    //printing the ouput to the console.
  }
};

let simpsonsCatchphrases = {
  lisa: "BAAAAAART!",
  bart: "Eat My Shorts!",
  marge: "Mmm~mmmmm",
  homer: "d'oh!", //Added double quotation marks for opening and closing syntax.
  maggie: "(Pacifier Suck)",
};

printValuesOf(simpsonsCatchphrases, "lisa, bart, homer");
//End
