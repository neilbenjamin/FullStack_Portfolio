# Divisibility Checker (7 & 11)

A simple JavaScript application that determines whether a user-provided number is divisible by 7, 11, both, or neither. This project demonstrates basic user input, type conversion, and conditional logic using the modulo operator to check for divisibility.

## 🌟 Features

* **Divisibility Test:** Checks if a given number is perfectly divisible by 7, 11, or both.
* **User Input:** Prompts the user to enter any whole number.
* **Conditional Logic:** Employs `if/else if/else` statements to apply the divisibility rules.
* **Modulo Operator Usage:** Effectively utilizes the modulo (`%`) operator to determine remainders.
* **Console Output:** Displays the divisibility result in the browser's developer console.

## 🚀 How to Run the Project

This project runs interactively in a web browser.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd divisibility-checker # Or whatever your project folder is named
    ```
2.  **Open in Browser:** Locate the `index.html` file (assuming you have one linked to `seven11.js`) in the project directory.
    * You can simply drag and drop the `index.html` file into an open Google Chrome (or any modern web browser) window.
    * Alternatively, double-click the `index.html` file, and it should open in your default browser.
3.  **Follow Prompts:** Once the page loads, an interactive prompt will appear. Follow the on-screen instructions in the browser to enter a number.
4.  **Check Console Output:** Open your browser's developer console (usually by pressing `F12` or right-clicking and selecting "Inspect" -> "Console") to see the divisibility result.

## 📝 Notes

* **Modulo Operator with `switch` Statements:** While the modulo operator (`%`) is fundamental for checking divisibility, directly using it in `switch` statement `case` conditions can be tricky or lead to unexpected behavior in JavaScript, as `switch` primarily checks for strict equality (`===`). The current implementation correctly uses `if/else if/else` statements, which are more suitable for evaluating complex conditional expressions involving multiple checks and logical operators. (Reference: [Stack Overflow discussion on modulo in switch](https://stackoverflow.com/questions/24914700/in-a-switch-statement-is-it-possible-to-use-a-modulo-operator-in-each-case))
* **Understanding Divisibility:** A number is considered divisible by another number if the remainder of their division is 0. This concept is perfectly captured by the modulo operator (e.g., `dividend % divisor === 0`). This project reinforces this mathematical concept in its logic. (Reference: [Stack Overflow discussion on checking divisibility](https://stackoverflow.com/questions/2821006/find-if-variable-is-divisible-by-2))