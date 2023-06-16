const sumAll = function(startNum, endNum) {
    let numRange = [];
    if (typeof startNum != "number" || typeof endNum != "number" || startNum < 0 || endNum < 0) {
        return 'ERROR';
    } else if (startNum > endNum) {
    for (let i = startNum; i > endNum; i--) {
        numRange.push(i);
    }
   } else if (startNum < endNum) {
    for (let i = endNum; i > startNum; i--) {
        numRange.push(i);
    } 
} else if (startNum == endNum) {
        numRange.push(startNum);
    }
   
   const total = numRange.reduce((prevValue, curValue) => {
        return prevValue + curValue;
    }, 1)
    return total;
};

// Do not edit below this line
module.exports = sumAll;
