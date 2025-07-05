# Palindrome Checker (Automated Tests)

A JavaScript project that implements a highly efficient function to determine if a given string is a palindrome (reads the same forwards and backwards). The project includes a robust set of automated tests to validate the `isPalindrome()` function against various test cases, providing immediate feedback on its correctness.

## 🌟 Features

* **Palindrome Detection:** The `isPalindrome()` function accurately checks if a string is a palindrome.
* **Case-Insensitive:** Automatically converts input strings to lowercase to ensure case-insensitive comparisons.
* **Efficient String Reversal:** Utilizes a concise chain of `split()`, `reverse()`, and `join()` methods for string reversal.
* **Boolean Output:** Returns `true` if the string is a palindrome, and `false` otherwise.
* **Automated Testing Suite:** Includes predefined `testStrings` and `correctStrings` arrays for comprehensive, self-checking validation.
* **Direct Console Feedback:** Logs clear "Correct!" or "Wrong!" messages for each test case, along with the actual and expected results for failures.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd palindrome-checker-tests # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `string_handling4.js` is located, and run the script using Node.js:
    ```bash
    node string_handling4.js
    ```
4.  **Check Console Output:** The results of the automated palindrome checks will be displayed directly in your terminal, indicating which tests passed or failed.