# Creating Errors & Debugging Practice

This JavaScript project is designed as an exercise in understanding and resolving common programming errors, specifically focusing on `ReferenceError` due to misspellings and `Logical Error` stemming from strict equality comparisons between different data types. It serves as a practical demonstration of debugging fundamental JavaScript concepts.

## 🌟 Features

* **Error Demonstration:** Intentionally includes and then provides comments for common JavaScript errors.
* **Runtime Error Fix:** Addresses `ReferenceError` caused by incorrect variable spelling, emphasizing attention to detail in variable names.
* **Logical Error Resolution:** Highlights and fixes a logical error arising from strict equality (`===`) comparison between a string and a number, demonstrating the importance of matching data types.
* **Conditional Output:** Prints a message based on a conditional check that combines string and numerical properties.
* **Console Output:** Displays the resulting message directly in the console upon successful execution after fixes.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd creating-errors-debug # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `creating_errors.js` is located, and run the script using Node.js:
    ```bash
    node creating_errors.js
    ```
4.  **Check Console Output:** The corrected program's output will be displayed directly in your terminal.

## 📝 Notes

* This program was initially crafted with deliberate errors to provide a hands-on learning experience in debugging. The inline comments detail the original errors and the effective solutions implemented.
* Key takeaways from this exercise include:
    * **Case Sensitivity:** JavaScript is case-sensitive, meaning `brainFried` is different from `brainfried`.
    * **Strict Equality (`===`):** This operator checks for both value and data type equality. A string `"7"` is not strictly equal to the number `7`, even if they represent the same numerical value. Understanding this distinction is crucial for preventing unexpected logical behavior in your code.