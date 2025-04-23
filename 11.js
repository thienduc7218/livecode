const getAllPermutations = (str) => {
    let result = [''];
    console.log("Initial result:", result);

    for (let char of str) {
        console.log("\nProcessing character:", char);
        const temp = [];
        for (let perm of result) {
            console.log("  Current permutation:", perm);
            for (let i = 0; i <= perm.length; i++) {
                const newPerm = perm.slice(0, i) + char + perm.slice(i);
                console.log(`    Inserting at position ${i}:`, newPerm);
                temp.push(newPerm);
            }
        }
        result = temp;
        console.log("Updated result:", result);
    }
    console.log("\nFinal permutations:", result);
    return result;
}

const checkInclusionWithPermutations = (s1, s2) => {
    if (s1.length > s2.length) return false;

    const permutations = getAllPermutations(s1);

    for (const perm of permutations) {
        if (s2.includes(perm)) return true;
    }

    return false;
}


// Example usage:
console.log(checkInclusionWithPermutations("abc", "eidbcaooo")); // Output: true
// console.log(checkInclusion("abc", "eidbcoaoo")); // Output: false