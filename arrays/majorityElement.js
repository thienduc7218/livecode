/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const frequentCount = {}

    for (const num of nums) {
        frequentCount[num] = (frequentCount[num] || 0) + 1
    }

    for (const key in frequentCount) {
        if (frequentCount[key] > nums.length / 2) {
            return parseInt(key)
        }
    }
};

console.log(majorityElement([3, 2, 3])) // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2