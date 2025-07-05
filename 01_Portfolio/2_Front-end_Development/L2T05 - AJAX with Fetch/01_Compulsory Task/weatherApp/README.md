# Cycling Weather App

This project is a simple web application designed to fetch and display specific weather data relevant for cycling decisions from the Open-Meteo API. It allows users to check key weather metrics for a predefined location and date by clicking a button, presenting the information dynamically on the web page.

## 🌟 Features

* **API Integration:** Fetches weather forecast data from the [Open-Meteo API](https://open-meteo.com/).
* **Specific Weather Metrics:** Retrieves and displays essential weather details including:
    * Max and Min Temperatures
    * Total Rain and Showers Sum
    * Max Wind Speed and Max Wind Gusts
* **Asynchronous Operations:** Utilizes modern JavaScript `async`/`await` syntax for handling the API request, ensuring a non-blocking user experience.
* **User-Triggered Fetch:** Weather data is fetched and updated when the user clicks a dedicated "CHECK WEATHER" button.
* **Dynamic Display:** Manipulates the DOM to present the fetched weather information in an easy-to-read list format.
* **Error Handling:** Includes basic `try...catch` block to gracefully handle potential network or API errors.
* **Bootstrap Styling:** Integrates Bootstrap 5 for responsive design and component styling (e.g., buttons, containers).
* **No API Key Required:** The Open-Meteo API generally does not require an API key for basic usage, simplifying setup.

## 📁 Project Structure

The project consists of three main files:

* `index.html`: The main HTML file that provides the structure of the weather application, including a title, a trigger button, and an unordered list (`<ul>`) where the weather data will be displayed. It also links to Bootstrap's CSS/JS and your custom JavaScript and CSS.
* `weatherScript.js`: Contains all the JavaScript logic for making the API fetch request, parsing the JSON response, handling errors, and dynamically updating the HTML content with the weather information.
* `stylesheet-weather.css`: (Assumed from HTML link) Contains custom CSS rules for additional styling beyond Bootstrap, specific to the weather app's layout and appearance.

## 🚀 How to Run the Project

This is a front-end web application. To run it, simply open the `index.html` file in your web browser.

1.  **Ensure Project Files are Present:**
    Make sure you have `index.html`, `weatherScript.js`, and `stylesheet-weather.css` (if you have one, or ensure the link is removed if not) all in the same directory. The `index.html` should correctly link to these files and Bootstrap's CDN links.

2.  **Open in Browser:**
    Navigate to the directory where you saved the files. Double-click `index.html` or drag-and-drop it into your web browser (e.g., Google Chrome, Firefox, Edge).

3.  **Interact with the Application:**
    * Click the "CHECK WEATHER" button.
    * The weather data for the predefined location (Cape Town) and date will appear below the button.

## 💡 Notes & Potential Improvements

* **Fixed Date:** The current API request is hardcoded to fetch weather data for `2023-08-19`. To make the app display current weather, you would need to dynamically set the `start_date` and `end_date` parameters in the `fetchUrl` to the current date.
* **Fixed Location:** The latitude (`-33.9258`) and longitude (`18.4232`) are hardcoded for Cape Town. To make the app more versatile, you could add an input field for users to enter a city or use a geolocation API to detect their current location.
* **Styling:** Ensure your `stylesheet-weather.css` is present and correctly linked to apply the intended custom styling.