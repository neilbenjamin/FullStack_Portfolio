# Personal Budget Tracker

This project is a client-side web application designed to help users track their income and expenses, calculate their disposable income, and manage savings. It features dynamic forms for data entry, real-time updates of income and expense lists, and a clear display of financial summaries. Data is persisted across browser sessions using `sessionStorage`.

## 🌟 Features

* **Income Tracking:** Users can input details for various income sources, including the amount and whether it's recurring.
* **Expense Tracking:** Users can input details for different expense items, including the amount and whether it's recurring.
* **Dynamic Lists:** Both income and expense entries are displayed in separate, dynamically updated lists on the page.
* **Disposable Income Calculation:** The application automatically calculates and displays the user's disposable income (Total Income - Total Expenses), providing visual feedback (green for positive, red for negative/no disposable income).
* **Savings Management:** Users can enter a desired savings amount, and the application will recalculate the disposable income after deducting this savings target.
* **Data Persistence:** All entered income and expense data, along with the last entered savings amount, are stored in the browser's `sessionStorage`, meaning the data will remain even if the page is refreshed. Data is pre-loaded with five sample income and five sample expense items upon initial load.
* **Input Validation:** Basic validation is in place to ensure that income sources, expense items, and amounts are filled in correctly.
* **Object-Oriented Data:** Income and expense entries are managed as instances of `IncomeObject` and `ExpenseObject` classes, respectively, providing a structured way to handle data.

## 📁 Project Structure

The project consists of two main files:

* `index.html`: The main HTML file that provides the structure of the budget application, including forms for income and expenses, display areas for lists, disposable income, and savings.
* `script.js`: Contains all the JavaScript logic for handling user input, managing `incomeArray` and `expenseArray`, performing calculations, interacting with `sessionStorage` for data persistence, and dynamically updating the DOM.

## 🚀 How to Run the Project

This is a front-end web application. To run it, simply open the `index.html` file in your web browser.

1.  **Ensure Project Files are Present:**
    Make sure you have `index.html` and `script.js` in the same directory.

2.  **Open in Browser:**
    Navigate to the directory where you saved the files. Double-click `index.html` or drag-and-drop it into your web browser (e.g., Google Chrome, Firefox, Edge).

3.  **Interact with the Application:**
    * **Add Income/Expense:** Fill in the respective forms and click "SUBMIT". The new entry will appear in the list, and disposable income will update. You'll be prompted if you wish to add another.
    * **Calculate Savings:** Enter a number in the "Enter Savings Amount" field and click "Calculate Savings". The disposable income will be adjusted, and the savings amount will be displayed.
    * **Persistence:** Refresh the page. You will see the pre-defined items and any items you added during the session (until you close the browser tab/session).

## 💡 Notes & Potential Improvements

* **Data Persistence Scope:** `sessionStorage` is used, which means data persists only for the duration of the browser session (until the tab or browser is closed). For permanent data storage, a more robust solution like `localStorage` (for client-side persistence) or a backend database (for server-side persistence) would be required.
* **ID Duplication:** The `id="prompt-box"` is used on both "Income SUBMIT" and "Expense SUBMIT" buttons. While `onclick` handlers still work in this case, `id` attributes should generally be unique in an HTML document for best practice and reliable DOM manipulation with methods like `getElementById`.
* **Initial Data Loading:** The `<body>` tag includes `onload="loadExistingData()"`, but no function with this exact name is defined in `script.js`. Instead, the initial data loading (adding predefined items and retrieving from session storage) is handled by a `DOMContentLoaded` event listener, which is a more robust approach.
* **Savings Calculation Logic:** The `calculateWithSavings()` function currently stores the entire `incomeArray` into `sessionStorage` under the key `"savingsAmount"`, which seems unintended. It should likely store just the `savingsAmount` itself. Additionally, the displayed savings amount is only updated when the "Calculate Savings" button is clicked, and is not automatically loaded if the user reloads the page (only `disposableIncome` is recalculated based on loaded income/expense).
* **Styling:** No separate `stylesheet.css` file was provided in the prompt. Users might want to add custom CSS to enhance the visual appeal and layout of the application.