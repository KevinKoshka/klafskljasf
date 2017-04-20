##React MK

Para levantar el server con **express**, por ahora se usa:
```
  $ npm start
```
Para levantar el **watchify** de **browserify** se usa:
```
  $ npm run watch
```
Esto es lo próximo a cambiar, unificar estod dos pasos.


Para iniciar **MongoDB**, correr en consola:
```
  $ mongod
```
Por default el puerto que se abre es el **27017**. Para conectar el servicio, hay que abrir **MongoBooster**,
ir a **Connect > From URI** e ingresar **mongodb://localhost:27017**. No estaría nada mal que todo esto se haga
en un comando.