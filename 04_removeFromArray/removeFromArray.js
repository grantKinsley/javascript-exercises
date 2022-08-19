const removeFromArray = function(arr /*optional args*/) {
    let numArgs = arguments.length;
    let result = arr;

    for (let k = 1; k < numArgs; k++) {
        result = result.filter(element => element !== arguments[k]);
        console.log(result);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
