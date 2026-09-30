# Ejercicio 01 - Hola Mundo

El objetivo principal de este ejercicio es guiarte en el proceso de ejecutar las pruebas y asegurarte de que todo está correctamente configurado y funcionando.

In this directory you will find 2 other files:

1. `helloWorld.js`
1. `helloWorld.spec.js`

Esta estructura debería ser similar para todos los ejercicios. El archivo javascript simple es donde escribirás tu código, y el archivo `spec` contiene las pruebas que verifican que tu código funcione correctamente.

Let's look at the spec file first:

```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('dice "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```

At the very top of the file we use `require()` to import the code from the javascript file (`helloWorld.js`) so that we can test it.

The next block (`describe()`) is the body of the test. Basically, all it's doing is running your code and testing to see if the output is correct. The `test()` function describes what should be happening in plain English and then includes the `expect()` function. For this simple example it should be pretty simple to read.

Por ahora no necesitas preocuparte por cómo escribir pruebas, pero deberías intentar familiarizarte lo suficiente con la sintaxis como para entender qué te están pidiendo las pruebas. Adelante, ejecuta las pruebas escribiendo `npm test helloWorld.spec.js` en la terminal y observa cómo falla. La salida de ese comando debería decirte exactamente qué salió mal con tu código. En este caso, ejecutar la función `helloWorld()` debería devolver la frase 'Hello, World!', pero en cambio devuelve una cadena vacía...

so let's look at the javascript file:

```javascript
const helloWorld = function() {
  return ''
}

module.exports = helloWorld;
```

In this file, we have a simple function called helloWorld that returns an empty string... which is exactly what our test was complaining about. The `module.exports` on the last line is how we export the function so that it can be imported with `require()` in the spec file.

Intenta hacer que la prueba pase editando el valor de retorno de la función y luego ejecuta de nuevo el archivo de pruebas.

Por si acaso tienes dudas en este punto, la prueba te está diciendo que al ejecutar la función `helloWorld` debería devolver la frase `Hello, World!`. La puntuación y las mayúsculas importan, así que revisa eso si la prueba aún no pasa.

This is what the final function should look like:

```javascript
const helloWorld = function() {
  return 'Hello, World!'
}

module.exports = helloWorld;
```

For the most part we've set up these tests in such a way that you only have to update or write the code being tested. You should not have to worry about importing or exporting anything at this stage, so just work around that bit of the code and write what it takes to make them pass!
