const fibonacci = function (n) {
    n = Number(n);  // convierte el "0" string a número

    if (n === 0) {    // si n es 0, devuelve 0
        return 0;
    }

    if (n < 0) {
        return "OOPS";  // si n es negativo, devuelve "OOPS"
    }

    let fib = [1, 1];    // inicializa el array con los dos primeros números de Fibonacci

    for (let i = 2; i < n; i++) {

        fib[i] = fib[i - 1] + fib[i - 2];    // calcula el siguiente número de Fibonacci
    }
    return fib[n - 1];   //devuelve el n-ésimo número de Fibonacci
};

// Do not edit below this line
module.exports = fibonacci;
