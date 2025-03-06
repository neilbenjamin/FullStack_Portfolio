//Parsed JSON Data from weather APIserver
let dailyWeather = [];

//Async function Sourse assistance - Hyperion Dev previous modules
//Function triggered on DOM Button Click.
async function cyclingWeatherApp() {
  //Fetch URL.
  const fetchUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=-33.9258&longitude=18.4232&daily=temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=auto&start_date=2023-08-19&end_date=2023-08-19";
  // HTTP Method
  const data = { method: "GET" };
  //Try/Catch
  try {
    //Await the first promised to get the info from the URL to return data.
    const response = await fetch(fetchUrl, data);
    //Await the 2nd promise to parse this data using json and store the results
    //thereof in the result variable.
    const result = await response.json();
    //Assign the daily object in the results data to new variable dailyWeather. Source = Hyperion previous lectures
    dailyWeather = result.daily;
    //Test array data
    console.log(dailyWeather);
    //Call DOM function display.
    displayWeatherData();
    //Log Catch error
  } catch (error) {
    console.log("Could not connect.", error);
  }
}

// DOM Display Function
function displayWeatherData() {
  //Select element to target
  const log = document.getElementById("weather-list");
  log.innerHTML = ""; // Clear previous content
  //Create new UL tags.
  const ul = document.createElement("ul");
  //Create new LI tags.
  const li = document.createElement("li");
  //Add Class name for styling
  li.classList.add("weather-list-items");
  //Add inner HTML for each LI element using template literals accessing the dailyWeather
  //array, accessing object properties by dot notation and then selecting the first element in each one
  //of the values as [0] as the value pairs are arrays, which reveal the data. This eluded me for the better part of the
  //day trying to figure out to access the object prerty value pair in each array and leaned quite heaviliy on
  //OpenAI and the pervious Hyperion Dev notes for guidance. 
  li.innerHTML = `
      <strong>Date:</strong> ${dailyWeather.time[0]}<br>
      <strong>Max Temperature:</strong> ${dailyWeather.temperature_2m_max[0]}&deg;C<br>
      <strong>Min Temperature:</strong> ${dailyWeather.temperature_2m_min[0]}&deg;C<br>
      <strong>Rain:</strong> ${dailyWeather.rain_sum[0]} mm<br>
      <strong>Showers:</strong> ${dailyWeather.showers_sum[0]} mm<br>
      <strong>Max Wind Speed:</strong> ${dailyWeather.windspeed_10m_max[0]} km/h<br>
      <strong>Max Wind Gusts:</strong> ${dailyWeather.windgusts_10m_max[0]} km/h
  `;
  //Append HTML Elements
  ul.appendChild(li);
  log.appendChild(ul);
}
