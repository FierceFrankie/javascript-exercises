const removeFromArray = function(numList, ...nums) {
    for (let i = 0; i < nums.length; i++) {
        if (numList.includes(nums[i])) {
            numList.splice(numList.indexOf(nums[i]),1)
        } 
    }
    return numList;
};

// Do not edit below this line
module.exports = removeFromArray;
