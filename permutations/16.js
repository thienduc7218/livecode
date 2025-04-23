const permute = (nums) => {
    console.log('Input nums:', nums);
    if (nums.length <= 1) return [nums];

    let result = [[nums[0]]];
    console.log('Initial result:', result);

    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        const temp = [];
        console.log(`Processing number ${current} at index ${i}`);

        for (let perm of result) {
            for (let j = 0; j <= perm.length; j++) {
                const newPerm = [...perm.slice(0, j), current, ...perm.slice(j)];
                temp.push(newPerm);
                console.log(`Created permutation:`, newPerm);
            }
        }

        result = temp;
        console.log(`Current result after processing ${current}:`, result);
    }

    console.log('Final result:', result);
    return result;
}

// Example usage:
(permute([1, 2, 3, 4])); // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// console.log(permute([0, 1])); // Output: [[0,1],[1,0]]
// console.log(permute([1])); // Output: [[1]]