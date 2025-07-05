# Dynamic Shopping List Application

This project is a dynamic web-based shopping list application built using HTML, CSS, and vanilla JavaScript. It allows users to add new items, mark items as "bought," delete items from the list, and see a separate display of items they've checked off.

## 🌟 Features

* **Add New Items:** Users can type an item into an input field and click an "Add Item" button (or press Enter) to add it to the shopping list.
* **Input Validation:** Prevents adding empty items to the list.
* **Mark as "Bought":** Clicking on a list item toggles a "checked" state, changing its appearance and updating a separate display for "ticked off" items.
* **Delete Items:** Each item has an "x" (cross) symbol that, when clicked, hides the item from the main list and implicitly removes it from the internal data array.
* **"Ticked Off" Display:** A dedicated section dynamically updates to show which items have been marked as "checked off."
* **Dynamic DOM Manipulation:** All list items are created, updated, and removed dynamically using JavaScript, demonstrating core DOM manipulation techniques.
* **Event Handling:** Extensive use of event listeners for user interactions (clicks, keyboard input).
* **Basic Styling:** Provides a clean and functional user interface with basic styling for readability and visual feedback.

## 📁 Project Structure

The project consists of three main files:

* `index.html`: The main HTML file that provides the structure of the shopping list application, including the input form, the main list area, and the "ticked off" items display.
* `main.js`: Contains all the JavaScript logic for adding, checking, deleting, and displaying shopping list items. It manipulates the DOM in response to user actions.
* `stylesheet.css`: Provides the styling for the application's layout and visual elements, including the appearance of checked and deleted items.

## 🚀 How to Run the Project

This is a front-end web application. To run it, simply open the `index.html` file in your web browser.

1.  **Ensure Project Files are Present:**
    Make sure you have `index.html`, `main.js`, and `stylesheet.css` all in the same directory (e.g., `DOM_TASK FINAL`).

2.  **Open in Browser:**
    Navigate to the directory where you saved the files. Double-click `index.html` or drag-and-drop it into your web browser (e.g., Google Chrome, Firefox, Edge).

3.  **Interact with the Application:**
    * Type an item into the input field and click "Add Item" or press Enter.
    * Click on an item in the list to mark it as checked/unchecked.
    * Click the "x" symbol next to an item to hide/delete it from the list.
    * Observe the "Ticked off items" section update as you check/uncheck items.

## 📝 Notes & Potential Improvements

* **Data Persistence:** Currently, the shopping list and "ticked off" items are reset when the page is refreshed. For a real-world application, you would typically use `localStorage`, `sessionStorage`, or a backend API to persist the data.
* **Code Duplication:** The `addClickToClose` function appears twice in `main.js`. This is a duplication that should be refactored into a single instance to improve maintainability.
* **Refined Deletion:** The current "delete" functionality only hides the `<li>` element. To fully remove the item from the display and the `groceryList` array, a more comprehensive refresh of the list or direct DOM removal combined with array `splice` (and then re-rendering) would be needed to keep the `dataset.index` values consistent if items are removed from the middle.
* **Styling:** The `stylesheet.css` is currently commented out in `index.html`. Uncommenting it (`<link rel="stylesheet" href="stylesheet.css">`) would apply the intended styles.