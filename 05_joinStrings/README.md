# Ejercicio 05 - joinStrings

## Paso 1: Aprende
Primero, observa el código de ejemplo en `joinStrings-example.js`. Intenta predecir cuál será la salida de `console.log`. Cuando estés listo, ejecuta la prueba:
```bash
npm test joinStrings-example.spec.js
```
Si ves algo inesperado, siéntete libre de revisar el código nuevamente.

## Paso 2: Hazlo
Después de entender el código de ejemplo, deberás recrear el fragmento por tu cuenta siguiendo estas instrucciones (en `joinStrings.js`):

1. Crea 4 variables: `firstName`, `lastName`, `thisYear` y `birthYear`.

2. Crea una quinta variable, `greeting`, que se construya a partir de las 4 variables anteriores.
- Debe contener un saludo que incluya el nombre completo de la persona y su edad.

Nota: Para que las pruebas pasen, deberás usar los valores y el texto exactos (como se describe en `joinStrings.js`). Si las pruebas fallan, revisa el feedback en tu terminal y comprueba los espacios, las mayúsculas y la puntuación.

## Paso 3: Optimiza
Edita tu código para que sea más fácil de leer siguiendo estas instrucciones:

1. Crea 2 nuevas variables: `fullName` y `age`.
- NO escribas simplemente el nombre completo y la edad en las nuevas variables.
- En su lugar, usa las variables ya existentes, con los cálculos que actualmente están dentro de `greeting`.

2. Edita la cadena `greeting` para que use `fullName` y `age` en lugar de las otras 4 variables.
- `greeting` debería verse algo así:
```js
"Hello! My name is " + fullName
```

Ejecuta todas las pruebas una vez más para asegurarte de que la salida no haya cambiado:
```bash
npm test joinStrings.spec.js
```

## Pistas

- Consulta la documentación sobre variables en JavaScript para una referencia rápida.

- Revisa la [lección sobre Variables y Operadores](https://www.theodinproject.com/lessons/foundations-variables-and-operators) si sigues atascado.
