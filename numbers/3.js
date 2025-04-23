const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const thousands = ["", "Thousand"];

const helper = (num) => {
    if (num === 0) return "";
    else if (num < 20) return belowTwenty[num] + " ";
    else if (num < 100) return tens[Math.floor(num / 10)] + " " + helper(num % 10);
    else return belowTwenty[Math.floor(num / 100)] + " Hundred and " + helper(num % 100);
};

const main = (num) => {
    if (num === 0) return "Zero";
    let result = "";
    let thousandCounter = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[thousandCounter] + " " + result;
        }
        num = Math.floor(num / 1000);
        thousandCounter++;
    }
    return result.trim();
};



console.log(main(2345))