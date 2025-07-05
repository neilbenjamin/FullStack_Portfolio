# Recursive Array Search

This JavaScript project illustrates the concept of recursion by implementing a function to search for a specific string within a predefined array. The `findString()` function recursively iterates through the array, checking each element against the target string until it finds a match or exhausts all elements, showcasing a practical application of recursive algorithms for data traversal.

## 🌟 Features

* **Recursive Search:** Employs recursion to efficiently search for a target string within an array.
* **Default Index Parameter:** Demonstrates the use of a default parameter (`index = 0`) to initiate the recursive search from the beginning of the array.
* **Base Case Handling:** Defines clear stopping conditions for the recursion: when the target string is found, or when the entire array has been traversed without a match.
* **Index Reporting:** If the string is found, the function reports its exact index within the array.
* **"Not Found" Indicator:** Prints `-1` to the console if the target string is not present in the array.
* **Console Output:** Displays the search results directly in the console.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd recursive-array-search # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `recursion2.js` is located, and run the script using Node.js:
    ```bash
    node recursion2.js
    ```
4.  **Check Console Output:** The search result for the predefined string ("fish" in "car", "rat", "fish") will be displayed directly in your terminal.