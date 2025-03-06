//I initially coded this exyernal functions below calling on each array, but soon realized, after a meeting with my counsellor, that this woud be
//defeating the objective of building a Class. I"m very glad I perservered. Paradigm shift complete. Thank you Jason Morta for your guidance.
class Shoes {
  // Class Name
  //attributes
  constructor(Name, ProductCode, Quantity, ValuePerItem) {
    //Constructor Function used to stores each attribute we need and then used to create instances of new obects later.
    this.Name = Name;
    this.ProductCode = ProductCode;
    this.Quantity = Quantity;
    this.ValuePerItem = ValuePerItem;
  }
  //Methods follow below. - I relied quite heaviliy on MDN, ChatGpT and FreecodeCamp to help me assimlate the logic for the methods. 

  //Find shoe Method
  static searchShoe(shoeArr, shoeName) {
    //Using static keyword to keep the method specified to this class only.
    //Took me a while to figur out how to connect the array but when realised it made total sense. This method takes
    //in the array we created as well as userinput to be defined for shoe.
    for (let i = 0; i < shoeArr.length; i++) {
      //For loop to itereate the array.
      if (shoeArr[i].Name === shoeName) {
        //Iterates teh array and calls the Name Key on each iteration. If it matches, then continue
        console.log(`${shoeArr[i].Name} is in stock.`); //Print the matching Name found in the array to console.
        return;
      }
    }
    console.log(`The shoe ${shoeName} is not in stock.`);
  }

  //Edit aspect of an instance - Tricky but neeed to put this one above the rest so the data updates so the bottom methods are current.
  static editShoe(shoeInstance, attribute, value) {
    //Takes in three arguments, namely shoeInstance(instance of the class(object) that needs to be updated i.e. shoe2),
    //Attribute - The attribute you want to update in the shoeInstance and then the value you want to change in this shoe instance.
    if (shoeInstance.hasOwnProperty(attribute)) {
      //This confitional useds the built in methods hasOwnProperty()to check if shoeInstance has attribute.
      shoeInstance[attribute] = value; //It then assigns a new value using bracket notation to the shoeInstance to update the array.
      console.log(`Successfully updated ${attribute} of ${shoeInstance.Name}.`);
    } else {
      console.log(`Invalid attribute: ${attribute}.`);
    }
  }

  //Find Lowest Value Per Item
  static findLowestValuePerItem(shoeArr) {
    //New method declared.
    let lowestValue = Infinity; //Sets a variable to compared against later in the conditional.
    let lowestValueShoe = null; //Empty variable to be filled later and euqates to false.

    for (let i = 0; i < shoeArr.length; i++) {
      //Loop through array.
      if (shoeArr[i].ValuePerItem < lowestValue) {
        //Condiitonal - Loops through the array and checks each instance to see if the ValeuPerItem is lower than the
        //lowestValue,
        lowestValue = shoeArr[i].ValuePerItem; //updates lowestValue on each iteration.
        lowestValueShoe = shoeArr[i]; ///Assigns shoe instance to the lowestValueShoe
      }
    }
    if (lowestValueShoe) {
      //2nd conditional to check if null is true and then prints out the results to console.
      console.log(
        `The shoe with the lowest value per item is ${lowestValueShoe.Name}.`
      );
    } else {
      console.log("No shoes found in the array.");
    }
  }
  //Highest Value Per item
  static findHighestValuePerItem(shoeArr) {
    //Does the opposite of the findLowestValuePerItem
    let highestValue = -Infinity;
    let highestValueShoe = null;

    for (let i = 0; i < shoeArr.length; i++) {
      if (shoeArr[i].ValuePerItem > highestValue) {
        highestValue = shoeArr[i].ValuePerItem;
        highestValueShoe = shoeArr[i];
      }
    }
    console.log(
      `The shoe with the highest value per item is ${highestValueShoe.Name}.`
    );
  }

  //Arrange ascending order. //Last method
  static arrangeByValuePerItem(shoeArr) {
    shoeArr.sort((a, b) => a.ValuePerItem - b.ValuePerItem); //Uses the .sort() array method to arrange the array in ascedning order.
    console.log("Shoes Database in ascending order:");
    for (let i = 0; i < shoeArr.length; i++) {
      console.log(shoeArr[i].Name);
    }
  }
}

//Instances of the class. Individual Objects.

let shoe1 = new Shoes("Nike", "nk", 32, 50);
let shoe2 = new Shoes("Puma", "pm", 45, 35);
let shoe3 = new Shoes("Converse", "cv", 28, 45);
let shoe4 = new Shoes("Asics", "as", 32, 43);
let shoe5 = new Shoes("Adidas", "ad", 43, 48);

let shoeArr = [shoe1, shoe2, shoe3, shoe4, shoe5]; //Array with class instances as elements.

Shoes.searchShoe(shoeArr, "Nike"); // Calling the static method
console.log("\n");
Shoes.editShoe(shoe2, "ValuePerItem", 32);
//console.log(shoe2)//Test
console.log("\n");
Shoes.findLowestValuePerItem(shoeArr); // Calling the static method
console.log("\n");
Shoes.findHighestValuePerItem(shoeArr); // Calling the static method
console.log("\n");
Shoes.arrangeByValuePerItem(shoeArr); // Calling the static method
