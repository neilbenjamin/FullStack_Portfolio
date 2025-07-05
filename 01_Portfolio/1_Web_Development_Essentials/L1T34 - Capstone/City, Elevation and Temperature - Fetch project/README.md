# City Information & Weather Fetcher (Capstone Project)

This project demonstrates making multiple asynchronous API requests to retrieve and display information about a specific city (Cape Town in this case), including its `wikiDataId`, elevation, population, and current weather temperature. It serves as a practical example of consuming external APIs using modern JavaScript `async/await` syntax and handling the resulting data.

## ⚠️ Security Warning: Hardcoded API Key

**Important:** This code contains **hardcoded API keys** directly within the JavaScript file (`X-RapidAPI-Key`). **This is a significant security risk.** In a production environment or any publicly shared code, API keys should always be handled securely, preferably by:

* Using **environment variables** (e.g., `.env` files in Node.js applications).
* Implementing a **server-side proxy** to make API calls, thus preventing the keys from being exposed in client-side code.

## 🌟 Features

* **Multiple `fetch` Requests:** The application performs three distinct API calls to gather comprehensive city data:
    1.  **City Search by Name:** Fetches city details using a name prefix and country/region to find the specific `wikiDataId` for "Cape Town".
    2.  **City Details by `wikiDataId`:** Uses the determined `wikiDataId` to retrieve further information about Cape Town, such as its elevation and population.
    3.  **Current Weather by Coordinates:** Fetches the current temperature for Cape Town using its latitude and longitude.
* **Asynchronous JavaScript with `async`/`await`:** All API interactions are handled using the modern `async`/`await` syntax, which simplifies asynchronous code, making it more readable and easier to manage than traditional Promise chaining.
* **API Consumption:** Interacts with two external APIs:
    * **RapidAPI GeoDB Cities API:** Used for geographical and demographic city data.
    * **RapidAPI Weatherbit API:** Used for current weather conditions.
* **Data Extraction & Display:** Parses the JSON responses from the APIs and extracts specific data points (e.g., `wikiDataId`, `elevationMeters`, `population`, `temp`) for display in the console.
* **Error Handling:** Each `fetch` operation is wrapped in a `try...catch` block to gracefully handle potential network errors or API response issues, logging them to the console.
* **Asynchronous Execution Demonstration:** Includes a `console.log` statement that executes immediately, demonstrating the non-blocking nature of asynchronous `fetch` calls, which run in the background.

## ⚠️ Note on Sequential Execution (using `setTimeout`)

The current implementation uses `setTimeout` calls with fixed delays to sequence the API requests. While this works in a demonstration, it is **not a robust or recommended pattern** for dependent asynchronous operations in real-world applications. A more robust approach would involve:

* Properly chaining `async` functions (e.g., `await getCityName(); await getCity(); await getCityWeather();` within a single controlling `async` function).
* Passing data (like the `wikiDataId`) directly between `async` functions as return values or parameters.

## 🚀 How to Run the Project

This project makes API calls over the internet. It is intended to be run in a Node.js environment.

1.  **Ensure Node.js is Installed:**
    If you don't have Node.js installed, download and install it from the official website: [Node.js Downloads](https://nodejs.org/en/download/).

2.  **Initialize the Project (if starting from scratch):**
    If you're creating a new project folder and only have this JavaScript file, you'll first need to initialize an npm project to create the `package.json` file.
    Open your terminal or command prompt, navigate to your project's root directory, and run:
    ```bash
    npm init -y
    ```
    This will create a default `package.json` file.

3.  **Install Dependencies:**
    This code uses the `fetch` API, which is not globally available in all Node.js versions without a polyfill like `isomorphic-fetch`. To ensure compatibility, install it:
    ```bash
    npm install isomorphic-fetch
    ```
    *Note: If you run this file directly with a recent Node.js version (v18+), `fetch` is often available globally, and `isomorphic-fetch` might not be strictly necessary, but including it ensures broader compatibility for demonstration purposes.*

4.  **Run the JavaScript File:**
    Execute the JavaScript file using Node.js:
    ```bash
    node your-script-name.js # Replace 'your-script-name.js' with the actual filename
    ```
    You will see the various city details and weather information printed in your terminal as the `fetch` requests complete.

## 📁 Project Structure & Sharing Best Practices

When sharing or deploying this Node.js project (e.g., via a version control system like Git, or by transferring files manually):

* **Do include:** Your JavaScript source files (`.js`), `package.json`, and `package-lock.json`. These files are small and essential for defining and reproducing your project's dependencies.
* **Do NOT include:** The `node_modules/` folder. This directory contains all the installed packages and can be very large (often hundreds of megabytes or more). It also contains platform-specific binaries and compiled code, which are generally not portable between different operating systems or architectures. The `node_modules` folder should always be *generated* on each machine where the project is set up.

To set up the project on a new machine after transfer (e.g., from a Git repository):

1.  Navigate to the project's root directory in your terminal.
2.  Run `npm install`. This command will read `package.json` and `package-lock.json` to download and install all necessary dependencies into a new `node_modules` folder on that machine, ensuring you have the correct and consistent environment to run the project.