const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR'
    }
    
    ret = ''
    for (let k = 0; k < num; k++) {
        ret += str
    }
    return ret
};

// Do not edit below this line
module.exports = repeatString;
