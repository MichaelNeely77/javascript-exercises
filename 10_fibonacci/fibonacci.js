const fibonacci = function(position) {
    if(position < 0) return 'OOPS';
    if(position === 0) return 0;

    let firstNum = 0;
    let secondNum = 1;
    let temp;

    while(position >= 0) {
        temp = firstNum;
        firstNum = firstNum + secondNum;
        secondNum = temp;
        position--;
    }
    return secondNum;

};

// Do not edit below this line
module.exports = fibonacci;
