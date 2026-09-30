# Exercise 01 - repeatString

Write a function that simply repeats the string a given number of times:
Escribe una función que simplemente repita la cadena un numero determinado de veces
```javascript
repeatString('hey', 3) // returns 'heyheyhey'
```

This function will take two arguments, `string` and `num`. If `num` is a negative number, return the string `'ERROR'` instead.

Use loops to implement `repeatString` rather than using the builtin `String.prototype.repeat` which has the same behaviour.
Usa bucles para implementar `repeatString` en lugar de usar la función integrada `String.prototype.repeat`, que tiene el mismo comportamiento.

*Note:* The exercises after this one will not have arguments provided as this one does - you will need to provide them yourself from now on. So read each exercise's README carefully to see what kinds of arguments will be expected.
*Nota:* Los ejercicios posteriores a este no tendrán argumentos como este; deberás proporcionarlos tú mismo a partir de ahora. Lee atentamente el archivo README de cada ejercicio para ver qué tipo de argumentos se esperan.

## Hints

- What inputs does the function need to achieve its goal?
- How can you iteratively build up the final string, using one of the inputs to control the repetition?
