const main = (set1, set2, set3) => {
    // Declare a result array to store the first round combinations
    const result = []

    // Auto push the first set
    result.push(...set1)

    // Declare a combination array to store the final combinations
    const combination = []


    // Iterate through the both set to find the combinations that no duplicated
    set1.forEach(a => {
        set2.forEach(b => {
            if (a !== b) combination.push(a + b)
        })
        set3.forEach(c => {
            if (a !== c) combination.push(a + c)
        })
    });

    console.log({ combination })

    // Iterate through the combination array with the third set to find the combinations that no duplicated 
    combination.forEach(c => {
        set3.forEach(d => {
            if (!c.includes(d)) combination.push(c + d)
        })
    })

    result.push(...combination)

    return Array.from(new Set(result))
}

console.log(main(["A", "C"], ["C", "A"], ["X", "A"]))