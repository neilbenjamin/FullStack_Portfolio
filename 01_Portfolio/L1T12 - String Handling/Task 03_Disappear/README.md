# Character Removal from String

A JavaScript project that implements a function to remove specific characters (like vowels) from a given string. The `disappearString()` function iterates through a set of characters to be erased and uses the `replace()` method to remove them from the target string. The project includes a self-contained testing suite to verify the function's output against expected results.

## 🌟 Features

* **Character Erasure Function:** The `disappearString()` function takes a main string and a string of characters to be removed (e.g., "aeiou" for vowels).
* **Iterative Replacement:** It loops through each character in the `toErase` string and replaces the *first occurrence* of that character in the `myString`.
* **String Manipulation:** Demonstrates the use of the `String.prototype.replace()` method for targeted character removal.
* **Automated Testing:** Comes with `testStrings`, `stringToDisappear`, and `correctStrings` arrays to automatically validate the function's behavior.
* **Console Output:** Displays "Correct!" or "Wrong!" messages for each test case, along with the actual and expected output for failed tests.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd character-removal # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `disappear_string_handling.js` is located, and run the script using Node.js:
    ```bash
    node disappear_string_handling.js
    ```
4.  **Check Console Output:** The results of the automated tests, indicating whether each test case passed or failed, will be displayed directly in your terminal.