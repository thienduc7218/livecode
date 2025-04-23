const main = (string) => {
    // turn string into array
    const strArr = string.split('')

    // Loop through the array and create a frequency map to see the frequency of each character
    const frequencyMap = {};
    for (const str of strArr) {
        frequencyMap[str] = (frequencyMap[str] || 0) + 1;
    }

    // Create a new string and then loop through the frequency map to create the final string
    let finalStr = ''
    for (const [key, value] of Object.entries(frequencyMap)) {
        finalStr = finalStr + key.toString() + value.toString()
    }

    return finalStr
}

console.log(main('aksjdhaks'))