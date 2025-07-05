# Array Uniqueness with Lodash

This is a simple Node.js script that demonstrates how to use the external `lodash` library to efficiently find and return only the unique elements from an array containing duplicate values. It's a fundamental example of utilizing third-party packages in a Node.js environment.

## 🌟 Features

* **Lodash Integration:** Shows how to `require` and use a popular utility library like Lodash.
* **Array Uniqueness:** Leverages the `_.uniq()` method from Lodash to quickly remove duplicate values from a numeric array.
* **Console Output:** Prints the resulting array of unique numbers directly to the terminal.

## 📁 Project Structure

The project consists of a single JavaScript file:

* `uniqueArray.js` (or your chosen filename): Contains the array definition and the logic for using Lodash to find unique elements.

*(When you set up this project, you will also have a `package.json` file, and after installing Lodash, a `node_modules` folder and `package-lock.json` file will be created.)*

## 🚀 How to Run the Project

**For this project to work, you must have Node.js installed on your system, and the `lodash` library must be installed as a dependency.**

If you don't have Node.js installed, please visit the [official Node.js website](https://nodejs.org/) to download and install it. You can verify your installation by opening your terminal or command prompt and typing `node -v` and `npm -v`.

**Once Node.js is installed, follow these steps:**

1.  **Create Your Project Directory:**
    Create a new folder for your project and navigate into it using your terminal or command prompt:
    ```bash
    mkdir unique-array-app
    cd unique-array-app
    ```

2.  **Initialize npm:**
    This step creates the `package.json` file, which is essential for managing your project's dependencies.
    ```bash
    npm init -y
    ```
    (The `-y` flag answers "yes" to all prompts, quickly creating the default `package.json`.)

3.  **Install Lodash:**
    This is a **crucial step** because the script relies on the `lodash` library.
    ```bash
    npm install lodash
    ```
    This command downloads the Lodash package and saves it in a `node_modules` folder within your project, and also adds it as a dependency in your `package.json`.

4.  **Save the Code:**
    Save the provided JavaScript code into a file named `uniqueArray.js` (or any `.js` filename) inside your project directory.

    ```javascript
    //PLEASE ENSURE THAT WHOEVER IS REVIEWING THIS CODE TO INSTALL THE NPM LODASH LIBRARY PLEASE. IT HAS BEEN DELETED AS 
    //OF THE INSTRUCTION SET.

    const lodash = require("lodash");

    const numberArray = [1,2,10,100,10,2,5,6,10,1000,7,2,100,1,5,7,10]

    console.log (lodash.uniq(numberArray));
    ```

5.  **Run the Script:**
    Execute the JavaScript file using the `node` command from your project directory:
    ```bash
    node uniqueArray.js
    ```

## 📺 Expected Output

After running the command in your terminal, you will see the following output, which is the `numberArray` with all duplicate values removed: