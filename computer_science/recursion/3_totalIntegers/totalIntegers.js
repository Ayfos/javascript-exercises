const totalIntegers = function (object) {
//1. Validación: si no es un objeto ni un arraay, return undefined
if (typeof object != 'object' || object === null) return undefined;

// 2. contador
let count = 0;

// 3. Recorrer el objeto
for ( const key in object) {
    const currentValue = object[key];
    // 4. Si es un número entero, incrementar el contador
    if (Number.isInteger(currentValue)) {
        count++;
    }
    // 5. Si es un objeto, llamar recursivamente a totalIntegers
    else if (typeof currentValue === 'object' && currentValue !== null) {
        count += totalIntegers(currentValue);
    }
}
return count;
};

// Do not edit below this line
module.exports = totalIntegers;
