const reverseString = function(str) {
    let arrayStr = str.split("");
    let reverseArrayStr = arrayStr.reverse();
    let reverseStr =reverseArrayStr.join("");
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
