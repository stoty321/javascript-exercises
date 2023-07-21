const add = function(value1, value2) {

  return value1 + value2;

};

const subtract = function(value1, value2) {

  return value1 - value2;

};

const sum = function(array) {
  let total = 0;

  for(let i = 0; i < array.length; i++){
    total += array[i];
  }
  
  return total;
	
};

const multiply = function(...values) {
  
  let total = 1;

  for(let i = 0; i < values.length; i++){
    total = total * values[i];
  }

  return total;

};

const power = function(number, power) {
  let total = 1;

  for( let i = 0; i < power; i++){
    total = total * number;
  }

  return total;
	
};

const factorial = function(value) {
	
  if(value == 0) return 1;
  
  let total = value;
  
  for( let i = value - 1; i > 0; i--){
    total = total * i;
  }

  return total;
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
