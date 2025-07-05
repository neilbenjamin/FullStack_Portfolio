# JavaScript `fetch` API Example (Affirmations)

This project demonstrates the use of the **JavaScript `fetch` API** to make an asynchronous network request to an external API endpoint. It showcases essential concepts of modern JavaScript, including promise-based asynchronous programming, handling API responses, and robust error management. This particular example highlights how to attempt a `fetch` request and, importantly, how to catch and log potential network-related errors, such as **CORS (Cross-Origin Resource Sharing)** issues, which are a common challenge when interacting with external APIs from a browser.

## 🌟 Features

* **`fetch` API Usage:** Illustrates the fundamental syntax for initiating an HTTP GET request to `https://www.affirmations.dev/`.
* **Promise Chaining (`.then()`):** Demonstrates how to handle asynchronous operations using promise chaining.
    * The first `.then()` block processes the initial `Response` object received from the server, converting the response body into a JavaScript object using `response.json()`.
    * The second `.then()` block then receives the parsed JSON data, which is subsequently logged to the console.
* **Robust Error Handling (`.catch()`):** Includes a `.catch()` block to gracefully handle any errors that occur during the `fetch` operation, whether it's a network error, a parsing error, or a CORS policy violation. This ensures that the application doesn't crash and provides informative feedback in the console.
* **Asynchronous Programming:** Highlights the asynchronous nature of `fetch`, where the network request runs in the background without blocking the main execution thread.
* **API Interaction:** Shows a practical attempt to retrieve data from a public API endpoint.

## ⚠️ Note on Expected Behavior (CORS Error)

The target API (`https://www.affirmations.dev/`) may enforce CORS policies that prevent direct fetching from different origins (like a local `file://` or a different `http://localhost` port) without specific server-side configuration. As noted in the code comments, you might encounter a **CORS error** in your browser's console when running this code. This is a security feature implemented by web browsers to prevent malicious cross-origin requests.

The `.catch()` block in the provided code is specifically designed to capture and display such errors, making it a valuable learning point for understanding common web security restrictions when working with APIs.

## 🚀 How to Run the Project

This project uses the `fetch` API, which is a Web API. Therefore, it *must* be run within a web browser environment.

1.  **Save the Code:** Save the provided JavaScript code into a file named, for example, `affirmations_fetch.js`.
2.  **Create an HTML File:** Create an `index.html` file in the same directory as your `affirmations_fetch.js`.
3.  **Link the JavaScript File:** In your `index.html`, add a `<script>` tag referencing your JavaScript file just before the closing `</body>` tag:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fetch API Example</title>
    </head>
    <body>
        <h1>Affirmations Fetch Example</h1>
        <p>Open your browser's console (F12) to see the fetch result or any errors.</p>

        <script src="affirmations_fetch.js"></script>
    </body>
    </html>
    ```
4.  **Open in Browser:** Open the `index.html` file in your web browser (e.g., Google Chrome, Firefox, Edge).
5.  **Check Console:** Open your browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect" or "Inspect Element"), and navigate to the "Console" tab. You will see either the fetched affirmation (if CORS allows it) or the "Could not complete the fetch. Error:" message, often followed by a CORS-related error.