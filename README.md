# Mongo DB


![Mongo DB CRUD Operations](./img/mongoCRUDOPerations.jpeg)


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

## Documentation

- 📚 [Docs](https://www.mongodb.com/)
- 🚀 [Deploy](https://cloud.mongodb.com/v2/655a9f473dc5006ce2a81310#/overview?automateSecurity=true)
- [Videos](https://drive.google.com/drive/folders/1j7DYUqLththJx8wVGlTuzwKw_ytTk_Ap?lfhs=2)
