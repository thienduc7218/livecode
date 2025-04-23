function superReducedString(s) {
    let stack = [];
    for (let char of s) {
        console.log(`Current char: ${char}, Stack before: ${stack.join('')}`);
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();  // Remove adjacent duplicate
            console.log(`Found duplicate, removed. Stack now: ${stack.join('')}`);
            console.log('----------')
        } else {
            stack.push(char);  // Add character to stack
            console.log(`No duplicate, added char. Stack now: ${stack.join('')}`);
            console.log('----------')

        }
    }

    return stack.length > 0 ? stack.join('') : "Empty String";
}

console.log(superReducedString('zztqooauhujtmxnsbb'))