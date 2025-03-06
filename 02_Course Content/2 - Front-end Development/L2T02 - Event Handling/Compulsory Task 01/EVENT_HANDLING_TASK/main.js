// Create grocery list array;

//This was rather challenging. I used MDN, W#SCHOOLS and Open AI quite heaviliy on this
//Project, as well as the task notes and Logan's video which came in very handy.
const groceryList = [];

// Create an array to store the clicked items
let clickedItems = [];

const displayArrayList = (groceryList) => {
  // Variable that finds first instance of the li element in the DOM.
  const htmlList = document.querySelector("#itemList");
  // Clear duplication before each reprint
  htmlList.innerHTML = "";

  for (let i = 0; i < groceryList.length; i++) {
    // Variable that creates a new element of unordered list.
    const shoppingListItem = document.createElement("li");
    // Create span with inner html x unicode.
    const uniCodeSpan = document.createElement("span");
    // Add a class name to the span element
    uniCodeSpan.className = "close";
    // Add innerHTML as well as the grocery list i to the span element.
    uniCodeSpan.innerHTML = groceryList[i] + " \u00D7";
    // Append the span item to the list items
    shoppingListItem.dataset.index = i; // Store the array index in the li
    shoppingListItem.appendChild(uniCodeSpan);
    // Creates a new node to the ul with the shoppingListItem
    htmlList.appendChild(shoppingListItem);
  }
  // Call the clear function
  addClickToClose();
};

// Add event listener to 'itemList' to toggle li tag.

document.querySelector("#itemList").addEventListener("click", function (e) {
  // Check if the clicked element is a list item (LI)
  if (e.target.tagName === "LI") {
    // If it is, toggle the "checked" class on it
    e.target.classList.toggle("checked");

    // Update the clickedItems array with the item's text content
    if (e.target.classList.contains("checked")) {
      clickedItems.push(e.target.textContent.replace(" \u00D7", ""));
    } else {
      const itemIndex = clickedItems.indexOf(
        e.target.textContent.replace(" \u00D7", "")
      );
      if (itemIndex !== -1) {
        clickedItems.splice(itemIndex, 1);
      }
    }

    // Call the function to display clicked items
    displayClickedItems();
  }
});

// Function to display clicked items
function displayClickedItems() {
  const clickedItemsDisplay = document.querySelector("#clickedItemsDisplay");
  clickedItemsDisplay.innerHTML = ""; // Clear previous items

  const newList = document.createElement("ul"); // Create a new ul element

  for (let item of clickedItems) {
    const newItem = document.createElement("li");
    newItem.textContent = `You have ticked off ${item}`;
    newList.appendChild(newItem); // Append li elements to the ul
  }

  clickedItemsDisplay.appendChild(newList); // Append the ul
}

// DELETE ITEM IN ARRAY AND UPDATE LIST WITH NO DISPLAY
function addClickToClose() {
  const clearList = document.getElementsByClassName("close");
  for (let i = 0; i < clearList.length; i++) {
    clearList[i].addEventListener("click", function () {
      this.parentElement.style.display = "none"; // This will hide the li when the span is clicked
      // Remove item from the array
      let index = parseInt(this.parentElement.dataset.index); // Get the array index from the li's data attribute
      if (index > -1) {
        groceryList.splice(index, 1);
        // Call the function to display clicked items
        displayClickedItems();
      }
    });
  }
}

// Invoke the function
displayArrayList(groceryList);

// DELETE ITEM IN ARRAY AND UPDATE LIST WITH NO DISPLAY
function addClickToClose() {
  const clearList = document.getElementsByClassName("close");
  for (let i = 0; i < clearList.length; i++) {
    clearList[i].addEventListener("click", function () {
      this.parentElement.style.display = "none"; // This will hide the li when the span is clicked
      // Remove item from the array
      let index = parseInt(this.parentElement.dataset.index); // Get the array index from the li's data attribute
      if (index > -1) {
        groceryList.splice(index, 1);
        // Call the function to display clicked items
        displayClickedItems();
      }
    });
  }
}

// UPDATE GROCERY LIST THROUGH FORM
function updateList() {
  // Get DOM element by ID and assign input value to variable.
  let inputValue = document.getElementById("input").value;
  // Check if input field is empty.
  if (inputValue == "") {
    alert("Please enter an item. Press x to remove it and click next to the item to mark it off.");
  } else {
    // Push new value to array.
    groceryList.push(inputValue);
    // Clear the input field.
    document.getElementById("input").value = "";
    console.log(groceryList);
    displayArrayList(groceryList);
  }
}

// Add keyup event listener to input ID
document.getElementById("input").addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault(); // prevent the default action (if any)
    // Trigger the btn by calling the btn's id and attaching the .click() method to it.
    document.getElementById("addBtn").click();
  }
});
