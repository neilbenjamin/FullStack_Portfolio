# Shoe Inventory Management System (Classes & Objects)

This JavaScript project demonstrates Object-Oriented Programming (OOP) principles by creating a `Shoes` class to manage a collection of shoe inventory items. The class includes a constructor for creating shoe objects and several static methods for performing common inventory operations such as searching for a shoe, editing its attributes, finding the lowest/highest value items, and arranging the inventory by value.

## 🌟 Features

* **`Shoes` Class:** Defines a blueprint for shoe objects with properties like `Name`, `ProductCode`, `Quantity`, and `ValuePerItem`.
* **Constructor:** Initializes new `Shoes` instances with provided attributes.
* **`searchShoe()` Method:** A static method that searches for a shoe by name within an array of `Shoes` objects and reports if it's in stock.
* **`editShoe()` Method:** A static method allowing the modification of a specific attribute (e.g., `ValuePerItem`) for a given shoe instance. It includes a check for valid attributes.
* **`findLowestValuePerItem()` Method:** A static method that identifies and logs the name of the shoe with the lowest value per item in the inventory.
* **`findHighestValuePerItem()` Method:** A static method that identifies and logs the name of the shoe with the highest value per item in the inventory.
* **`arrangeByValuePerItem()` Method:** A static method that sorts the array of shoes in ascending order based on their `ValuePerItem` and then logs their names.
* **Object-Oriented Design:** Showcases the benefits of encapsulating data and behavior within a class structure, promoting code organization and reusability.
* **Console Output:** All method results are printed directly to the console.

## 🚀 How to Run the Project

This project is designed to be executed directly in a JavaScript runtime environment, such as Node.js.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd shoe-inventory-manager # Or whatever your project folder is named
    ```
2.  **Install Node.js (if you don't have it):** If you don't already have Node.js installed on your system, you'll need it to run JavaScript files directly from your terminal. You can download it from [Node.js Official Website](https://nodejs.org/).
3.  **Execute the Script:** Open your terminal or command prompt, navigate to the project directory where `classes1.js` is located, and run the script using Node.js:
    ```bash
    node classes1.js
    ```
4.  **Check Console Output:** The results of the various shoe inventory operations (search, edit confirmation, lowest/highest value shoes, and sorted list) will be displayed directly in your terminal.