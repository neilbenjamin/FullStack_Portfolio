# JavaScript Closure Example

This project demonstrates the concept of a **closure** in JavaScript. A closure allows an inner function to retain access to its outer (enclosing) function's scope, even after the outer function has finished executing. This is a fundamental and powerful concept in JavaScript, enabling data encapsulation and persistent state.

## 🌟 Features

* **Closure Definition:** The `add` function serves as an outer function that defines a variable `loopTotal` and then returns an inner, anonymous function.
* **Encapsulated State:** The `loopTotal` variable is "closed over" by the inner function. This means that `loopTotal` remains accessible and mutable by the inner function across multiple calls, effectively maintaining a persistent state specific to that closure instance.
* **Function Assignment:** The `loopMultiplication` constant is assigned the *returned inner function* from `add()`. This is crucial because it allows `loopMultiplication` to be invoked later while still having access to `loopTotal`.
* **Iteration and Execution:** A `for` loop iterates from 0 to 9, calling the `loopMultiplication` closure in each iteration. Each call modifies and returns the `loopTotal` value, demonstrating the closure's ability to remember and update its captured environment.
* **Console Output:** The `console.log` statements within the loop clearly illustrate the input `i` and the calculated `loopTotal` from the closure, making the behavior transparent.

## 🚀 How to Run the Project

This project consists of a single JavaScript file. You can run it using a Node.js environment or by embedding it in an HTML file and opening it in a web browser's console.

### Option 1: Using Node.js (Recommended)

1.  **Install Node.js:** If you don't have Node.js installed, download and install it from the official website: [Node.js Downloads](https://nodejs.org/en/download/).
2.  **Save the Code:** Save the provided JavaScript code into a file named, for example, `closure_example.js`.
3.  **Run from Terminal:** Open your terminal or command prompt, navigate to the directory where you saved `closure_example.js`, and execute the file using Node.js:
    ```bash
    node closure_example.js
    ```
    You will see the output printed directly in your terminal.

### Option 2: Using a Web Browser

1.  **Create an HTML file:** Create an `index.html` file in the same directory as your JavaScript file (e.g., `closure_example.js`).
2.  **Add Script Tag:** In your `index.html`, add a `<script>` tag referencing your JavaScript file just before the closing `</body>` tag:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Closure Example</title>
    </head>
    <body>
        <h1>Check the Console for Output</h1>
        <script src="closure_example.js"></script>
    </body>
    </html>
    ```
3.  **Open in Browser:** Open the `index.html` file in your web browser.
4.  **Check Console:** Open your browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect" or "Inspect Element"), navigate to the "Console" tab, and you will see the output.