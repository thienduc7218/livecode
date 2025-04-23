/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let stack = []

    for (let i = 0; i < nums.length; i++) {
        console.log({ stack })
        if (!stack.length) {
            stack.push(nums[i])
            continue
        }
        if (stack[stack.length - 1] < nums[i] && !stack.includes(nums[i])) {
            stack.push(nums[i])
            continue
        }
        if (stack[stack.length - 1] > nums[i] && !stack.includes(nums[i])) {
            continue
        }
    }
    console.log({ final: stack })
    return stack.length

};

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))
console.log(lengthOfLIS([11, 12, 13, 14, 15, 6, 7, 8, 101, 18]))