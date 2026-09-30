
const convertToCelsius = function(fahrenheit) {

 let fahrenheitCalculado = (fahrenheit - 32) * 5 / 9 ; // Convirtiendo Fahrenheit a Celsius

  return Math.round(fahrenheitCalculado * 10) / 10; // Retorna el valor redondeando a un decimal
};

const convertToFahrenheit = function(celsius) {

 let celsiusCalculado = celsius * 9 / 5 + 32; // Convirtiendo a Fahrenheit

  return Math.round(celsiusCalculado * 10) / 10; // Retorna el valor redondeando a un decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
