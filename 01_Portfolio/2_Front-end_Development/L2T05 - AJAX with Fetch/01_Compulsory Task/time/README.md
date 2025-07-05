# Digital Clock Display

This project is a simple, client-side digital clock that displays the current time (hours, minutes, and seconds) in real-time. It's built entirely with HTML and JavaScript, demonstrating basic DOM manipulation and interval-based updates.

## 🌟 Features

* **Real-time Clock:** Displays the current local time that updates every second.
* **Precise Formatting:** Uses JavaScript's `padStart()` method to ensure hours, minutes, and seconds are always displayed with two digits (e.g., `09:05:01`).
* **DOM Manipulation:** Dynamically updates an HTML element to reflect the current time.
* **`setInterval` Usage:** Employs the `setInterval` function to continuously update the clock display without requiring page refreshes.
* **Immediate Display:** The clock updates immediately upon page load to avoid an initial delay.

## 📁 Project Structure

The project consists of two main files:

* `index.html`: The main HTML file that provides the structure for the clock display. It includes an element with the `id="clock"` where the time will be rendered.
* `script.js` (or your chosen JS filename): Contains the JavaScript logic for getting the current time, formatting it, and updating the HTML element every second.

## 🚀 How to Run the Project

This is a front-end web application. To run it, simply open the `index.html` file in your web browser.

1.  **Open in Browser:**
    Navigate to the directory where you saved the files. Double-click `index.html` or drag-and-drop it into your web browser (e.g., Google Chrome, Firefox, Edge).

2.  **Observe Output:**
    You will see a digital clock displaying the current time, updating every second.