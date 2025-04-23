const symbolEnum = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

const symbolArr = Object.keys(symbolEnum);


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        console.log("🚀 ~ romanToInt - ~ symbolEnum[s[i]]:", symbolEnum[s[i]])
        console.log("🚀 ~ romanToInt - ~ symbolEnum[s[i + 1]]:", symbolEnum[s[i + 1]])
        if (symbolEnum[s[i]] < symbolEnum[s[i + 1]]) {
            console.log({ s: s[i] })
            console.log("🚀 ~  -----")
            result -= symbolEnum[s[i]]
            console.log({ result })
        } else {
            console.log({ s: s[i] })
            console.log("🚀 ~  +++++")

            result += symbolEnum[s[i]]
            console.log({ result })
        }
    }
    return result
};

// console.log(romanToInt("III")) // 3
// console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 9