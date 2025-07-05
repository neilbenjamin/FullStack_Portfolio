# Defensive Programming - Distance, Time, Speed Calculator

This JavaScript project implements an interactive calculator designed to compute distance, time, or speed, with a strong emphasis on defensive programming practices. It robustly handles various invalid user inputs using `try-catch` blocks, input validation, and informative error messages, ensuring a resilient user experience.

## 🌟 Features

* **Interactive Calculation:** Allows users to choose whether to calculate `distance`, `time`, or `speed`.
* **Robust Error Handling:** Incorporates `try-catch` blocks to gracefully manage and report invalid user inputs, preventing application crashes.
* **Comprehensive Input Validation:**
    * Checks if the user has entered any value (prevents empty submissions).
    * Validates if numerical inputs (time, speed, distance) are indeed numbers using `isNaN()`.
    * Guides the user with `alert` messages for incorrect entries.
* **HHMM Time Conversion:** Automatically parses time input given in `HHMM` format (e.g., `258` for 2 hours and 58 minutes) and converts it into a decimal hour format for accurate calculations.
* **User Feedback & Retries:** Provides immediate feedback via `alert` messages for valid and invalid inputs, and a `while` loop ensures the user is re-prompted until valid data is provided.
* **Precision Control:** Uses `toFixed(2)` to format numerical results to two decimal places.

## 🚀 How to Run the Project

This project runs interactively in a web browser.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd defensive-calculator # Or whatever your project folder is named
    ```
2.  **Open in Browser:** Locate the `index.html` file (assuming you have one linked to `defensive_programming2.js`) in the project directory.
    * You can simply drag and drop the `index.html` file into an open Google Chrome (or any modern web browser) window.
    * Alternatively, double-click the `index.html` file, and it should open in your default browser.
3.  **Follow Prompts:** Once the page loads, interactive prompts will appear. You will be asked to choose a calculation type and then provide the necessary numerical inputs.
4.  **Experience Error Handling:** Try entering invalid inputs (e.g., text instead of numbers, or empty entries) to observe the defensive programming in action.
5.  **View Result:** The calculated result will be displayed in an `alert` box upon successful input. Errors encountered will also be logged to your browser's developer console (usually by pressing `F12` or right-clicking and selecting "Inspect" -> "Console").