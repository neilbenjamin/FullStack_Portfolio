# Node.js Fetch Example with `isomorphic-fetch`

This project demonstrates how to perform asynchronous network requests in a Node.js environment using the familiar `fetch` API, which is typically found in web browsers. Since `fetch` is not natively global in Node.js, this example utilizes the `isomorphic-fetch` library to provide fetch capabilities, ensuring a consistent API experience across both client-side and server-side JavaScript. The code fetches a specific image URL from `thecatapi.com` and logs its URL to the console.

## 🌟 Features

* **Node.js Environment:** Designed to run server-side using Node.js, demonstrating server-side data fetching.
* **`isomorphic-fetch` Integration:** Explicitly uses `require("isomorphic-fetch")` to bring the `fetch` API into the Node.js global scope, making it behave like `fetch` in a browser. This is crucial for running `fetch`-based code outside of a browser.
* **Asynchronous Operations with `async`/`await`:**
    * The `apiFunction` is declared as an `async` function, allowing the use of the `await` keyword.
    * `await fetch(...)` pauses the execution of the function until the network request completes and the promise resolves, simplifying asynchronous code flow by making it read more synchronously.
* **API Interaction:** Makes an HTTP GET request to `https://cdn2.thecatapi.com/images/4mk.gif` to retrieve an image resource.
* **Resource URL Logging:** After successfully fetching the resource, the code accesses and logs the `url` property of the `Response` object, showcasing how to get the final URL of a fetched resource.
* **Module Management:** The presence of `package.json` and `package-lock.json` indicates proper Node.js project setup and dependency management.

## 🚀 How to Run the Project

To run this project, you need Node.js installed on your system and the project's dependencies managed via `npm` (Node Package Manager).

1.  **Ensure Node.js is Installed:**
    If you don't have Node.js installed, download and install it from the official website: [Node.js Downloads](https://nodejs.org/en/download/).

2.  **Initialize the Project (if starting from scratch):**
    If you're creating a new project folder and only have the `task01.js` file, you'll first need to initialize an npm project to create the `package.json` file.
    Open your terminal or command prompt, navigate to your project's root directory, and run:
    ```bash
    npm init -y
    ```
    This will create a default `package.json` file.

3.  **Navigate to the Project Directory:**
    If you already have `package.json` and `package-lock.json`, just navigate to the project's root directory (where these files and `task01.js` are located).

4.  **Install Dependencies:**
    Run the following command to install `isomorphic-fetch` and any other dependencies listed in `package.json`:
    ```bash
    npm install
    ```
    This command will read your `package.json` (and `package-lock.json` if present) and install the necessary modules into a `node_modules` folder.

5.  **Run the JavaScript File:**
    After the dependencies are installed, execute the JavaScript file using Node.js:
    ```bash
    node task01.js
    ```
    You will see the URL of the fetched image printed directly in your terminal.

## 📁 Project Structure & Sharing Best Practices

When sharing or deploying this Node.js project (e.g., via a version control system like Git, or by transferring files manually):

* **Do include:** Your JavaScript source files (`.js`), `package.json`, and `package-lock.json`. These files are small and essential for defining and reproducing your project's dependencies.
* **Do NOT include:** The `node_modules/` folder. This directory contains all the installed packages and can be very large (often hundreds of megabytes or more). It also contains platform-specific binaries and compiled code, which are generally not portable between different operating systems or architectures. The `node_modules` folder should always be *generated* on each machine where the project is set up.

To set up the project on a new machine after transfer (e.g., from a Git repository):

1.  Navigate to the project's root directory in your terminal.
2.  Run `npm install`. This command will read `package.json` and `package-lock.json` to download and install all necessary dependencies into a new `node_modules` folder on that machine, ensuring you have the correct and consistent environment to run the project.