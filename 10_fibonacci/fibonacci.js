const fibonacci = function(n) {
  if (n < 0) {
    return 'OOPS';
  }

  if (n === 0) {
    return 0;
  }

  let fibo_0 = 0;
  let fibo_1 = 1;
  let tmp;

  for (let i = 2; i <= n; i++) {
    tmp = fibo_1;
    fibo_1 = fibo_0 + fibo_1;
    fibo_0 = tmp; 
  }

  return fibo_1;

};

// Do not edit below this line
module.exports = fibonacci;
