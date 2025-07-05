# Course Management System (Inheritance Demonstration)

This JavaScript project illustrates the core concept of **inheritance** in Object-Oriented Programming (OOP). It defines a `Courses` superclass and extends it with a `Subjects` subclass, demonstrating how subclasses can inherit properties and methods from their superclass while also introducing their own unique attributes and behaviors. The system is designed to manage information about educational courses and their individual subjects.

## 🌟 Features

* **`Courses` Superclass:**
    * Acts as the base class for general course information.
    * Includes `courseName` and `contactWebsite` as fundamental properties.
    * Features a getter method `getDisplayContactWebsite` to access the contact website.
* **`Subjects` Subclass:**
    * **Inherits from `Courses`:** Extends the `Courses` superclass, demonstrating the `extends` keyword.
    * **`super()` Call:** Uses `super()` in its constructor to correctly initialize inherited properties from the `Courses` superclass.
    * **New Properties:** Adds specific subject-related attributes: `subjectChoice`, `courseDuration`, and `coursePrice`.
    * **`getSubjectOverview` Method:** A getter method that provides a comprehensive overview of a subject, combining inherited and new properties into a readable string.
* **Object Instantiation:** Demonstrates how to create instances (objects) of both the superclass (`webDevCourse`) and the subclass (`html`, `css`, `javaScript`).
* **Code Reusability:** Highlights how inheritance promotes code reusability by allowing `Subjects` to leverage the `Courses` class's constructor logic and potential future methods without duplicating code.
* **Console Output:** Displays the detailed subject overview directly to the console.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd course-management-inheritance # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `inheritance.js` is located, and run the script using Node.js:
    ```bash
    node inheritance.js
    ```
4.  **Check Console Output:** The subject overview for `javaScript` (as defined in the code) will be displayed directly in your terminal.