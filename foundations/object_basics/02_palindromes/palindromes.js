const palindromes = function (str) {
str = str.toLowerCase();       //convertir a minúsculas

str = str.replace(/[^a-z0-9]/g, '');      //eliminar caracteres no alfanuméricos

const arr = str.split('');      //convertir string en array

const reversedArray = arr.reverse();

const reversedString = reversedArray.join('');    //convertir array en string

if (str === reversedString) {

    return true;

} else {
    return false;
}
};

module.exports = palindromes;
