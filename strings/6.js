const maxBalloons = (text, word) => {
    // Create a frequency map for the characters in the input text
    const frequencyMap = {};
    for (const char of text) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Define the required characters and their counts for the word 
    // const balloonMap = { b: 1, a: 1, l: 2, o: 2, n: 1 };
    let wordMap = {};
    for (const letter of word) {
        wordMap[letter] = (wordMap[letter] || 0) + 1;
    }
    // Calculate the maximum number of "balloon" instances that can be formed
    let maxInstances = Infinity;
    for (const char in wordMap) {
        if (!frequencyMap[char]) {
            return 0; // If any required character is missing, return 0
        }
        maxInstances = Math.min(maxInstances, Math.floor(frequencyMap[char] / wordMap[char]));

    }

    return maxInstances;
}

// Test cases
// console.log(maxBalloons("sbalfklohton", "balloon")); // Output: 1
console.log(maxBalloons("loonbalxballpoon", "balloon")); // Output: 2
// console.log(maxBalloons("nlaebolko")); // Output: 1
// console.log(maxBalloons("leetcode")); // Output: 0
