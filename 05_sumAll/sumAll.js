const sumAll = function(startNum, endNum) {
    if (typeof startNum != "number" || typeof endNum != "number" || startNum < 0 || endNum < 0) {
        return "ERROR";
    } else {
        let numRange = [];
    for (let i = startNum; i <= endNum; i++) {
        numRange.push(i);
    }
    const total = numRange.reduce((prevValue, curValue) => {
        return prevValue + curValue;
    }, 1)
    return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
