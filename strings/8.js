// Function to check if a given string is a palindrome
const isPalindrome = (s) => {
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
        if (s[left] !== s[right]) return false;
    }
    return true;
}

// Recursive function to generate all combinations of substrings and count palindromes
const generateCombinations = (allSubstrings, idx, currentCombination, palindromeCount) => {

    // Base case: if we've processed all substrings
    if (idx === allSubstrings.length) {
        // Concatenate the current combination of substrings
        const concatenated = currentCombination.join('');
        // Check if the concatenated string is a palindrome
        if (isPalindrome(concatenated)) {
            // Increment the palindrome count if it is
            palindromeCount.count++;
        }
        return;
    }

    // Iterate through each substring at the current index
    for (const substring of allSubstrings[idx]) {

        // Add the substring to the current combination
        currentCombination.push(substring);
        // Recur to process the next index
        generateCombinations(allSubstrings, idx + 1, currentCombination, palindromeCount);
        // Backtrack by removing the last added substring
        currentCombination.pop();
    }
}

// Function to count the number of palindromic combinations
const count = (strings) => {
    // Generate all possible substrings for each string
    const allSubstrings = strings.map((string) => {
        const substrings = new Set();
        // Generate substrings by iterating over all possible start and end indices
        for (let i = 0; i < string.length; i++) {
            for (let j = i + 1; j <= string.length; j++) {
                substrings.add(string.slice(i, j));
            }
        }
        // Convert the set of substrings to an array
        return Array.from(substrings);
    });
    console.log("🚀 ~ allSubstrings ~ allSubstrings:", allSubstrings)

    // Initialize an object to keep track of the palindrome count
    let palindromeCount = { count: 0 };
    // Start generating combinations from the first index
    generateCombinations(allSubstrings, 0, [], palindromeCount);
    // Return the total count of palindromic combinations
    return palindromeCount.count;
}

// Examples
const example1 = ["cab", "c", "ba"];
console.log(count(example1)); // Output: 3

// const example2 = ["aa", "b", "aa"];
// console.log(count(example2)); // Output: 2

// const example3 = ["ab", "c"];
// console.log(count(example3)); // Output: 0
