function updateClock() {
    
  //Declare a new instanc eof the built in JS Date Class, which hold teh current date and time.
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Add leading zeros using padStart, built in JSString Method, coutesy of OpenAI and assign to 
    //new variable values

    const hoursString = hours.toString().padStart(2, '0');
    const minutesString = minutes.toString().padStart(2, '0');
    const secondsString = seconds.toString().padStart(2, '0');

    //Assign values in new variable using string interpolation.
    
    const timeString = `${hoursString}:${minutesString}:${secondsString}`;
    
    // Update the clock display by targeting the DOM element by ID.
    const clockElement = document.getElementById('clock');
    //Add variable with clock data to the clockElement using the DOM .textContent method.
    clockElement.textContent = timeString;
  }

  // Call the updateClock function every second after
  setInterval(updateClock, 1000);
  
    //Update the time immediatley.
    updateClock()