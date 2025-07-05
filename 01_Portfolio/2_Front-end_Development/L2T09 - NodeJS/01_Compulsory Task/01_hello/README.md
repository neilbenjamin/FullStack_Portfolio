# Simple Node.js "Hello World" Example

This is a basic Node.js script designed to demonstrate how to execute a JavaScript file directly in your terminal, outside of a web browser environment. It serves as a fundamental "Hello World" example for Node.js development.

## 🌟 Features

* **Console Output:** Prints a custom greeting message directly to the terminal.
* **Variable Usage:** Demonstrates simple variable declaration and interpolation in a string.
* **Node.js Execution:** Designed to be run using the Node.js runtime.

## 📁 Project Structure

The project consists of a single JavaScript file:

* `hello.js`: Contains the core logic that defines a name and prints a greeting message.

*(Optionally, if you've run `npm init`, you will also have a `package.json` file which defines metadata for this project.)*

## 🚀 How to Run the Project

**For this project to work, you must have Node.js installed on your system.**

If you don't have Node.js installed, please visit the [official Node.js website](https://nodejs.org/) to download and install it. You can verify your installation by opening your terminal or command prompt and typing `node -v` and `npm -v`.

**Once Node.js is installed, follow these steps:**

1.  **Save the Code:**
    Save the provided JavaScript code into a file named `hello.js` in a directory of your choice (e.g., `my-node-app/hello.js`).

    ```javascript
    //Please note: I haven't ouputted the results via script npm method in the package.json object under "scripts" as it
    //wasn't specifically requested in the task folder. 

    const  myName = "Neil";
    const X = myName;
    console.log(`Hello ${X}`)
    ```

2.  **Navigate to the Project Directory:**
    Open your terminal or command prompt and navigate to the directory where you saved `hello.js` using the `cd` command.
    ```bash
    cd path/to/your/project/directory
    ```

3.  **Run the Script:**
    Execute the JavaScript file using the `node` command:
    ```bash
    node hello.js
    ```
    *Note: While you could configure an `npm script` (e.g., `"start": "node hello.js"`) in a `package.json` to run this via `npm start`, for this simple example, directly using the `node` command is sufficient and demonstrates direct execution.*

## 📺 Expected Output

After running the command in your terminal, you will see the following output: