# Object Key-Value Printer (Debugging Insights)

This JavaScript project features a function designed to selectively print the values associated with specified keys from a given JavaScript object. It demonstrates practical string manipulation techniques for processing comma-separated input and provides insights into common debugging scenarios when working with object properties and string parsing.

## 🌟 Features

* **Selective Value Printing:** The `printValuesOf()` function takes a JavaScript object and a string of comma-separated keys, then logs the value for each specified key to the console.
* **Input String Parsing:** Demonstrates how to `split()` a string by a delimiter (comma) to create an array of individual keys.
* **Whitespace Trimming:** Uses the `trim()` method to clean up whitespace around extracted keys, preventing errors when accessing object properties.
* **Bracket Notation for Object Access:** Illustrates the use of bracket notation (`object[key]`) for dynamic property access.
* **Debugging Learning:** The code includes comments reflecting common debugging challenges, such as identifying issues with `split()` when leading/trailing spaces are present, and ensuring correct string literal syntax in object declarations.
* **Predefined Object:** Utilizes a `simpsonsCatchphrases` object for demonstration.
* **Console Output:** Displays the values of the requested object properties directly in the console.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd object-printer # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `debudding.js` is located, and run the script using Node.js:
    ```bash
    node debudding.js
    ```
4.  **Check Console Output:** The catchphrases for Lisa, Bart, and Homer will be displayed directly in your terminal.