const main = (set1, set2) => {
    const result = []

    result.push(...set1)


    set1.forEach(element => {
        set2.forEach(e => {
            if (element !== e) result.push(element + e)
        })
    });
    return result
}