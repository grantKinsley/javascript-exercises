const reverseString = function(str) {
    let ret = '';
    for (let k = 0; k < str.length; k++) {
        ret = str.charAt(k) + ret;
    }

    return ret;
};

// Do not edit below this line
module.exports = reverseString;
