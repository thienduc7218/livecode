function findMultipleOfFive(num) {
    return Math.ceil(num / 5) * 5
}

/**
 * 
 * @param {number[]} grades 
 */
function gradingStudents(grades) {
    return grades.map(grd => {
        if (grd < 38) return grd
        const nearestGrade = findMultipleOfFive(grd)
        return ((nearestGrade - grd) < 3) ? nearestGrade : grd
    })
}

console.log(gradingStudents([73, 67, 38, 33]))