# Quadrilateral Classifier

A JavaScript project that classifies a quadrilateral based on its predefined side lengths and corner degrees. This script demonstrates conditional logic to identify common quadrilaterals such as Squares, Rectangles, Rhombuses, and Parallelograms, outputting the result directly to the console.

## 🌟 Features

* **Shape Identification:** Classifies a quadrilateral into one of several types (Square, Rectangle, Rhombus, Parallelogram) based on given properties.
* **Property-Based Logic:** Utilizes a series of `if/else if` conditions to compare side lengths and angles to determine the shape.
* **Direct Output:** Displays the identified type of quadrilateral directly in the console.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd quadrilateral-classifier # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `quadrilaterals.js` is located, and run the script using Node.js:
    ```bash
    node quadrilaterals.js
    ```
4.  **Check Console Output:** The classification of the quadrilateral (based on the hardcoded values in the script) will be displayed directly in your terminal. You can modify the `side` and `corner` variables within the `quadrilaterals.js` file to test different shapes.

## 📝 Notes

* **Angle Calculation:** The current implementation relies on explicitly setting all relevant corner degrees as input. While the logic correctly classifies shapes based on these *provided* values, it does not mathematically derive or calculate the remaining angles of a Rhombus or Parallelogram if only a subset of angles were given. For instance, in a parallelogram, opposite angles are equal, and consecutive angles sum to 180 degrees. This project assumes these properties are correctly input by the user for classification.
* **Conditional Structure:** The `if/else-if` statements are designed to check for specific combinations of side and angle equalities/inequalities to match the properties of each quadrilateral type. While functional for the specified inputs, careful attention to the input values is needed to ensure correct classification given the direct angle comparisons.