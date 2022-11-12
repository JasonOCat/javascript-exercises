const repeatString = function(str, time) {
    if (time < 0) {
        return 'ERROR';
    }
    return str.repeat(time);
};

// Do not edit below this line
module.exports = repeatString;
