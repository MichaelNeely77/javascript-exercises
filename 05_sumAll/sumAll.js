const sumAll = function(first, second) {

    // Meets the not an Integer with !Number.isInteger(first) and !Number.isInteger(second)
if (!Number.isInteger(first) || !Number.isInteger(second)) {
    return "ERROR"
}
// Of course meets teh condition of if either number is negative
if (first < 0 || second < 0) {
    return 'ERROR';
    }
// Meets the first less than second by reassigning the values. REmember a single equals sign is assignment, not a mathematical operator.
if (first > second) {
    const temp = first;
    first = second;
    second = temp;
}


let sum = 0;
for ( i = first; i <= second; i++) {
    sum += i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
