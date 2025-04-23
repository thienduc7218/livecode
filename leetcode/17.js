const fixedLetterWithNumber = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v",],
    "9": ["w", "x", "y", "z"],
}


function generateCombination(set, num) {
    const currentLength = set.length

    for (let i = 0; i < currentLength; i++) {
        for (let j = 0; j < fixedLetterWithNumber[num].length; j++) {
            set.push(set[i] + fixedLetterWithNumber[num][j])
        }
    }
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    if (digits.length === 1) return fixedLetterWithNumber[digits]

    let combination = fixedLetterWithNumber[digits[0]]

    for (let i = 1; i < digits.length; i++) {
        generateCombination(combination, digits[i])
    }

    return combination.filter(c => c.length === digits.length)
};

console.log(letterCombinations("234"))