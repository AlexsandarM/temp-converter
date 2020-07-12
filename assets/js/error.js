let userInput = document.getElementById('user-input');
let kelvins = document.getElementById('kelvins');
let fahrenheit = document.getElementById('fahrenheit');

// let getUserInput = +userInput.trim();


// kelvins.addEventListener("click", setToKelvins);

// // set temperature to Kelvins
// function setToKelvins() {

//   // formula Kelvins
//   let kelvins = getUserInput + 273.15;

//   // print the resault
//   document.getElementById('resault').innerText = "The temperature is: " + kelvins.toFixed(3) + " Kelvins";
// };


// fahrenheit.addEventListener('click', setToFahrenheit);

// // set temperature to Fahrenheit
// function setToFahrenheit() {

//   // formula fahrenheit
//   let fahrenheit = (getUserInput * 1.8) + 32

//   // print the resault
//   document.getElementById('resault').innerText = "The temperature is: " + fahrenheit.toFixed(3) + ' Fahrenheit';
// };



kelvins.addEventListener('click', () => {
  let inputValue = +userInput.value.trim();

  // formula Kelvins
  let kelvins = inputValue + 273.15;

  // print the resault
  document.getElementById('resault').innerText = "The temperature is: " + kelvins.toFixed(2) + " Kelvins";
})


fahrenheit.addEventListener('click', () => {
  let inputValue = +userInput.value.trim();

  // formula fahrenheit
  let fahrenheit = (inputValue * 1.8) + 32

  // print the resault
  document.getElementById('resault').innerText = "The temperature is: " + fahrenheit.toFixed(2) + ' Fahrenheit';
})