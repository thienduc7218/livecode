function minimumNumber(password) {
    const numbers = "0123456789";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacters = "!@#$%^&*()-+";

    let count = 0
    let hasDigit = false, hasLower = false, hasUpper = false, hasSpecial = false;


    for (const char of password) {
        if (numbers.includes(char)) hasDigit = true
        if (lowerCase.includes(char)) hasLower = true
        if (upperCase.includes(char)) hasUpper = true
        if (specialCharacters.includes(char)) hasSpecial = true

        if (hasDigit && hasLower && hasUpper && hasSpecial) break
    }

    if (!hasDigit) count++;
    if (!hasLower) count++;
    if (!hasUpper) count++;
    if (!hasSpecial) count++;

    return Math.max(count, 6 - password.length);
}

console.log(minimumNumber('#HackerRank'))