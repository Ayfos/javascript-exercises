const removeFromArray = function(array, ...args) {
    let newArray = array.filter(element => !args.includes(element));

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
