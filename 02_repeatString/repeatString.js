const repeatString = function(stringInput, numTimes) {
    let newOutput = ''
    if (numTimes < 0) return 'ERROR'
    for (let i = 0; i < numTimes; i++) {
        newOutput += stringInput;
    }
    return newOutput;
};

// Do not edit below this line
module.exports = repeatString;
