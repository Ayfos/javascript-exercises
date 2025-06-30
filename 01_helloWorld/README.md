# Ejercicio 01 - Hola Mundo

El objetivo principal de este ejercicio es guiarte en el proceso de ejecutar las pruebas y asegurarte de que todo está correctamente configurado y funcionando.

En este directorio encontrarás otros 2 archivos:
  1. `helloWorld.js`
  2. `helloWorld.spec.js`

Esta estructura debería ser similar para todos los ejercicios. El archivo javascript simple es donde escribirás tu código, y el archivo `spec` contiene las pruebas que verifican que tu código funcione correctamente.

Veamos primero el archivo de pruebas:
```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('dice "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```
En la parte superior del archivo usamos `require()` para importar el código desde el archivo javascript (`helloWorld.js`) para poder probarlo.

El siguiente bloque (`describe()`) es el cuerpo de la prueba. Básicamente, lo único que hace es ejecutar tu código y comprobar si la salida es correcta. La función `test()` describe en inglés sencillo lo que debería suceder e incluye la función `expect()`. Para este ejemplo simple debería ser bastante fácil de leer.

Por ahora no necesitas preocuparte por cómo escribir pruebas, pero deberías intentar familiarizarte lo suficiente con la sintaxis como para entender qué te están pidiendo las pruebas. Adelante, ejecuta las pruebas escribiendo `npm test helloWorld.spec.js` en la terminal y observa cómo falla. La salida de ese comando debería decirte exactamente qué salió mal con tu código. En este caso, ejecutar la función `helloWorld()` debería devolver la frase 'Hello, World!', pero en cambio devuelve una cadena vacía...

Así que echemos un vistazo al archivo javascript:
```javascript
const helloWorld = function() {
  return ''
}

module.exports = helloWorld
```
En este archivo tenemos una función simple llamada helloWorld que devuelve una cadena vacía... que es exactamente de lo que se quejaba nuestra prueba. El `module.exports` en la última línea es cómo exportamos la función para que pueda ser importada con `require()` en el archivo de pruebas.

Intenta hacer que la prueba pase editando el valor de retorno de la función y luego ejecuta de nuevo el archivo de pruebas.

Por si acaso tienes dudas en este punto, la prueba te está diciendo que al ejecutar la función `helloWorld` debería devolver la frase `Hello, World!`. La puntuación y las mayúsculas importan, así que revisa eso si la prueba aún no pasa.

Así es como debería quedar la función final:
```javascript
const helloWorld = function() {
  return 'Hello, World!'
}

module.exports = helloWorld
```

En general, hemos configurado estas pruebas de manera que solo tengas que actualizar o escribir el código que se está probando. No deberías preocuparte por importar o exportar nada en esta etapa... así que simplemente céntrate en esa parte del código y haz lo necesario para que las pruebas pasen!
