# Email Inbox Management System (Classes & OOP)

This JavaScript project simulates a basic email inbox management system, leveraging Object-Oriented Programming (OOP) principles through the use of a custom `Email` class. It allows users to manage emails within an inbox, performing common operations such as adding new emails, reading messages, marking emails as read or spam, viewing categorized lists, and deleting emails.

## 🌟 Features

* **`Email` Class:** Defines the structure for an email, encapsulating properties like `hasBeenRead` (boolean, defaults to `false`), `emailContents` (string), `isSpam` (boolean, defaults to `false`), and `fromAddress` (string).
* **Instance Methods:** The `Email` class includes methods (`markAsRead()`, `markAsSpam()`) to easily change the status of individual email objects.
* **Centralized Inbox:** Maintains an `inbox` array that stores all `Email` objects, simulating an email client's inbox.
* **Core Email Operations:**
    * **Add Email:** `addNewEmail()` allows users to compose and send new emails to the inbox.
    * **Read Email:** `getEmail()` lets users select and view an email by its index, automatically marking it as read.
    * **Mark as Spam:** `getSpamEmail()` enables users to mark specific emails as spam.
    * **Delete Email:** `deleteEmail()` removes an email from the inbox by its index.
* **Inbox Statistics & Views:**
    * `getCount()`: Provides the total number of messages in the inbox and lists their contents.
    * `getUnreadMessages()`: Displays a count and list of all unread emails.
    * `getSpamMessages()`: Displays a count and list of all emails marked as spam.
* **Interactive Menu:** A command-line interface powered by `prompt()` guides the user through various options.
* **Input Validation:** Basic checks are included to ensure valid numeric input when selecting email indices.

## 🚀 How to Run the Project

This project runs interactively in a web browser.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd email-inbox-manager # Or whatever your project folder is named
    ```
2.  **Open in Browser:** Locate the `index.html` file (assuming you have one linked to `classes2.js`) in the project directory.
    * You can simply drag and drop the `index.html` file into an open Google Chrome (or any modern web browser) window.
    * Alternatively, double-click the `index.html` file, and it should open in your default browser.
3.  **Follow Prompts:** Once the page loads, an interactive menu will appear. Choose an option by entering the corresponding number (1-7) and follow the subsequent prompts.
4.  **View Results:** Actions and results (like email counts, message content, or deletion confirmations) will be displayed via `alert` boxes and in your browser's developer console (usually by pressing `F12` or right-clicking and selecting "Inspect" -> "Console").