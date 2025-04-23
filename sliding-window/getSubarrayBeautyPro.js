

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const getSubarrayBeauty = function (nums, k, x) {
    const beautyArr = [];
    const freq = new Array(101).fill(0); // Count array for range [-50, 50]

    // Initial window
    for (let i = 0; i < k; i++) {
        if (nums[i] <= 50) { // Only track numbers <= 50 as we only care about negatives
            freq[nums[i] + 50]++;
        }
    }

    // Process first window
    beautyArr.push(findXthSmallest(freq, x));

    // Slide window
    for (let i = k; i < nums.length; i++) {
        // Remove leftmost element
        if (nums[i - k] <= 50) {
            freq[nums[i - k] + 50]--;
        }

        // Add new element
        if (nums[i] <= 50) {
            freq[nums[i] + 50]++;
        }

        beautyArr.push(findXthSmallest(freq, x));
    }

    return beautyArr;
};

function findXthSmallest(freq, x) {
    let count = 0;
    // Only need to check negative numbers [-50, -1]
    for (let i = 0; i < 50; i++) {
        count += freq[i];
        if (count >= x) {
            return i - 50; // Convert back to original number
        }
    }
    return 0;
}

console.log(getSubarrayBeauty([1, -1, -3, -2, 3], 3, 2))