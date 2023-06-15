const sumAll = function(...nums) {
    const total = nums.reduce((prevValue, curValue) => {
        return prevValue + curValue;
    }, 1)
    return total;
};

// Do not edit below this line
module.exports = sumAll;
