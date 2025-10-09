const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  let total = 0;
	for(const value of arr){
    total += value;
  }
  return total;

  //could have used reduce instead
  //return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
    let total = 1;
	for(const value of arr){
    total *= value;
  }
  return total;

  //could have used reduce instead
  // return arr.reduce((product, current) => product * current);
};

const power = function(x, y) {
  let total = 1;
  for (let i = 0; i < y; i++){
    total *= x;
  }
  return total;

  //could have used the power operator instead
  // return x ** y;
};

const factorial = function(x) {
	let total = 1;
  for (let i = x; i > 0; i--){
    total *= i;
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
