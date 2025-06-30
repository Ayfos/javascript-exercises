const reverseString = function(string) {
let arr = string.split('');
arr.reverse();
arr = arr.join('');
return arr;

};

// Do not edit below this line
module.exports = reverseString;
