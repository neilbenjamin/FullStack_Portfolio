
//There are 3 fetch requets, namely;
// 1) - Fetch city by name to determine city wikiId
// 2) - Fetch cityWikiId to get info to match task requirement 
// 3) - Weather fetch for current weather/temperature in city.

//This is the first fetch using the city name and country id added to the fetch url.
//I used this to get the City ID I need to call the specific city, Cape Towm.

async function getCityName() {
  const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/za/regions/WC/cities?namePrefix=Cape';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ee511292a9msh0026887e8b6f0ddp1963ddjsnaf358c2c12b9',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    
    //Print out the entire fetch and then select which object I need.
    //Once I've found the wikiCityId, target the call the city wiki id in the object and comment out the rest of the object.
    
    // console.log(result);

    //Selecting the wikiCityId proprty in the returned object
    console.log(`The wikiCity ID for Cape Town is: ${result.data[1].wikiDataId}`);
  } catch (error) {
    console.error(error);
  }
}
setTimeout(getCityName, 2000);

// **********************

//Fetch new info on city using wikiCityId output from previous fetch and allows me to
//display the relevant info as per task requirement.

async function getCity() {
  //Here the output from the previous fetch is added to the url.
  const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q5465';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ee511292a9msh0026887e8b6f0ddp1963ddjsnaf358c2c12b9',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); 
    console.log(`Cape Town's Elevation is ${result.data.elevationMeters} meters above sea level.`);
    console.log(`Cape Town's Population is ${result.data.population}`);
  } catch (error) {
    console.error(error);
  }
}
//Delay to stop limit response from rapidapi
setTimeout(getCity, 4000);

// **********************
// Get City Current Weather

async function getCityWeather() {

const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=18.4241&lat=-33.9249';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ee511292a9msh0026887e8b6f0ddp1963ddjsnaf358c2c12b9',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  //get full result then comment out for neatness.
  // console.log(result);
  //Filter result to match task requirement
	console.log(`The temperature in Cape Town is ${result.data[0].temp} degrees.`);
} catch (error) {
	console.error(error);
}
}

setTimeout(getCityWeather, 6000);

console.log(`This will print while the asochrynous fetch is being completed
Demonstatring that even though this console.log is at the bottom of the code block, it
still print's first while the fetch is being done seperately, or asochrynously`)