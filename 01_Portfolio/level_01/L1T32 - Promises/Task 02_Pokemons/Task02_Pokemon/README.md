# JavaScript `fetch` API Example (Pokémon Data)

This project showcases a practical application of the **JavaScript `fetch` API** to retrieve and display data from a public RESTful API. Specifically, it fetches information about the Pokémon "Mankey" from the [PokeAPI](https://pokeapi.co/), demonstrating how to make an asynchronous network request, parse JSON responses, and extract specific data points, including iterating over nested arrays.

## 🌟 Features

* **`fetch` API Integration:** Uses the built-in `fetch` API to make an HTTP GET request to a specific endpoint of the PokeAPI (`https://pokeapi.co/api/v2/pokemon/mankey/`).
* **Promise-Based Asynchronous Handling:**
    * Employs `.then()` to handle the successful response from the API. The first `.then()` converts the raw `Response` object into a JSON (JavaScript object) using `response.json()`.
    * The second `.then()` receives the parsed `data` object, ready for processing.
* **Targeted Data Extraction:** Demonstrates how to access specific properties from the received JSON data, such as the Pokémon's `name` and `weight`.
* **Array Iteration with `forEach()`:** Shows how to effectively loop through a nested array (the `abilities` array within the Pokémon data) using the `forEach()` method with a callback function to extract and log each ability's name. This highlights a common pattern for processing lists of items from an API.
* **Error Handling (`.catch()`):** Includes a `.catch()` block to gracefully handle any potential errors that may occur during the fetch operation (e.g., network issues, invalid URL), providing informative feedback in the console.
* **Console Output:** Displays the extracted Pokémon details directly in the browser's developer console, making it easy to see the results of the API call.

## 🚀 How to Run the Project

This project uses the `fetch` API, which is a Web API. Therefore, it needs to be run within a web browser environment.

1.  **Save the Code:** Save the provided JavaScript code into a file named, for example, `pokemon_fetch.js`.
2.  **Create an HTML File:** Create an `index.html` file in the same directory as your `pokemon_fetch.js`.
3.  **Link the JavaScript File:** In your `index.html`, add a `<script>` tag referencing your JavaScript file just before the closing `</body>` tag:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pokémon Fetch</title>
    </head>
    <body>
        <h1>Pokémon Data Fetch Example</h1>
        <p>Open your browser's console (F12) to see the Pokémon details.</p>

        <script src="pokemon_fetch.js"></script>
    </body>
    </html>
    ```
4.  **Open in Browser:** Open the `index.html` file in your web browser (e.g., Google Chrome, Firefox, Edge).
5.  **Check Console:** Open your browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect" or "Inspect Element"), navigate to the "Console" tab, and you will see the name, weight, and a list of abilities for Mankey printed there.