const sumAll = function(int1, int2) {
    let sum = 0;

    if (typeof(int1) != 'number' || typeof(int2) != 'number') {
        return 'ERROR';
    }

    if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    }

    let lo = int1;
    let hi = int2;
    if (int1 > int2) {
        lo = int2;
        hi = int1;
    }

    for (let k = lo; k <= hi; k++) {
        sum += k;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
