const leapYears = function (any) {
// el orden de las condiciones es lo más importante en este ejercicio

    if (any % 400 === 0) {

        return true;

    } else if (any % 100 === 0) {

        return false;

    } else if (any % 4 === 0) {

        return true;

    } else {

        return false;
    }
}
// Do not edit below this line
module.exports = leapYears;
