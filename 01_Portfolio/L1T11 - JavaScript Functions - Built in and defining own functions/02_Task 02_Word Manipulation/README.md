# String Manipulation Functions

This JavaScript project demonstrates a collection of functions designed to perform various manipulations on a user-provided string. It includes functionalities to replace characters at specific intervals, reverse a string, capitalize characters at fixed positions, and convert characters to their ASCII codes. The project emphasizes string-to-array conversion, looping, and built-in string/array methods.

## 🌟 Features

* **Interactive Input:** Prompts the user to enter a word, with validation to ensure it has at least six letters.
* **Alternate Character Replacement:** The `replaceSecondLetter()` function replaces every second character in the input string with an exclamation mark (`!`).
* **String Reversal:** The `reverseWord()` function reverses the entire input string.
* **Indexed Capitalization:** The `everySix()` function capitalizes every sixth letter of the string, starting from the sixth character.
* **ASCII Code Conversion:** The `arrayOfAscii()` function iterates through the string and prints the ASCII (Unicode) value for each character.
* **Function Decomposition:** Organizes distinct string operations into separate, reusable functions.
* **Browser-Based Interaction:** Utilizes `prompt()` for input and `alert()` alongside `console.log()` for displaying results.

## 🚀 How to Run the Project

This project runs interactively in a web browser.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd string-manipulation-functions # Or whatever your project folder is named
    ```
2.  **Open in Browser:** Locate the `index.html` file (assuming you have one linked to `function2.js`) in the project directory.
    * You can simply drag and drop the `index.html` file into an open Google Chrome (or any modern web browser) window.
    * Alternatively, double-click the `index.html` file, and it should open in your default browser.
3.  **Follow Prompts:** Once the page loads, an interactive prompt will appear. Enter a word with at least six letters.
4.  **View Results:** The results of each string manipulation function will be displayed sequentially in alert boxes and simultaneously in your browser's developer console (usually by pressing `F12` or right-clicking and selecting "Inspect" -> "Console").

## 📝 Notes

* **String to Array Conversion (`.split('')`):** A key technique demonstrated is converting a string into an array of characters using `string.split('')`. This allows for easier manipulation of individual characters by index within loops, before converting the array back to a string using `.join('')`.
* **`charCodeAt()` Method:** The `charCodeAt()` method is used to retrieve the Unicode (which includes ASCII) value of a character at a specified index within a string.
* **Looping and Indexing:** The project provides practical examples of using `for` loops with custom increment steps (e.g., `i += 2`, `i += 6`) to target specific characters within a string.