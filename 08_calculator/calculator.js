const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, product) => total * product, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
  if (n === 0) return 1;
  let facto = 1;
	for (let i = 1; i <= n; i++) {
    facto = facto * i;
  }
  return facto;
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
