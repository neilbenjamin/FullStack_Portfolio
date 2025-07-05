# Number Array Manipulation and Statistics

This comprehensive JavaScript project demonstrates various functions for manipulating an array of numbers and performing common statistical calculations. Users input a series of numbers, which are then processed by several custom-defined functions to calculate the sum, find the indices of maximum and minimum values, compute the average, and determine the median.

## 🌟 Features

* **Interactive Number Input:** Prompts the user to enter ten mixed whole and decimal numbers, storing them in an array.
* **Sum Calculation:** A function `arrayTotal()` calculates the sum of all numbers in the array, rounded to two decimal places.
* **Max/Min Index Finding:** Functions `arrayIndexMax()` and `arrayIndexMin()` identify the index of the largest and smallest numbers in the array, respectively.
* **Average Calculation:** The `arrayNumberAverage()` function computes the average of all numbers, also rounded to two decimal places.
* **Median Calculation:** The `arrayMedian()` function calculates the median, correctly handling both even and odd-length arrays after sorting.
* **Function Decomposition:** Organizes complex tasks into separate, reusable functions.
* **Browser-Based Interaction:** Utilizes `prompt()` for input and `alert()` alongside `console.log()` for displaying results.

## 🚀 How to Run the Project

This project runs interactively in a web browser.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd number-array-manipulation # Or whatever your project folder is named
    ```
2.  **Open in Browser:** Locate the `index.html` file (assuming you have one linked to `functions1.js`) in the project directory.
    * You can simply drag and drop the `index.html` file into an open Google Chrome (or any modern web browser) window.
    * Alternatively, double-click the `index.html` file, and it should open in your default browser.
3.  **Follow Prompts:** Once the page loads, a series of ten prompts will appear. Enter a mixture of whole and decimal numbers as requested.
4.  **View Results:** After all inputs are received, the calculated sum, max index, min index, average, and median will be displayed sequentially in alert boxes and simultaneously in your browser's developer console (usually by pressing `F12` or right-clicking and selecting "Inspect" -> "Console").

## 📝 Notes

* **External Assistance:** The development of this project benefited from various external resources, including assistance from ChatGPT, FreeCodeCamp, and MDN Web Docs, particularly for understanding built-in methods and complex algorithms.
* **`Math.max(...array)` and `Math.min(...array)`:** The spread syntax (`...`) is crucial here. `Math.max()` and `Math.min()` expect individual arguments, not an array. The spread operator unpacks the array elements into a list of arguments, allowing these methods to correctly find the maximum or minimum value from the array.
* **Array Sorting for Median:** The `array.sort(function(a, b){ return a - b; })` method is used to sort the array numerically in ascending order. The anonymous function `(a, b) => a - b` is a common pattern for numeric sorting, as JavaScript's default `sort()` method sorts elements as strings.
* **Average Calculation:** The `for` loop calculates the sum by iteratively adding `array[i]` to `sum` and then divides `sum` by `array.length` *inside* the loop. A more conventional approach for average is to sum all elements first, *then* divide the final sum by the length *outside* the loop (e.g., `sumTotal / array.length`). While the current implementation might be less intuitive, it still yields the correct average.
* **Median Calculation Complexity:** The median function handles both even and odd array lengths. For an even length, it averages the two middle elements. For an odd length, it returns the single middle element. The `Math.floor()` method correctly determines the middle index, especially for odd-length arrays.