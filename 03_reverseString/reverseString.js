const reverseString = function(words) {
    let wordsSplit = words.split("");
    let reverseArray = wordsSplit.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
}


// Do not edit below this line
module.exports = reverseString;
