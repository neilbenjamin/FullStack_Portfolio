# JavaScript DOM Manipulation: Dynamic List Display

This project demonstrates fundamental concepts of **Document Object Model (DOM) manipulation** using JavaScript. It showcases how to dynamically select HTML elements, create new elements, modify their content and style, and append them to the existing document structure. The example takes a simple array of grocery items and renders them as an unordered list (`<ul>`) in an HTML page, applying special styling to the first few items.

## 🌟 Features

* **DOM Selection:** Utilizes `document.querySelector()` to efficiently select the target `<ul>` element in the HTML document where the list items will be appended.
* **Dynamic Element Creation:** Employs `document.createElement()` to create new `<li>` (list item) elements on the fly for each item in the array.
* **Content Injection:** Uses `element.innerHTML` to set the textual content of the dynamically created list items, combining a static string with array elements.
* **Conditional Styling:** Demonstrates applying inline CSS styles (`element.style.color`) based on a condition, specifically coloring the first two list items magenta. It also changes their text content to reflect a "bought" status.
* **Appending Elements:** Shows how `element.appendChild()` is used to add the newly created and styled `<li>` elements as children to the selected `<ul>` element, thus rendering them visible in the browser.
* **Array Iteration:** Iterates through a JavaScript array (`groceryList`) to process each item and dynamically create a corresponding HTML list item.

## 🚀 How to Run the Project

This project is a JavaScript file (`main.js`) that directly interacts with an HTML file (`index.html`). Therefore, it **must** be run within a web browser environment.

1.  **Ensure Project Files are Present:**
    Make sure you have both `index.html` and `main.js` (containing the provided JavaScript code) in the same directory (e.g., `DOM_TASK FINAL`). The `index.html` file should contain an `<ul>` element for the script to target and should link to `main.js` via a `<script>` tag, typically placed just before the closing `</body>` tag.

2.  **Open in Browser:**
    Open the `index.html` file in your web browser (e.g., Google Chrome, Firefox, Edge). You can usually do this by double-clicking the `index.html` file or by dragging it into an open browser tab.

3.  **Observe Output:**
    You will see the grocery list dynamically rendered on the web page, with "Peanut Butter" and "Strawberry Jam" appearing in magenta and prefixed with "Bought:".