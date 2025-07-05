// Arrays to store objects
let incomeArray = [];
let expenseArray = [];

class IncomeObject {
  constructor(incomeSource, incomeAmount, recurringIncome = true) {
    this.incomeSource = incomeSource;
    this.incomeAmount = incomeAmount;
    this.recurringIncome = recurringIncome;
  }
}

class ExpenseObject {
  constructor(expenseItem, expenseAmount, recurringExpense = true) {
    this.expenseItem = expenseItem;
    this.expenseAmount = expenseAmount;
    this.recurringExpense = recurringExpense;
  }
}

const addFiveIncomeObjects = () => {
    //New predefined incomle object instances pushed to the income array and also 
  //saved in a new sessionStorage 
  const newIncomeObject1 = new IncomeObject("Teaching Income", 10000, true);
  const newIncomeObject2 = new IncomeObject("Events Income", 15000, false);
  const newIncomeObject3 = new IncomeObject("Activations Income", 15000, true);
  const newIncomeObject4 = new IncomeObject("Performances Income", 10000, false);
  const newIncomeObject5 = new IncomeObject("Miscellaneous Income", 15000, false);
  incomeArray.push(newIncomeObject1, newIncomeObject2, newIncomeObject3, newIncomeObject4, newIncomeObject5);
  sessionStorage.setItem("existingIncomeData", JSON.stringify(incomeArray));
};


const addFiveExpenseItems = () => {
  //New predefined expense object instances pushed to the expense array and also 
  //saved in a new sessionStorage 
  const newExpense1 = new ExpenseObject("Vehicle Expense", 5000, true);
  const newExpense2 = new ExpenseObject("F&B Expense", 20000, true);
  const newExpense3 = new ExpenseObject("Housing Expense", 26000, true);
  const newExpense4 = new ExpenseObject("Race Entries Expense", 5000, true);
  const newExpense5 = new ExpenseObject("Miscellaneous Expense", 2000, true);
  expenseArray.push(newExpense1, newExpense2, newExpense3, newExpense4, newExpense5);
  sessionStorage.setItem("existingExpenseData", JSON.stringify(expenseArray));
};

//Add income data function when btn on DOM is clicked, this fnc is fired.

const addIncomeData = () => {
//Get income values from DOM.
  const incomeSource = document.getElementById("incomeSource").value;
  const incomeAmount = parseFloat(document.getElementById("incomeAmount").value);
  const recurringIncomeValue = document.getElementById("recurringIncome").value;
  let recurringIncome = true; // Default value

  if (recurringIncomeValue === "no") {
    recurringIncome = false;
  }

  //Stop execution if user input is not met correctly.
  if (!incomeSource || isNaN(incomeAmount)) {
    alert("Please fill in valid income source and amount.");
    return;
  }

  //New Object instances pushed to the incomeArray and saved to the browser
  //sessionData API using JSON. 
  const newIncomeData = new IncomeObject(incomeSource, incomeAmount, recurringIncome);
  incomeArray.push(newIncomeData);
  sessionStorage.setItem("incomeData", JSON.stringify(incomeArray));

  document.getElementById("incomeSource").value = "";
  document.getElementById("incomeAmount").value = "";
  document.getElementById("recurringIncome").value = "";

  updateIncomeDisplay();
  updateDisposableIncomeDisplay();

  const shouldAddAnother = confirm("Do you want to add another income entry?");
  if (!shouldAddAnother) {
    alert("Thanks for using Budget App.");
  }
};

//Add expense data function when btn on DOM is clicked, this fnc is fired.

//This function follows the same logic as the addIncomeData function above.
const addExpenseData = () => {
  //Get DOM field values
  const expenseItem = document.getElementById("expenseItem").value;
  const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
  const recurringExpenseValue = document.getElementById("recurringExpense").value;
  let recurringExpense = true; // Default value

  if (recurringExpenseValue === "no") {
    recurringExpense = false;
  }

  if (!expenseItem || isNaN(expenseAmount)) {
    alert("Please fill in valid expense item and amount.");
    return;
  }

  //New expense object instances created. 
  const newExpenseData = new ExpenseObject(expenseItem, expenseAmount, recurringExpense);
  expenseArray.push(newExpenseData);
  sessionStorage.setItem("expenseData", JSON.stringify(expenseArray));

  document.getElementById("expenseItem").value = "";
  document.getElementById("expenseAmount").value = "";
  document.getElementById("recurringExpense").value = "";

//Call updatge functions
  updateExpenseDisplay();
  updateDisposableIncomeDisplay();

  const shouldAddAnother = confirm("Do you want to add another expense entry?");
  if (!shouldAddAnother) {
    alert("Thanks for using Budget App.");
  }
};

function updateIncomeDisplay() {
  //Allocate where the info will be displayed in the DOM. This ID is already created in the DOM.
  const arrayList = document.getElementById("incomeList");
  //Clear existing content in the UL.
  arrayList.innerHTML = "";
  //Loop through the income array and assig iteration value to new variable incomeSourceData.
  for (let i = 0; i < incomeArray.length; i++) {
    const incomeSourceData = incomeArray[i];
    //Conver boolean value to text. Courtesy of OpenAI.
    const recurringIncomeText = incomeSourceData.recurringIncome ? "Yes" : "No";
    //DOM event creating new lists saved to vriable lisItem.
    const listItem = document.createElement("li");
    //Format the Income amount with 2 decimal places.
    const formattedIncomeAmount = parseFloat(
      incomeSourceData.incomeAmount
    ).toFixed(2);
    //Add text content to the LI and populate with Income Data.
    listItem.textContent = `Income from: ${incomeSourceData.incomeSource} 
    Income total: R${formattedIncomeAmount}. Recurring Income: ${recurringIncomeText}`;
    //Append the info to the UL in the DOM.
    arrayList.appendChild(listItem);
  }
}

