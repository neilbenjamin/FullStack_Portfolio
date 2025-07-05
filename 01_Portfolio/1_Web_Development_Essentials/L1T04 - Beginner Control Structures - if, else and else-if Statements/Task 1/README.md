# Water Tariff Calculator

A web-based JavaScript application designed to calculate water utility costs based on tiered consumption rates. Users enter their monthly water usage in litres, and the program determines the total bill according to a progressive tariff structure.

## 🌟 Features

* **Tiered Pricing Logic:** Implements a complex conditional structure to apply different tariff rates based on predefined consumption brackets.
* **User Input:** Prompts the user to enter their water consumption in litres.
* **Cost Calculation:** Performs precise calculations, including conversion from litres to kilolitres and summing costs across multiple tiers.
* **Instant Billing:** Displays the calculated amount owed to the council in an immediate alert box.
* **Browser-Based Interaction:** Utilizes standard browser `prompt()` and `alert()` functions for user interaction and output.

## 🚀 How to Run the Project

This project runs directly in a web browser.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd water-tariff-calculator # Or whatever your project folder is named
    ```
2.  **Open in Browser:** Locate the `index.html` file in the project directory.
    * You can simply drag and drop the `index.html` file into an open Google Chrome (or any modern web browser) window.
    * Alternatively, double-click the `index.html` file, and it should open in your default browser.
3.  **Follow Prompts:** Once the page loads, an interactive prompt will appear. Follow the on-screen instructions in the browser to enter your water usage.
4.  **View Alert:** The calculated tariff amount will be displayed in an alert box.

## 📝 Notes

* **Tariff Structure Complexity:** The JavaScript code implements a progressive water tariff system with distinct price brackets:
    * 0 - 6,000 litres: R15.73 per 1,000 litres
    * 6,001 - 10,500 litres: R22.38 per 1,000 litres (for usage in this tier, plus base cost of previous tier)
    * 10,501 - 35,000 litres: R31.77 per 1,000 litres (for usage in this tier, plus base costs of previous tiers)
    * Above 35,000 litres: R69.76 per 1,000 litres (for usage in this tier, plus base costs of previous tiers)
* **Mathematical Approach:** The implementation uses sequential `if/else if` statements to determine the correct tariff bracket and then calculates the cost by summing the base charges from lower tiers with the cost of the "remainder" water consumed within the current tier. While functional, managing numerous tiers in this manner can become extensive. More advanced solutions often involve using arrays or objects to store tariff rates and loop through them, which can make the code more scalable and easier to maintain for complex pricing structures.