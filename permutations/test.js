
const permUnique = (nums) => {
    const res = []
    const perm = []
    const count = {}

    for (const n of nums) {
        count[n] = (count[n] || 0) + 1
    }

    function dfs() {
        if (perm.length === nums.length) {
            res.push([...perm])
            return
        }

        for (const n in count) {
            if (count[n] > 0) {
                perm.push(n)
                count[n]--

                dfs()

                count[n]++
                perm.pop()
            }
        }
    }
    dfs()
    return res
}
console.log(permUnique([1, 1, 2]));