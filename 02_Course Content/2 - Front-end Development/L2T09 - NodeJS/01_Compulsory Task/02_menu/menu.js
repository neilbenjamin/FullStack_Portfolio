//Please note: I haven't ouputted the results via script npm method in the package.json object under "scripts" as it
//wasn't specifically requested in the task folder. 

const item1 = "Pasta";
const item2 = "Fruit";
const item3 = "Cheese";

const menu = [item1, item2, item3];

// Print "Order Confirmed:" heading
console.log("Order Confirmed:");

// Loop through the menu array and print items with numbered list format. Solution courtesy of Hyperion
for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1}. ${menu[i]}`);
}
