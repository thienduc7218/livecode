const countInstancesOfWord = (text, targetWord) => {
    text = text.toLowerCase();
    targetWord = targetWord.toLowerCase();

    const textCharCount = {};
    const targetCharCount = {};

    // Count frequency of each character in text
    for (let char of text) {
        if (!textCharCount[char]) {
            textCharCount[char] = 0;
        }
        textCharCount[char]++;
    }

    // Count frequency of each character in targetWord
    for (let char of targetWord) {
        if (!targetCharCount[char]) {
            targetCharCount[char] = 0;
        }
        targetCharCount[char]++;
    }
    console.log("🚀 ~ countInstancesOfWord ~ textCharCount:", textCharCount)
    console.log("🚀 ~ countInstancesOfWord ~ targetCharCount:", targetCharCount)

    // Determine the number of times we can form targetWord
    return [...new Set(targetWord)].reduce((instances, char) => {
        if (!textCharCount[char]) return 0;
        return Math.min(instances, Math.floor(textCharCount[char] / targetCharCount[char]));
    }, Infinity);
}

// Example usage:
console.log(countInstancesOfWord("nlaeBolko", "balloon")); // Output: 1
// console.log(countInstancesOfWord("LuzzffyLuppffyMonKey", "Luffy")); // Output: 2