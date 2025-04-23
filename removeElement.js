/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0
    let removedArr = []
    let restArr = []
    nums.map((curr) => {
        if (curr === val) {
            k++
            removedArr.push("_")
        }
        else {
            restArr.push(curr)
        }
    })
    return { k, nums: [...restArr, ...removedArr] }
};

console.log(removeElement([3, 2, 2, 3], 3)) // { k: 2, nums: [ 2, 2, '_', '_' ] }