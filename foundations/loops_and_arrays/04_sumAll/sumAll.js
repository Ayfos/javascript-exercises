const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        
        return 'ERROR';
    }
    let sumFinal = 0;
  
    for(let i = Math.min(num1, num2) ; i <=  Math.max (num1, num2); i++) {
        sumFinal += i;
    }
    return sumFinal;
};

// Do not edit below this line
module.exports = sumAll;

