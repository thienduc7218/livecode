
const findXthSmallestNegativeInt = (numArr, x) => {
    if (x < 1 || x > numArr.length) {
        throw new Error("Invalid value of X");
    }
    const xthSmallest = [...numArr].sort((a, b) => a - b)[x - 1]
    return xthSmallest > 0 ? 0 : xthSmallest;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const getSubarrayBeauty = function (nums, k, x) {
    let beautyArr = []
    let slidingArr = []
    let rightPointer = 0
    console.log("🚀 ~ nums.length - k + 1:", nums.length - k + 1)

    for (rightPointer; rightPointer < nums.length; rightPointer++) {
        slidingArr.push(nums[rightPointer])
        console.log('Current sliding array:', slidingArr)

        if (slidingArr.length > k) {
            console.log(`Window too large!!!`)
            slidingArr.shift()
            console.log('Removing first element:', slidingArr)
        }

        if (slidingArr.length === k) {
            console.log(`Window size matches k!!!`)
            const beauty = findXthSmallestNegativeInt(slidingArr, x)
            console.log('Found beauty value:', beauty)
            beautyArr.push(beauty)
        }
        console.log('End of iteration', rightPointer, '\n')
        console.log('-------------------')
    }
    console.log('Final beauty array:', beautyArr)
    return beautyArr
};

console.log(getSubarrayBeauty([1, -1, -3, -2, 3], 3, 2))