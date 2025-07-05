# Book Catalogue Application

This project is a client-side web application that functions as a simple book catalogue. It allows users to perform **CRUD (Create, Read, Update, Delete)** operations on a list of book entries, which are persisted using `sessionStorage`. The application features a user-friendly interface built with HTML, styled with custom CSS, and enhanced with Bootstrap for a responsive design.

## 🌟 Features

* **Create (Add New Book):** Users can input the author's first name, last name, and book title into a form. Clicking the "Create Catalogue" button (or "Update" if in edit mode) adds a new book entry to the list.
* **Read (Display Catalogue):** All added book entries are dynamically displayed as an unordered list, showing the book title followed by the author's full name.
* **Update (Edit Book Details):** Each book entry has an "Edit" button. Clicking it populates the input form with the book's current details, changes the "Create Catalogue" button to "Update," allowing the user to modify and re-add the entry.
* **Delete (Remove Book):** Each book entry has a "Delete" button. Clicking it prompts for confirmation and, if confirmed, removes the book from the display and `sessionStorage`.
* **Data Persistence:** The book catalogue data is stored in `sessionStorage`, meaning the list of books will persist across browser tab refreshes. However, the data will be cleared when the browser session ends (e.g., closing the tab or browser).
* **Object-Oriented Structure:** Uses a JavaScript `class` (`bookDataClass`) to create structured book objects, making data management organized.
* **Dynamic DOM Manipulation:** The application extensively uses JavaScript to dynamically create, update, and remove list items, buttons, and display content in response to user actions.
* **Bootstrap Integration:** Leverages Bootstrap 5 for responsive layout (`container-fluid`, `d-flex`, `mb-3`) and styling of buttons (`btn`, `btn-primary`, `btn-warning`, `btn-info`).
* **Event Handling:** Attaches event listeners for button clicks and keyboard input (Enter key in the input fields).

## 📁 Project Structure

The project consists of three main files:

* `index.html`: The main HTML file that provides the structure of the book catalogue application, including the input form for adding/editing books and the `<ul>` element for displaying the catalogue. It also links to Bootstrap CSS/JS and your custom JavaScript and CSS.
* `script.js`: Contains all the JavaScript logic for handling user input, managing the `bookDataArray`, performing CRUD operations, interacting with `sessionStorage` for persistence, and dynamically updating the DOM.
* `stylesheet.css`: Contains custom CSS rules for additional styling beyond Bootstrap, such as margins for buttons and list containers.

## 🚀 How to Run the Project

This is a front-end web application. To run it, simply open the `index.html` file in your web browser.

1.  **Ensure Project Files are Present:**
    Make sure you have `index.html`, `script.js`, and `stylesheet.css` all in the same directory. The `index.html` file should correctly link to `script.js` and `stylesheet.css`, as well as Bootstrap's CDN links.

2.  **Open in Browser:**
    Navigate to the directory where you saved the files. Double-click `index.html` or drag-and-drop it into your web browser (e.g., Google Chrome, Firefox, Edge).

3.  **Interact with the Application:**
    * **Add a Book:** Fill in the Author First Name, Last Name, and Book Title fields, then click "Create Catalogue".
    * **Edit a Book:** Click the "Edit" button next to an existing book. Its details will appear in the form. Modify the details and click "Update".
    * **Delete a Book:** Click the "Delete" button next to an existing book and confirm the deletion.
    * **Persistence:** Refresh the page to see that your added/modified/deleted books remain in the list due to `sessionStorage`. Close the browser tab entirely to clear the `sessionStorage` data.

## 💡 Notes & Acknowledgements

* This project utilizes solutions and guidance from MDN Web Docs, W3Schools, and OpenAI as indicated in the code comments, demonstrating effective use of external resources for learning and problem-solving.
* The `sessionStorage` is used for simple client-side persistence. For more robust, long-term storage or multi-user applications, a backend database would be required.