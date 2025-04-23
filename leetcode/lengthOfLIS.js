
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let stack = []

    for (let i = 0; i < nums.length; i++) {
        if (!stack.length) {
            stack.push(nums[i])
            continue
        }
        if (stack[stack.length - 1] > nums[i] && !stack.includes(nums[i])) {
            stack.pop()
            stack.push(nums[i])
            continue
        }
        if (stack[stack.length - 1] < nums[i] && !stack.includes(nums[i])) {
            stack.push(nums[i])
        }
    }

    return stack.length

};