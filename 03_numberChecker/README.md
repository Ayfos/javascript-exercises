# Ejercicio 03 - numberChecker

Modifica el código para que devuelva `true` cuando el número sea mayor o igual a 10, y `false` si es menor que 10.

Actualmente, el código devuelve `true` si el número es `6`, en caso contrario, devuelve `false`.

También notarás que en este ejercicio hay varias pruebas (en el archivo `numberChecker.spec.js`). Solo la primera prueba está habilitada actualmente. Así que, después de asegurarte de que la primera prueba pasa, habilita la siguiente eliminando la parte `.skip` de la función `test.skip()`. Normalmente es más fácil si habilitas solo una prueba a la vez, luego editas tu código para que pase. Puedes seguir habilitando una a una hasta que, poco a poco, todas pasen.

- Si al ejecutar `npm test numberChecker.spec.js` obtienes resultados similares a los que se muestran abajo, asegúrate de haber habilitado el resto de las pruebas, como se describe en las instrucciones anteriores.

```
Test Suites: 1 passed, 1 total
Tests:       3 skipped, 1 passed, 4 total
```

## Pistas

- Solo necesitas editar la línea 2.

- Consulta la documentación sobre operadores de comparación en JavaScript para una referencia rápida.
