const main = (set1, set2) => {
    // Declare a result array to store the final combinations
    const result = []

    // Auto push the first set
    result.push(...set1)


    // Iterate through the both set to find the combinations that no duplicated
    set1.forEach(a => {
        set2.forEach(b => {
            if (a !== b) result.push(a + b)
        })
    });


    return result
}

console.log(main(["A", "B", "C"], ["A", "B", "D"]))