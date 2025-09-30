# Creación de base bases de datos en mongo

### Por terminal

1. Primero revisamos el estado del servicio, si está activo, inactivo o no existe.

```js
// Comando para revisar el servicio
sudo systemctl status mongod

```
2. Si está activo, podemos entrar al sistema con el siguiente comando.

```js
// Comando para entrar a mongo
mongosh

```

3. Luego revisamos las bases de datos existentes:
```linux 
// Comando
show databases

// O
show dbs

```

