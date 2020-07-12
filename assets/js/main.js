
// set temperature to Kelvins
function setToKelvins() {

  let userInput = document.getElementById('user-input').value;
  let getUserInput = +userInput.trim();

  // formula Kelvins
  let kelvins = getUserInput + 273.15;

  // print the resault
  document.getElementById('resault').innerText = "The temperature is: " + kelvins.toFixed(2) + " Kelvins";
};

// set temperature to Fahrenheit
function setToFahrenheit() {
  let UserInput = document.getElementById('user-input').value;
  let getUserInput = +UserInput.trim();

  // formula fahrenheit
  let fahrenheit = (getUserInput * 1.8) + 32

  // print the resault
  document.getElementById('resault').innerText = "The temperature is: " + fahrenheit.toFixed(2) + ' Fahrenheit';
};