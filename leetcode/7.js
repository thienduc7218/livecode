const twoSum = (nums, target) => {
    // Create an object to store the indices of the numbers
    const indices = {};

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the object
        if (indices.hasOwnProperty(complement)) {
            return [indices[complement], i];
        }

        // Add the current number and its index to the object
        indices[nums[i]] = i;
    }


    // If no solution is found, return an empty array (though this won't happen per the problem statement)
    return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
// console.log(twoSum([3, 3], 6));         // Output: [0, 1]
