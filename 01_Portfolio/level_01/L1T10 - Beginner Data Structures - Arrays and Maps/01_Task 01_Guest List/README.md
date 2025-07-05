# Dinner Party Guest List Manager

A JavaScript application designed to help users compile a guest list for a dinner party, limiting the number of guests to ten. It interactively prompts the user for names, stores them in an array, and provides feedback when the list is full, ultimately displaying the complete guest list.

## 🌟 Features

* **Interactive Guest Entry:** Prompts the user to enter guest names for a specified number of times.
* **Fixed Iteration Loop:** Utilizes a `for` loop to control the exact number of guest entries (ten).
* **Dynamic Prompts:** Informs the user which guest number they are currently adding (e.g., "first name", "second name").
* **Guest List Storage:** Adds each entered guest name to an array.
* **Maximum Guest Limit:** Provides an alert once the maximum number of guests (ten) has been entered.
* **Dual Output:** Displays the final compiled guest list both in a browser alert and in the console.

## 🚀 How to Run the Project

This project runs interactively in a web browser.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd guest-list-manager # Or whatever your project folder is named
    ```
2.  **Open in Browser:** Locate the `index.html` file (assuming you have one linked to `for_loops.js`) in the project directory.
    * You can simply drag and drop the `index.html` file into an open Google Chrome (or any modern web browser) window.
    * Alternatively, double-click the `index.html` file, and it should open in your default browser.
3.  **Follow Prompts:** Once the page loads, interactive prompts will appear. Enter guest names when prompted.
4.  **View Guest List:** After entering all ten guests, an alert box will appear displaying your full guest list. The list will also be printed in your browser's developer console (usually by pressing `F12` or right-clicking and selecting "Inspect" -> "Console").