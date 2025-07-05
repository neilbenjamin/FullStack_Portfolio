# Alternating Case String Converter

A JavaScript project that implements a function to transform a given string into "alternating case" – where characters at even indices are capitalized and characters at odd indices are lowercased. The project includes a self-contained testing suite to verify the function's correctness against a set of predefined test cases.

## 🌟 Features

* **Alternating Case Transformation:** A dedicated function, `alternativeString()`, converts any input string into an alternating case pattern.
* **Character-by-Character Processing:** Iterates through each character of a string to apply case changes based on its position.
* **Modulo Operator Usage:** Employs the modulo operator (`%`) to efficiently determine if a character's index is even or odd.
* **Automated Testing:** Includes a suite of `testStrings` and `correctStrings` arrays to automatically validate the function's output.
* **Direct Console Feedback:** Prints "Correct!" or "Wrong!" messages for each test case, indicating the accuracy of the function.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd alternating-case-converter # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `string_handling1.js` is located, and run the script using Node.js:
    ```bash
    node string_handling1.js
    ```
4.  **Check Console Output:** The results of the automated tests, indicating whether each test case passed or failed, will be displayed directly in your terminal.