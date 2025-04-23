

function arrangeLargestNumber(arr) {
    // Sort the array with a custom comparator
    arr.sort((a, b) => (b + a) - (a + b));

    // Join the sorted array to form the largest number
    const result = arr.join('');

    // Handle the edge case where the largest number is '0'
    return result[0] === '0' ? '0' : result;
}

// Example usage:
console.log(arrangeLargestNumber(["3", "30", "34", "5", "9"])); // Output: "9534330"
console.log(arrangeLargestNumber(["54", "546", "548", "60"])); // Output: "6054854654"