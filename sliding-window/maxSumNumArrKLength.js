/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = function (nums, k) {
    let res = 0
    let count = {}
    let maxSum = 0
    let l = 0

    for (let r = 0; r < nums.length; r++) {
        maxSum += nums[r]
        count[nums[r]] = (count[nums[r]] || 0) + 1

        console.log(`Right pointer: ${r}, Right Current num: ${nums[r]}`)
        console.log(`Left pointer: ${l}, left pointer num: ${nums[l]}`)
        console.log(`Current maxSum: ${maxSum}`)
        console.log(`Count object: `, count)

        if (r - l + 1 > k) {
            count[nums[l]] -= 1
            if (count[nums[l]] === 0) {
                delete (count[nums[l]])
            }
            maxSum -= nums[l]
            l += 1
            console.log(`Window too large, left pointer moved to: ${l}`)
            console.log(`Updated maxSum: ${maxSum}`)
            console.log(`Updated count: `, count)
        }

        if (Object.keys(count).length === k && (r - l + 1) === k) {

            res = Math.max(res, maxSum)
            console.log(`Found valid window! Current result: ${res}`)
        }

        console.log('-------------------')
    }

    return res
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3))