# Employee Management System (Capstone Project)

This JavaScript project implements a comprehensive employee management system using Object-Oriented Programming (OOP) principles, specifically focusing on **inheritance**. It defines a base `Employee` class and extends it into three specialized subclasses: `SalariedEmployees`, `HourlyPaidWorkers`, and `HybridEmployees`. The system tracks various employee attributes, evaluates sales targets, and calculates monthly remuneration based on different employment types and performance.

## 🌟 Features

* **`Employee` Superclass:**
    * Serves as the foundational class for all employee types.
    * Includes common attributes: `Name`, `Surname`, `Age`, `SalesTarget`, and `targetReached` (a boolean indicating if the target was met).
    * Provides getter methods (`getTargetAchieved`, `getTargetNotAchieved`) to determine and display target performance.
* **`SalariedEmployees` Subclass:**
    * Extends `Employee` with attributes specific to salaried staff: `basicSalary`, `employmentStatus`, `monthlySales`, and `percentageIncrease` (for bonus calculation).
    * `fixedMonthlySummary()` method calculates and displays the employee's details, fixed income, target status, and an updated salary if the sales target is met.
* **`HourlyPaidWorkers` Subclass:**
    * Extends `Employee` with attributes relevant to hourly workers: `hourlyRate`, `hoursPerMonth`, `employmentStatus`, `monthlySales`, and `percentageIncrease`.
    * `hourlyMonthlySummary()` method calculates and displays the employee's details, hourly earnings, total hours, target status, and an updated salary if the sales target is met.
* **`HybridEmployees` Subclass:**
    * Extends `Employee` for employees with both a basic salary and an hourly component.
    * Includes attributes from both salaried and hourly types: `basicSalary`, `hourlyRate`, `hoursPerMonth`, `employmentStatus`, `monthlySales`, and `percentageIncrease`.
    * `hybridPayMonthlySummary()` method calculates and displays a detailed summary including fixed income, hourly earnings, total salary, target status, and an updated salary if the sales target is met.
* **Inheritance Hierarchy:** Clearly demonstrates how subclasses inherit and extend properties and methods from the `Employee` superclass, promoting code reusability and a logical structure.
* **Sales Target Logic:** Calculates updated salaries/bonuses based on whether an employee's `monthlySales` meet or exceed their `SalesTarget`.
* **Data Formatting:** Uses `toFixed(2)` to ensure all monetary values are displayed with two decimal places.
* **Object Instantiation:** Creates multiple instances (objects) for each employee type to showcase the system's functionality.
* **Console Output:** Prints detailed employee summaries to the console, often using `console.table()` for better readability.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd employee-management-system # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `classes_project.js` is located, and run the script using Node.js:
    ```bash
    node classes_project.js
    ```
4.  **Check Console Output:** The detailed monthly summaries for all predefined employees (salaried, hourly, and hybrid) will be displayed directly in your terminal.