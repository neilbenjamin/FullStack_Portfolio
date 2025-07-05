//Takes array as argument
const displayArrayList = (groceryList) => {

  //Variable that finds first instance of the ul element in the DOM.
  const htmlList = document.querySelector("ul");
  //Loop through the length of the array;
  for (let i = 0; i < groceryList.length; i++) {
    // Variable that creates a new element of list.
    const shoppingListItem = document.createElement("li");
    //Appending a new string text to the li as well as each iteration of the array to the ul.
    shoppingListItem.innerHTML = "Buy: " + groceryList[i];
    //Takes the first two iterations and;
    if (i < 2) {
      //changes their color to magenta in inline css and ;
      shoppingListItem.style.color = "magenta";
      //Changes the string text fo clarity.
      shoppingListItem.innerHTML = "Bought: " + groceryList[i];
    }
    //Creates a new node to the ul with the shoppingListItem
    htmlList.appendChild(shoppingListItem);
  }
};

//Create grocery list array;

groceryList = [
  "Peanut Butter",
  "Strawberry Jam",
  "Cheddar Cheese",
  "Bread",
  "Milk",
];

//Invoke the function
displayArrayList(groceryList);
