/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {

    if (nums.length === 0) {
        return [[]];
    }

    let perms = permute(nums.slice(1));

    let res = [];

    for (let p of perms) {
        for (let i = 0; i <= p.length; i++) {
            let p_copy = p.slice();
            p_copy.splice(i, 0, nums[0]);
            res.push(p_copy);
        }
    }

    return res
}

// Example usage:
console.log('Final Result:', permute([1, 2, 3]));

function permuteUnique(nums) {
    const res = [];
    const perm = [];
    const count = {};
    let depth = 0;

    console.log('Initial nums:', nums);
    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }
    console.log('Count map:', count);
    console.log('-'.repeat(50)); // Add separator line

    function dfs() {
        const indent = '  '.repeat(depth);
        console.log(`${indent}[Depth ${depth}] Start DFS`);
        console.log(`${indent}Current perm:`, perm);

        if (perm.length === nums.length) {
            console.log(`${indent}✓ Found complete permutation:`, [...perm]);
            res.push([...perm]);
            console.log(`${indent}← Returning from depth ${depth}`);
            console.log('-'.repeat(50)); // Add separator after completion
            return;
        }

        for (const n in count) {
            if (count[n] > 0) {
                console.log(`${indent}→ Adding ${n} (remaining count: ${count[n]})`);
                perm.push(Number(n));
                count[n]--;
                depth++;
                console.log('-'.repeat(30 + depth * 2)); // Add dynamic separator

                dfs();

                depth--;
                count[n]++;
                perm.pop();
                console.log(`${indent}← Removed ${n}, backtracked to:`, perm);
                console.log('-'.repeat(30 + depth * 2)); // Add dynamic separator
            }
        }
        console.log(`${indent}[Depth ${depth}] End DFS`);
    }

    dfs();
    console.log('\nFinal result:', res);
    return res;
}

// Example usage:
console.log(permuteUnique([1, 1, 2]));

