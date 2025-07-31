const add = function(x, y) {    //funcion que suma dos numeros
  return x + y;
	
};

const subtract = function(x, y) {   //funcion que resta dos numeros
  return x - y;
	
};

const sum = function(numbers) {      //funcion que suma todos los numeros de un array
	let sum = 0;

  for(let i=0; i < numbers. length; i++) {
    sum += numbers[i];
};
  return sum;
};

const multiply = function(numbers) {   //funcion que multiplica todos los numeros de un array
  let product = 1;

  for(let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  } 
  return product;
};

const power = function(base, exponent) {  //funcion que eleva un numero a la potencia de otro
 return Math.pow(base, exponent);
};

const factorial = function(num) {      //funcion que calcula el factorial de un numero
  let factorial = 1;

	for(let i = 1; i <= num; i++) {
    factorial*= i; 
  
}

return factorial;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
