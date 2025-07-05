# JavaScript Higher-Order Function Example (Custom Filter)

This project demonstrates the concept of a **higher-order function** in JavaScript by implementing a custom filtering mechanism. It showcases how a function can accept another function as an argument (a callback) to perform flexible operations on data, mimicking the behavior of built-in array methods like `Array.prototype.filter()`.

## 🌟 Features

* **Higher-Order Function (`myFilterFunction`):**
    * This function serves as a prime example of a higher-order function, as it accepts an `array` and a `callback` function as its arguments.
    * It iterates through the provided array and applies the `callback` to each element, demonstrating how functions can be treated as first-class citizens in JavaScript.
* **Custom Filtering Logic:**
    * The `myFilterFunction` is designed to replicate the core functionality of array filtering. It processes elements based on a condition defined by the `callback` function.
    * It utilizes the `Array.prototype.map()` method internally to iterate over the array, highlighting a common pattern of transforming or selecting elements.
* **Callback Function (`callbackFunction`):**
    * This is an anonymous function passed as an argument to `myFilterFunction`. It defines the specific filtering criterion: checking if a word's length is exactly 6 characters.
    * It returns the element if the condition is met, otherwise it implicitly returns `undefined`, which `myFilterFunction` then uses to decide whether to include the element in the final result.
* **Data Processing:** The combination of `myFilterFunction` and `callbackFunction` effectively filters the `wordsArray`, returning only those words that satisfy the specified length condition.
* **Clear and Detailed Comments:** The code is extensively commented to explain each step, variable's purpose, and the overall flow, making it easy to understand the higher-order function concept.

## 🚀 How to Run the Project

This project consists of a single JavaScript file. You can run it using a Node.js environment or by embedding it in an HTML file and opening it in a web browser's console.

### Option 1: Using Node.js (Recommended)

1.  **Install Node.js:** If you don't have Node.js installed, download and install it from the official website: [Node.js Downloads](https://nodejs.org/en/download/).
2.  **Save the Code:** Save the provided JavaScript code into a file named, for example, `higher_order_functions.js`.
3.  **Run from Terminal:** Open your terminal or command prompt, navigate to the directory where you saved `higher_order_functions.js`, and execute the file using Node.js:
    ```bash
    node higher_order_functions.js
    ```
    You will see the filtered array printed directly in your terminal.

### Option 2: Using a Web Browser

1.  **Create an HTML file:** Create an `index.html` file in the same directory as your JavaScript file (e.g., `higher_order_functions.js`).
2.  **Add Script Tag:** In your `index.html`, add a `<script>` tag referencing your JavaScript file just before the closing `</body>` tag:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Higher-Order Function Example</title>
    </head>
    <body>
        <h1>Check the Console for Output</h1>
        <script src="higher_order_functions.js"></script>
    </body>
    </html>
    ```
3.  **Open in Browser:** Open the `index.html` file in your web browser.
4.  **Check Console:** Open your browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect" or "Inspect Element"), navigate to the "Console" tab, and you will see the filtered array output.