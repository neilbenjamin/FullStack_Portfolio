# JavaScript Calculator with Arrow Function Syntax

This project demonstrates a simple command-line (browser-based) calculator application built in JavaScript, with a strong emphasis on showcasing the **ES6 arrow function syntax**. It provides basic arithmetic operations (addition, subtraction, multiplication, and division) and includes input validation to ensure a smooth user experience.

## 🌟 Features

* **Arrow Function Syntax Demonstration:** The core highlight of this project is the concise definition of arithmetic functions (`addition`, `subtraction`, `multiplication`, `division`) using arrow functions. This illustrates how single-expression arrow functions implicitly return their result, reducing boilerplate code.
* **Basic Calculator Functionality:** Performs standard arithmetic operations based on user input.
* **Interactive User Interface:** Utilizes `prompt()` for taking numeric input from the user and `alert()` for displaying results and validation messages, making it easy to interact with directly in a web browser.
* **Robust Input Validation:** Employs `Number()` to convert user input to numeric types and `isNaN()` to check if the input is a valid number, prompting the user for correct input until valid numbers are provided.
* **Persistent Input Loop:** A `while (true)` loop ensures that the program continuously asks for input until valid numbers and a supported operator are entered, providing a user-friendly retry mechanism.
* **Clear Code Comments:** Includes inline comments that specifically explain the arrow function syntax and its benefits (e.g., implicit return for single expressions).

## 🚀 How to Run the Project

This project is a JavaScript file that utilizes browser-specific functions (`prompt`, `alert`). Therefore, it needs to be run within a web browser environment.

1.  **Save the Code:** Save the provided JavaScript code into a file named, for example, `calculator.js`.
2.  **Create an HTML File:** Create an `index.html` file in the same directory as your `calculator.js`.
3.  **Link the JavaScript File:** In your `index.html`, add a `<script>` tag referencing your `calculator.js` file just before the closing `</body>` tag. This ensures the HTML content loads first before the script tries to access it (though for `prompt`/`alert` it's less critical for the DOM, it's good practice).

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Arrow Syntax Calculator</title>
    </head>
    <body>
        <h1>Simple Calculator</h1>
        <p>Open your browser's console (F12) to see the `prompt` and `alert` interactions.</p>
        <script src="calculator.js"></script>
    </body>
    </html>
    ```
4.  **Open in Browser:** Open the `index.html` file in your web browser (e.g., Google Chrome, Firefox, Edge).
5.  **Interact with Prompts:** The browser will immediately display `prompt` dialogs asking for numbers and an operator. Follow the instructions to perform calculations. Results will be shown in `alert` dialogs.