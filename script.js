// givena an array of integers, return indices of the two numbers such that they add up to a specific target
//you may assume that each input would have exactly one solution, and you may not use the same element twice

/*
@param {number[]} nums
@param {number} target
@return {number[]}
*/

let twoSum = function(nums, target) {
    const previousValues = {}
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]
        const neededValue = target - currentNumber
        const index2 = previousValues[neededValue]
        if (index2 != null) {
            return [index2, index]
        } else {
            previousValues[currentNumber] = i
        }
    }
};