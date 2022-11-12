const ftoc = function(fahrenheit) {

  return roundTo1Decimal((fahrenheit-32) * (5/9));
};

const ctof = function(celsius) {
  return roundTo1Decimal((celsius * 9 / 5) + 32);
};


function roundTo1Decimal (num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
