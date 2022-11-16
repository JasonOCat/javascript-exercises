const palindromes = function (str) {
  let re = /[\W]/g;
  let cleanWord = str.replace(re,''); // remove non alphabetical world;
  cleanWord = cleanWord.toLowerCase();

  return cleanWord === cleanWord.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
