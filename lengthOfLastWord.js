/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const words = s.trim().split(' ').filter(word => word)
    console.log("🚀 ~ lengthOfLastWord ~ words:", words)

    return words[words.length - 1].length
};

console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("   fly me       to   the moon  ")) // 4
console.log(lengthOfLastWord("luffy is still joyboy")) // 6
console.log(lengthOfLastWord("a")) // 1