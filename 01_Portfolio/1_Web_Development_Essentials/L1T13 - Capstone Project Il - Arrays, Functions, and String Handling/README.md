# Simple Caesar Cipher Encryptor

This JavaScript project implements a basic Caesar cipher for encrypting text. It shifts each letter in a given string by 15 positions within the alphabet, wrapping around from 'Z' to 'A' (or 'z' to 'a') as needed. Non-alphabetic characters (numbers, spaces, symbols) are preserved without modification.

## 🌟 Features

* **Caesar Cipher Encryption:** Encrypts strings by shifting alphabetical characters by a fixed offset (15 positions).
* **Alphabetical Wrapping:** Correctly handles shifts that go beyond 'Z' or 'z' by wrapping back to the beginning of the alphabet.
* **Case Sensitivity Preservation:** Applies the shift independently to uppercase and lowercase letters.
* **Non-Alphabetic Character Preservation:** Leaves numbers, spaces, and special characters unchanged in the output.
* **Character-by-Character Processing:** Iterates through the input string, processing each character individually using ASCII values.
* **ASCII Conversion:** Utilizes `charCodeAt()` to get character ASCII values and `String.fromCharCode()` to convert ASCII values back to characters.
* **Console Output:** Prints the encrypted string directly to the console.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd simple-caesar-cipher # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `cypher.js` is located, and run the script using Node.js:
    ```bash
    node cypher.js
    ```
4.  **Check Console Output:** The encrypted version of the predefined string (`"Abe cat dog"`) will be displayed directly in your terminal.