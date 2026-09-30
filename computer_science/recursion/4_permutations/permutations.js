const permutations = function (array) {
// 1. Si array está vacío [[]]
if (array.length === 0) {
return [[]];
}

// 2. Variable para acumular todas las permutaciones
let result = [];

// 3. Recorrer cada elemento del array
for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const rest = [...array.slice(0, i), ...array.slice(i + 1)];
    const restPermutations = permutations(rest);

    // 4. Combinar el elemento actual con las permutaciones del resto
    for (let perm of restPermutations) {
        result.push([current, ...perm]);
    }
}
return result;
};

// Do not edit below this line
module.exports = permutations;
