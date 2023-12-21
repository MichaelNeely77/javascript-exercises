const add = function(num1, num2) {
	let sum = num1 + num2;
    return sum;
};

const subtract = function(num1, num2) {
	let difference = num1-num2;
    return difference;
};

const sum = function(arr) {
	return arr.reduce((val1, val2) => val1 + val2, 0);
};

const multiply = function(arr) {
    return arr.reduce((val1, val2) => val1 * val2);
};

const power = function(num, exp) {
	return Math.pow(num, exp);
};

const factorial = function(num) {
    if(num === 0) {
        return 1;
    }
    let product = 1;
    for (let i = num; i > 0; i-- ) {
        product *= i;
    }
	return product;
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
