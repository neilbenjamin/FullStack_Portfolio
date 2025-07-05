//Task 02 - Pokemon

// url assigned to a variable. I chose "mankey"
const apiUrl = `https://pokeapi.co/api/v2/pokemon/mankey/`;
//Fetch function calling the url variable
fetch(apiUrl)
  //if successful, callback function will convert the json string to a javascript object using the
  //built in .json parse method.
  .then((response) => response.json())
  //Chained .then function then assigns anotehr callback function to deliver the data in the preferred
  //print manners as described by the console.logs.
  .then((data) => {
    //Name
    console.log(`Name:
    ${data.name}`);
    //Weight
    console.log(`Weight:
    ${data.weight}`);
    //Abiities. I initially loaded each one manually and specifically targetted each index,
    //but need to get used to the forEach() method, so am using this instead.
    //This uses a callback function to use the forEach() method on the array ability index,
    //which then uses dit notation to access the ability and subsequently the name of that abiity too.
    console.log("Abilities:");
    data.abilities.forEach((ability) => {
      console.log(`- ${ability.ability.name}`);
    });
  })

  .catch((error) => {
    console.log("Error fetching Pokémon data:", error);
  });
