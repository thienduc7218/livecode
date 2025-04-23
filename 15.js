const canMakeEqualByOneSwap = (s1, s2) => {
    if (s1 === s2) return true;

    const diffIndices = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffIndices.push(i);
        }
    }

    if (diffIndices.length !== 2) return false;

    const [i, j] = diffIndices;
    return s1[i] === s2[j] && s1[j] === s2[i];
}

// Example usage:
// console.log(canMakeEqualByOneSwap("bank", "kanb")); // Output: true
// console.log(canMakeEqualByOneSwap("attack", "defend")); // Output: false
console.log(canMakeEqualByOneSwap("kelb", "kelb")); // Output: true