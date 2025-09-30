const sumAll = function(a, b) {
    let sum = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b)
        || a < 0 || b < 0
    )
        return 'ERROR';

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    for (; a <= b; a++) {
        sum += a;
    }
    return sum;
    //return (b - a + 1) * (a + b) / 2;
};

// Do not edit below this line
module.exports = sumAll;
