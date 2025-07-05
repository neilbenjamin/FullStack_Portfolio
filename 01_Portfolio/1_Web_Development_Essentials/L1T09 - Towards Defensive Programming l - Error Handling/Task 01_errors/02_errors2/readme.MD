# Error Handling & Debugging II: Animal Specifier

This JavaScript project is a continuation of error handling exercises, focusing on common issues related to variable scope, data types, string interpolation, and conditional statements. The script defines properties of an animal and prints a specification based on a simple condition, demonstrating how to identify and fix various types of programming errors.

## 🌟 Features

* **Variable Definition:** Declares and initializes variables for animal characteristics (name, type, teeth, legs).
* **Type Coercion:** Illustrates the importance of converting string inputs to numbers for numerical comparisons.
* **Template Literals:** Demonstrates the correct use of template literals (backticks) for embedding variables within strings, preventing common string concatenation errors.
* **Conditional Output:** Uses an `if` statement to control when the animal's full specification is printed based on a numerical condition.
* **Error Correction Examples:** Provides practical examples of fixing `ReferenceError` (undefined variables), `SyntaxError` (incorrect grammar), and logical errors (incorrect comparisons or variable usage).
* **Console Output:** Displays the animal's specification in the console upon successful execution.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd error-handling-ii # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `error_handling_2.js` is located, and run the script using Node.js:
    ```bash
    node error_handling_2.js
    ```
4.  **Check Console Output:** The animal's specification will be displayed directly in your terminal.

## 📝 Notes

* This program was initially designed with deliberate errors to provide a hands-on debugging experience. The inline comments detail the original errors and the applied fixes.
* Key learning points from this exercise include:
    * **String vs. Variable:** Understanding when to use quotes for string literals versus when to use variable names directly.
    * **Strict Equality:** Using `===` for strict equality comparison (value and type) instead of the assignment operator `=`.
    * **Variable Naming & Scope:** Ensuring variables are correctly named and accessible within their intended scope.
    * **Type Conversion:** The necessity of converting data types (e.g., from string to number) when performing numerical operations or comparisons.