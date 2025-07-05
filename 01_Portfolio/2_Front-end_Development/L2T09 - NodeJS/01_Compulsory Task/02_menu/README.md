# Simple Console Menu Display

This is a basic Node.js script that demonstrates how to define an array of items (representing a menu) and then print these items to the terminal as a formatted, numbered list. It's a straightforward example of array manipulation and console output in a Node.js environment.

## 🌟 Features

* **Array Definition:** Creates a JavaScript array to store a list of items.
* **Console Output:** Prints a heading ("Order Confirmed:") followed by each menu item in a numbered list format.
* **Looping:** Uses a `for` loop to iterate through the array and format the output.
* **Node.js Execution:** Designed to be run using the Node.js runtime environment.

## 📁 Project Structure

The project consists of a single JavaScript file:

* `menu.js`: Contains the array definition and the logic for printing the menu to the console.

*(Optionally, if you've run `npm init`, you will also have a `package.json` file which defines metadata for this project, perhaps with the name `02_menu` and `menu.js` as the entry point.)*

## 🚀 How to Run the Project

**For this project to work, you must have Node.js installed on your system.**

If you don't have Node.js installed, please visit the [official Node.js website](https://nodejs.org/) to download and install it. You can verify your installation by opening your terminal or command prompt and typing `node -v` and `npm -v`.

**Once Node.js is installed, follow these steps:**

1.  **Save the Code:**
    Save the provided JavaScript code into a file named `menu.js` in a directory of your choice (e.g., `my-menu-app/menu.js`).

    ```javascript
    //Please note: I haven't ouputted the results via script npm method in the package.json object under "scripts" as it
    //wasn't specifically requested in the task folder. 

    const item1 = "Pasta";
    const item2 = "Fruit";
    const item3 = "Cheese";

    const menu = [item1, item2, item3];

    // Print "Order Confirmed:" heading
    console.log("Order Confirmed:");

    // Loop through the menu array and print items with numbered list format. Solution courtesy of Hyperion
    for (let i = 0; i < menu.length; i++) {
        console.log(`${i + 1}. ${menu[i]}`);
    }
    ```

2.  **Navigate to the Project Directory:**
    Open your terminal or command prompt and navigate to the directory where you saved `menu.js` using the `cd` command.
    ```bash
    cd path/to/your/project/directory
    ```

3.  **Run the Script:**
    Execute the JavaScript file using the `node` command:
    ```bash
    node menu.js
    ```
    *Note: While you could configure an `npm script` (e.g., `"start": "node menu.js"`) in a `package.json` to run this via `npm start`, for this simple example, directly using the `node` command is sufficient and demonstrates direct execution.*

## 📺 Expected Output

After running the command in your terminal, you will see the following output: