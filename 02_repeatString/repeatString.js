let words = '';
const repeatString = function(words, times) {
if (times < 0) {
    return "ERROR";
}
    for (let i = 0; i <= times; i++) {
        return words.repeat(times);
    }

};
repeatString('hey',3);

// const repeatString = function(string, num) {
//
// }
// Do not edit below this line
module.exports = repeatString;
