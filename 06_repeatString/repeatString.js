const repeatString = function(string, num) {
    let resultado = '';
    if (num < 0) {
        return 'ERROR';
    }
for( let i = 0; i < num; i++) {
    resultado += string;
    
}
return resultado;
};


// Do not edit below this line
module.exports = repeatString;
