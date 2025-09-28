<div id="std-label-crud"></div>

# MongoDB CRUD Operations

![Mongo DB CRUD Operations](../img/mongoCRUDOPerations.jpeg)

CRUD operations *create*, *read*, *update*, and *delete*
[documents](https://mongodb.com/docs/manual/core/document/#std-label-bson-document-format).

You can connect with driver methods and perform CRUD operations for deployments hosted in the following environments:

[perform CRUD operations in the UI](https://www.mongodb.com/docs/atlas/atlas-ui/documents/)You can [perform CRUD operations in the UI](https://www.mongodb.com/docs/atlas/atlas-ui/documents/) for deployments hosted in [MongoDB Atlas](https://www.mongodb.com/docs/atlas).

## Create Operations

Create or insert operations add new [documents](https://mongodb.com/docs/manual/core/document/#std-label-bson-document-format) to a [collection](https://mongodb.com/docs/manual/core/databases-and-collections/#std-label-collections). If the collection does not currently exist, insert operations will create the collection.

MongoDB provides the following methods to insert documents into a collection:

- [`db.collection.insertOne()`](https://mongodb.com/docs/manual/reference/method/db.collection.insertOne/#mongodb-method-db.collection.insertOne)

- [`db.collection.insertMany()`](https://mongodb.com/docs/manual/reference/method/db.collection.insertMany/#mongodb-method-db.collection.insertMany)

In MongoDB, insert operations target a single [collection](https://mongodb.com/docs/manual/reference/glossary/#std-term-collection). All write operations in MongoDB are [atomic](https://mongodb.com/docs/manual/core/write-operations-atomicity/) on the level of a single [document](https://mongodb.com/docs/manual/core/document/#std-label-bson-document-format).

For examples, see [Insert Documents](https://mongodb.com/docs/manual/tutorial/insert-documents/).

<div id="std-label-crud-read-operations"></div>

## Read Operations

Read operations retrieve [documents](https://mongodb.com/docs/manual/core/document/#std-label-bson-document-format) from a [collection](https://mongodb.com/docs/manual/core/databases-and-collections/#std-label-collections); i.e. query a collection for documents. MongoDB provides the following methods to read documents from a collection:

- [`db.collection.find()`](https://mongodb.com/docs/manual/reference/method/db.collection.find/#mongodb-method-db.collection.find)

You can specify [query filters or criteria](https://mongodb.com/docs/manual/tutorial/query-documents/#std-label-read-operations-query-argument) that identify the documents to return.

For examples, see:

- [Query Documents](https://mongodb.com/docs/manual/tutorial/query-documents/)

- [Query on Embedded/Nested Documents](https://mongodb.com/docs/manual/tutorial/query-embedded-documents/)

- [Query an Array](https://mongodb.com/docs/manual/tutorial/query-arrays/)

- [Query an Array of Embedded Documents](https://mongodb.com/docs/manual/tutorial/query-array-of-documents/)

## Update Operations

Update operations modify existing [documents](https://mongodb.com/docs/manual/core/document/#std-label-bson-document-format) in a [collection](https://mongodb.com/docs/manual/core/databases-and-collections/#std-label-collections). MongoDB provides the following methods to update documents of a collection:

- [`db.collection.updateOne()`](https://mongodb.com/docs/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne)

- [`db.collection.updateMany()`](https://mongodb.com/docs/manual/reference/method/db.collection.updateMany/#mongodb-method-db.collection.updateMany)

- [`db.collection.replaceOne()`](https://mongodb.com/docs/manual/reference/method/db.collection.replaceOne/#mongodb-method-db.collection.replaceOne)

In MongoDB, update operations target a single collection. All write operations in MongoDB are [atomic](https://mongodb.com/docs/manual/core/write-operations-atomicity/) on the level of a single document.

You can specify criteria, or filters, that identify the documents to update. These [filters](https://mongodb.com/docs/manual/core/document/#std-label-document-query-filter) use the same syntax as read operations.

For examples, see [Update Documents](https://mongodb.com/docs/manual/tutorial/update-documents/).

## Delete Operations

Delete operations remove documents from a collection. MongoDB provides the following methods to delete documents of a collection:

- [`db.collection.deleteOne()`](https://mongodb.com/docs/manual/reference/method/db.collection.deleteOne/#mongodb-method-db.collection.deleteOne)

- [`db.collection.deleteMany()`](https://mongodb.com/docs/manual/reference/method/db.collection.deleteMany/#mongodb-method-db.collection.deleteMany)

In MongoDB, delete operations target a single [collection](https://mongodb.com/docs/manual/reference/glossary/#std-term-collection). All write operations in MongoDB are [atomic](https://mongodb.com/docs/manual/core/write-operations-atomicity/) on the level of a single document.

You can specify criteria, or filters, that identify the documents to remove. These [filters](https://mongodb.com/docs/manual/core/document/#std-label-document-query-filter) use the same syntax as read operations.

For examples, see [Delete Documents](https://mongodb.com/docs/manual/tutorial/remove-documents/).

## Bulk Write

MongoDB provides the ability to perform write operations in bulk. For details, see [Bulk Write Operations](https://mongodb.com/docs/manual/core/bulk-write-operations/).


---
---
---
# Basics CRUD Operations

🚀 MongoDB trabaja con **colecciones** (equivalentes a tablas) y **documentos** (equivalentes a filas en SQL).
Aquí tienes los comandos básicos de **CRUD** (Create, Read, Update, Delete) que puedes usar en la **Mongo Shell** o en el **mongosh**.

---

### 📌 1. Create (Insertar documentos)

```js
// Insertar un solo documento
db.collection.insertOne({
  nombre: "Juan",
  edad: 25,
  ciudad: "Bogotá"
})

// Insertar varios documentos
db.collection.insertMany([
  { nombre: "Ana", edad: 30, ciudad: "Medellín" },
  { nombre: "Pedro", edad: 28, ciudad: "Cali" }
])
```

---

### 📌 2. Read (Consultar documentos)

```js
// Obtener todos los documentos
db.collection.find()

// Obtener con formato más legible
db.collection.find().pretty()

// Filtrar documentos (ejemplo: por ciudad)
db.collection.find({ ciudad: "Bogotá" })

// Operadores de comparación
db.collection.find({ edad: { $gt: 25 } })   // > 25
db.collection.find({ edad: { $lt: 30 } })   // < 30
db.collection.find({ edad: { $gte: 25 } })  // >= 25
db.collection.find({ edad: { $ne: 25 } })   // != 25

// Obtener un solo documento
db.collection.findOne({ nombre: "Ana" })
```

---

### 📌 3. Update (Actualizar documentos)

```js
// Actualizar un solo documento
db.collection.updateOne(
  { nombre: "Juan" },           // filtro
  { $set: { edad: 26 } }        // actualización
)

// Actualizar varios documentos
db.collection.updateMany(
  { ciudad: "Bogotá" },         // filtro
  { $set: { pais: "Colombia" } }
)

// Reemplazar todo un documento
db.collection.replaceOne(
  { nombre: "Pedro" },          // filtro
  { nombre: "Pedro", edad: 29, ciudad: "Cali", pais: "Colombia" }
)
```

---

### 📌 4. Delete (Eliminar documentos)

```js
// Eliminar un solo documento
db.collection.deleteOne({ nombre: "Ana" })

// Eliminar varios documentos
db.collection.deleteMany({ ciudad: "Bogotá" })

// Eliminar todos los documentos
db.collection.deleteMany({})
```

---

👉 Nota: reemplaza `collection` con el nombre de tu colección real.
Ejemplo: `db.usuarios.find()`

---


## Advance Operators

🔥 Te muestro ahora los **operadores avanzados** en MongoDB que te servirán para hacer consultas más potentes.

---

## 📌 Operadores lógicos

```js
// $and → todos deben cumplirse
db.usuarios.find({
  $and: [
    { ciudad: "Bogotá" },
    { edad: { $gte: 25 } }
  ]
})

// $or → al menos uno debe cumplirse
db.usuarios.find({
  $or: [
    { ciudad: "Medellín" },
    { edad: { $lt: 20 } }
  ]
})

// $nor → ninguno debe cumplirse
db.usuarios.find({
  $nor: [
    { ciudad: "Cali" },
    { edad: { $lt: 18 } }
  ]
})

// $not → niega una condición
db.usuarios.find({ edad: { $not: { $gt: 30 } } })
```

---

## 📌 Operadores de comparación

```js
db.usuarios.find({ edad: { $eq: 25 } })  // igual
db.usuarios.find({ edad: { $ne: 25 } })  // distinto
db.usuarios.find({ edad: { $gt: 25 } })  // mayor que
db.usuarios.find({ edad: { $gte: 25 } }) // mayor o igual
db.usuarios.find({ edad: { $lt: 25 } })  // menor que
db.usuarios.find({ edad: { $lte: 25 } }) // menor o igual

// $in → valores dentro de un conjunto
db.usuarios.find({ ciudad: { $in: ["Bogotá", "Medellín"] } })

// $nin → valores que NO estén en un conjunto
db.usuarios.find({ ciudad: { $nin: ["Cali", "Cartagena"] } })
```

---

## 📌 Búsqueda por patrones (RegEx)

```js
// Nombre que empiece por "A"
db.usuarios.find({ nombre: { $regex: /^A/ } })

// Nombre que termine en "o"
db.usuarios.find({ nombre: { $regex: /o$/ } })

// Nombre que contenga "an" (sin importar mayúsculas/minúsculas)
db.usuarios.find({ nombre: { $regex: /an/i } })
```

---

## 📌 Operadores de arrays

```js
// Contiene un valor específico
db.usuarios.find({ hobbies: "fútbol" })

// Contiene todos los valores especificados
db.usuarios.find({ hobbies: { $all: ["fútbol", "lectura"] } })

// El array tiene cierta longitud
db.usuarios.find({ hobbies: { $size: 3 } })

// Coincidir un elemento que cumpla una condición
db.usuarios.find({ "notas": { $elemMatch: { materia: "Matemáticas", nota: { $gte: 4 } } } })
```

---

👉 Con estos operadores puedes construir consultas súper flexibles.


## Mini Project


🚀 Te voy a armar un **mini proyecto de ejemplo** con la colección `usuarios`, incluyendo datos de prueba, operaciones CRUD y consultas avanzadas.

---

## 📌 1. Crear la colección y agregar datos de ejemplo

```js
// Insertar varios usuarios
db.usuarios.insertMany([
  {
    nombre: "Juan",
    edad: 25,
    ciudad: "Bogotá",
    hobbies: ["fútbol", "lectura"],
    notas: [
      { materia: "Matemáticas", nota: 4.5 },
      { materia: "Lengua", nota: 3.8 }
    ]
  },
  {
    nombre: "Ana",
    edad: 30,
    ciudad: "Medellín",
    hobbies: ["pintura", "lectura"],
    notas: [
      { materia: "Historia", nota: 4.2 },
      { materia: "Arte", nota: 4.8 }
    ]
  },
  {
    nombre: "Pedro",
    edad: 20,
    ciudad: "Cali",
    hobbies: ["fútbol", "videojuegos"],
    notas: [
      { materia: "Matemáticas", nota: 2.9 },
      { materia: "Lengua", nota: 3.2 }
    ]
  },
  {
    nombre: "Lucía",
    edad: 27,
    ciudad: "Bogotá",
    hobbies: ["música", "viajar", "lectura"],
    notas: [
      { materia: "Matemáticas", nota: 4.9 },
      { materia: "Ciencias", nota: 4.7 }
    ]
  }
])
```

---

## 📌 2. Operaciones CRUD

### 🔹 Create

```js
db.usuarios.insertOne({
  nombre: "Carlos",
  edad: 22,
  ciudad: "Cartagena",
  hobbies: ["surf", "fotografía"],
  notas: [{ materia: "Arte", nota: 3.9 }]
})
```

### 🔹 Read

```js
// Todos los usuarios
db.usuarios.find()

// Un usuario específico
db.usuarios.findOne({ nombre: "Ana" })

// Usuarios mayores de 25 años
db.usuarios.find({ edad: { $gt: 25 } })
```

### 🔹 Update

```js
// Agregar un campo nuevo (país) a un usuario
db.usuarios.updateOne(
  { nombre: "Juan" },
  { $set: { pais: "Colombia" } }
)

// Agregar país a todos los usuarios
db.usuarios.updateMany(
  {},
  { $set: { pais: "Colombia" } }
)
```

### 🔹 Delete

```js
// Eliminar un usuario
db.usuarios.deleteOne({ nombre: "Pedro" })

// Eliminar todos los de Medellín
db.usuarios.deleteMany({ ciudad: "Medellín" })
```

---

## 📌 3. Consultas avanzadas

### 🔹 Lógicas

```js
// Usuarios en Bogotá Y con edad >= 25
db.usuarios.find({
  $and: [{ ciudad: "Bogotá" }, { edad: { $gte: 25 } }]
})

// Usuarios en Medellín O menores de 22
db.usuarios.find({
  $or: [{ ciudad: "Medellín" }, { edad: { $lt: 22 } }]
})
```

### 🔹 Arrays

```js
// Usuarios que tengan el hobby "lectura"
db.usuarios.find({ hobbies: "lectura" })

// Usuarios que tengan exactamente 3 hobbies
db.usuarios.find({ hobbies: { $size: 3 } })

// Usuarios que tengan fútbol Y lectura
db.usuarios.find({ hobbies: { $all: ["fútbol", "lectura"] } })
```

### 🔹 RegEx

```js
// Nombres que empiecen con "L"
db.usuarios.find({ nombre: { $regex: /^L/ } })

// Nombres que contengan "an" (ignorar mayúsculas/minúsculas)
db.usuarios.find({ nombre: { $regex: /an/i } })
```

### 🔹 Subdocumentos

```js
// Usuarios con nota en Matemáticas >= 4
db.usuarios.find({
  notas: { $elemMatch: { materia: "Matemáticas", nota: { $gte: 4 } } }
})
```

---

✅ Con este ejemplo ya puedes **practicar CRUD + operadores avanzados** en tu propia base de datos MongoDB.