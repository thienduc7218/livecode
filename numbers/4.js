const main = (numArr) => {
    // Create a frequency map to count the occurrences of each number
    const frequencyMap = {};
    for (const num of numArr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Sort the array
    numArr.sort((a, b) => {
        // Compare by frequency (in ascending order)
        if (frequencyMap[a] !== frequencyMap[b]) {
            return frequencyMap[a] - frequencyMap[b];
        }
        // If frequencies are the same, compare by value (in descending order)
        return b - a;
    });

    return numArr;
}

console.log(main([1, 1, 2, 2, 2, 3]));
// console.log(main([2, 3, 1, 3, 2]));    
// console.log(main([-1, 1, -6, 4, 5, -6, 1, 4, 1])); 


const extra = (numArr) => {
    // Create a frequency map to count the occurrences of each number
    const frequencyMap = {};
    for (const num of numArr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }


    // Sort the array
    numArr.sort((a, b) => {
        // Compare by frequency (in ascending order)
        if (frequencyMap[a] !== frequencyMap[b]) {
            return frequencyMap[a] - frequencyMap[b];
        }
        // If frequencies are the same, compare by value (in descending order)
        return b - a;
    });

    // Calculate the sum of all frequencies
    const frequencySum = Object.values(frequencyMap).reduce((a, b) => a + b, 0);

    // Reverse the first half of the array if the sum of frequencies is even
    if (frequencySum % 2 === 0) {
        const mid = Math.floor(numArr.length / 2);
        const firstHalf = numArr.slice(0, mid).reverse();
        numArr = [...firstHalf, ...numArr.slice(mid)];
    }

    return numArr;
}

console.log(extra([1, 1, 2, 2, 2, 3]));

