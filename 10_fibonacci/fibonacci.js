const fibonacci = function(n) {
    if (n <= 0) {
        return 'OOPS';
    }
    
    if (n == 1 || n ==2) {
        return 1;
    }
    
    let f1 = 1;
    let f2 = 1;

    // after each iteration, f2 holds the kth fib number
    for (let k = 3; k <= n; k++) {
        let tmp = f2;
        f2 = f1 + f2;
        f1 = tmp;
        console.log(f2);
    }
    return f2;
};

// Do not edit below this line
module.exports = fibonacci;
