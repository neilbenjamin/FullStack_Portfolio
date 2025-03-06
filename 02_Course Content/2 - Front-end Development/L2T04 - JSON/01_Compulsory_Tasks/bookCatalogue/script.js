//Array to store user inputs
let bookDataArray = [];
//Check what state the editing mode is in. By default the edit mode is set to false. Courtesy of OPenAI.
let editMode = false;

//Object and onstructor to create instances of objects.
class bookDataClass {
  constructor(firstName, lastName, title) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  }
}

// Function to update select options
function updateCatalogueDisplay() {
  const arrayList = document.getElementById("arrayList");
  arrayList.innerHTML = ""; // Clear existing items

  //Itirate through the array.
  for (let i = 0; i < bookDataArray.length; i++) {
    const bookData = bookDataArray[i];

    // Create list item
    const listItem = document.createElement("li");
    //Create list content
    listItem.textContent = `${bookData.title} by ${bookData.firstName} ${bookData.lastName}`;

    // Create a container for buttons
    const buttonsContainer = document.createElement("div");

    // Create edit button get element by id.
    const editButton = document.createElement("button");
    //Btn Text
    editButton.textContent = "Edit";
    //DOM Event including Bootstrap. Pretty cool.
    editButton.classList.add("btn", "btn-warning", "warning-btn"); // Add Bootstrap button classes
    editButton.addEventListener("click", () => editBook(i)); // Call edit function

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-info", "info-btn"); // Add Bootstrap button classes
    deleteButton.addEventListener("click", () => deleteBook(i)); // Call delete function

    // Append buttons to buttons container
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);

    // Append buttons container to list item
    listItem.appendChild(buttonsContainer);

    // Append list item to list
    arrayList.appendChild(listItem);
  }
}

// Edit a book. Solution courtesy of Open AI.
function editBook(index) {
  const bookData = bookDataArray[index];
  document.getElementById("fName").value = bookData.firstName;
  document.getElementById("lName").value = bookData.lastName;
  document.getElementById("bookTitle").value = bookData.title;

  // Set edit mode to true
  editMode = true;
  document.getElementById("AddDataBtn").textContent = "Update"; // Change button text

  // Remove the book being edited
  bookDataArray.splice(index, 1);
  updateCatalogueDisplay();
  sessionStorage.setItem("bookData", JSON.stringify(bookDataArray));
}

// Delete a book
function deleteBook(index) {
  const confirmDelete = confirm("Are you sure you want to delete this book?");
  if (confirmDelete) {
    //This also removed the element from session storage if true using the splice array method. Thanks Open AI for this solution.
    bookDataArray.splice(index, 1);
    updateCatalogueDisplay();
    sessionStorage.setItem("bookData", JSON.stringify(bookDataArray));
  }
}

let addBookDetails = () => {
  if (editMode) {
    // If in edit mode, update the book instead. New instance of the bookDataClass
    //initiated and pushed to the bookDataArray.
    const updatedBookData = new bookDataClass(
      document.getElementById("fName").value,
      document.getElementById("lName").value,
      document.getElementById("bookTitle").value
    );
    bookDataArray.push(updatedBookData);

    // Reset edit mode and button text
    editMode = false;
    document.getElementById("AddDataBtn").textContent = "Create Catalogue";

    // Clear input fields
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("bookTitle").value = "";
  } else {
    // If in create mode, add a new book. Add new instance of a book object and push
    //to the bookDataArray.
    const newBookData = new bookDataClass(
      document.getElementById("fName").value,
      document.getElementById("lName").value,
      document.getElementById("bookTitle").value
    );
    bookDataArray.push(newBookData);
  }
  //Test
  console.log(bookDataArray);

  // Update the displayed list with the new data
  updateCatalogueDisplay();

  // Store the updated array in sessionStorage
  sessionStorage.setItem("bookData", JSON.stringify(bookDataArray));
};

//Check if the DOM is loaded. When it is, check if there is data in session stoarge.
//If there is, parse it by using JSON from a string to a JMS object, and add it
//to the display fnc.
document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the array from session storage and parse it
  const storedData = sessionStorage.getItem("bookData");
  if (storedData) {
    bookDataArray = JSON.parse(storedData);
    updateCatalogueDisplay(); // Display catalogue list items
  }
});
