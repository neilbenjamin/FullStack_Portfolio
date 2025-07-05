# Dynamic Guest List Manager with Replacement

This advanced JavaScript project extends basic guest list management by allowing users to interactively populate a list of up to ten guests and then provides an option to replace an existing entry if they attempt to add an eleventh guest. It showcases complex loop structures, extensive array manipulation, and detailed user interaction for dynamic list modification.

## 🌟 Features

* **Interactive Guest Entry:** Prompts the user to add names to a guest list.
* **Fixed Capacity:** Limits the primary guest list to a maximum of ten entries.
* **Replacement Logic:** If the user attempts to add an eleventh guest, the program offers to replace an existing guest.
* **Interactive Replacement:** Guides the user through selecting a guest to remove and then inserts the new guest.
* **Input Validation:** Ensures that the user selects an existing name for replacement.
* **Comprehensive Array Manipulation:** Demonstrates `push()`, `pop()`, `includes()`, `indexOf()`, and `splice()` methods for robust list management.
* **Dual Output:** Displays the final guest list in both a browser alert and the console.

## 🚀 How to Run the Project

This project runs interactively in a web browser.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd dynamic-guest-list-manager # Or whatever your project folder is named
    ```
2.  **Open in Browser:** Locate the `index.html` file (assuming you have one linked to `another_loop.js`) in the project directory.
    * You can simply drag and drop the `index.html` file into an open Google Chrome (or any modern web browser) window.
    * Alternatively, double-click the `index.html` file, and it should open in your default browser.
3.  **Follow Prompts:** Once the page loads, interactive prompts will appear. Enter names for your guest list.
4.  **Experience Replacement Logic:** After entering ten names, try to enter an eleventh to trigger the replacement functionality.
5.  **View Guest List:** The final guest list will be displayed in an alert box and in your browser's developer console (usually by pressing `F12` or right-clicking and selecting "Inspect" -> "Console").