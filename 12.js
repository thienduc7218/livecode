


const largestNumber = (nums) => {
    // Convert numbers to strings
    nums = nums.map(String);
    console.log({ nums })
    // Sort the array with a custom comparator
    nums.sort((a, b) => (b + a) - (a + b));
    console.log({ nums })


    // Join the sorted array to form the largest number
    const result = nums.join('');

    // Handle the edge case where the largest number is '0'
    return result[0] === '0' ? '0' : result;
}

// Example usage:
console.log(largestNumber([10, 2])); // Output: "210"
console.log(largestNumber([3, 30, 34, 5, 9])); // Output: "9534330"