//This function follows the same logic as the updateIncomeDisplay() above.
function updateExpenseDisplay() {
  const arrayList = document.getElementById("expenseList");
  arrayList.innerHTML = "";

  for (let i = 0; i < expenseArray.length; i++) {
    const expenseItemData = expenseArray[i];
    const recurringExpenseText = expenseItemData.recurringExpense
      ? "Yes"
      : "No";

    const listItem = document.createElement("li");
    const formattedExpenseAmount = parseFloat(
      expenseItemData.expenseAmount
    ).toFixed(2);
    listItem.textContent = `Expense for: ${expenseItemData.expenseItem} 
    Expense total: R${formattedExpenseAmount}. Recurring Expense: ${recurringExpenseText}`;

    arrayList.appendChild(listItem);
  }
}

function updateDisposableIncomeDisplay() {
  //Get HTML elements to display data.
  const disposableIncomeElement = document.getElementById("disposableIncome");
  const savingsDisplayElement = document.getElementById("savings");
  //Callback function that uses the reduce method on the array to target a single value,
  //and in this case, the income value of each object. Variable totalIncomeAmount is assigned with
  //a callback fnc that has 2 arguments namely total, which holds the value from 0 and every updated itiration
  //therefter and income, which represents each income object. After the user is done
  //the totals are added up. The 0 at teh end states teh increments start at 0. Solution courtesy of OpenAI.
  const totalIncomeAmount = incomeArray.reduce(
    (total, income) => total + parseFloat(income.incomeAmount),
    0
  );
  //The same logic is applied here for the expense tally as above.
  const totalExpenseAmount = expenseArray.reduce(
    (total, expense) => total + parseFloat(expense.expenseAmount),
    0
  );

  //Calculate the disposable income.
  const disposableIncome = totalIncomeAmount - totalExpenseAmount;
  //Set the text for teh dispoable income.
  disposableIncomeElement.textContent = `Disposable Income: R${disposableIncome.toFixed(
    2
  )}`;

  if (disposableIncome >= 0) {
    //Inline CSS to highlight positibe and negative balances.
    disposableIncomeElement.style.color = "green";
    disposableIncomeElement.textContent += " (Positive)";
  } else {
    disposableIncomeElement.style.color = "red";
    disposableIncomeElement.textContent = "No disposable income available.";
  }
  //This solution was tricky and I got a lot of assistance from OpenAI with this function.
}

//Calculate the savings amount
function calculateWithSavings() {
  //Assign the DOM value entered to savingsAmount.
  sessionStorage.setItem("savingsAmount", JSON.stringify(incomeArray));
  const savingsAmount = parseFloat(
    document.getElementById("savingsAmount").value
  );

  //Check if input is a valid number, if not, exit.
  if (isNaN(savingsAmount)) {
    alert("Please enter a valid number for savings.");
    return;
  }

  
  //Get DOM elements for displaying data
  const disposableIncomeElement = document.getElementById("disposableIncome");
  const savingsDisplayElement = document.getElementById("savings");

  //// Calculate the total income amount from the incomeArray as with the reduce method mentioned
  //earlier.
  const totalIncomeAmount = incomeArray.reduce(
    (total, income) => total + parseFloat(income.incomeAmount),
    0
  );
  const totalExpenseAmount = expenseArray.reduce(
    (total, expense) => total + parseFloat(expense.expenseAmount),
    0
  );

  // Calculate the disposable income after savings
  const disposableIncome =
    totalIncomeAmount - totalExpenseAmount - savingsAmount;
  //Set display text content.
  disposableIncomeElement.textContent = `Disposable Income: R${disposableIncome.toFixed(
    2
  )}`;

  //Set condition if expsenses are higher than income.
  if (disposableIncome >= 0) {
    disposableIncomeElement.style.color = "green";
    disposableIncomeElement.textContent += " (Positive)";
  } else {
    disposableIncomeElement.style.color = "red";
    disposableIncomeElement.textContent = "No disposable income available.";
  }
  //Set display text content.
  savingsDisplayElement.textContent = `Savings: R${savingsAmount.toFixed(2)}`;

  // Store the displayed savings amount in session storage.
  sessionStorage.setItem("displayedSavingsAmount", JSON.stringify(savingsAmount));
}


// Retrieve the stored income data from the session storage using this event listener
//and the anonymous arrow function that gets triggered when the DOM content is loaded.
document.addEventListener("DOMContentLoaded", () => {

// Add predefined income objects to incomeArray
  addFiveIncomeObjects();
// Add predefined expense objects to expenseArray
  addFiveExpenseItems();

  //Variable storedIncomeData is parsed by JSON to turn the data from a string
  //back into an object for Javascript on the following conditions that checks if the
  //there is stored income data. If there is, the data is parsed and pushed to the array.
  const storedIncomeData = sessionStorage.getItem("incomeData");
  if (storedIncomeData) {
    incomeArray = JSON.parse(storedIncomeData);
    updateIncomeDisplay();
  }

  //Same logic for the expense array.
  const storedExpenseData = sessionStorage.getItem("expenseData");
  if (storedExpenseData) {
    expenseArray = JSON.parse(storedExpenseData);
    updateExpenseDisplay();
  }
  updateDisposableIncomeDisplay();
});