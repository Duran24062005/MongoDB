// Seleccionar (o crear) la base de datos
use crud_demo;

// Limpiar la colección si ya existía
db.usuarios.drop();

// ==========================
// 1. Insertar datos de ejemplo
// ==========================
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
]);

// ==========================
// 2. Create
// ==========================
db.usuarios.insertOne({
  nombre: "Carlos",
  edad: 22,
  ciudad: "Cartagena",
  hobbies: ["surf", "fotografía"],
  notas: [{ materia: "Arte", nota: 3.9 }]
});

// ==========================
// 3. Read
// ==========================
// Todos los usuarios
print("---- Todos los usuarios ----");
printjson(db.usuarios.find().toArray());

// Un usuario específico
print("---- Usuario Ana ----");
printjson(db.usuarios.findOne({ nombre: "Ana" }));

// Usuarios mayores de 25
print("---- Usuarios mayores de 25 ----");
printjson(db.usuarios.find({ edad: { $gt: 25 } }).toArray());

// ==========================
// 4. Update
// ==========================
// Agregar país a un usuario
db.usuarios.updateOne(
  { nombre: "Juan" },
  { $set: { pais: "Colombia" } }
);

// Agregar país a todos
db.usuarios.updateMany({}, { $set: { pais: "Colombia" } });

// ==========================
// 5. Delete
// ==========================
// Eliminar un usuario
db.usuarios.deleteOne({ nombre: "Pedro" });

// ==========================
// 6. Consultas avanzadas
// ==========================

// Lógicas
print("---- Bogotá y >=25 ----");
printjson(
  db.usuarios.find({
    $and: [{ ciudad: "Bogotá" }, { edad: { $gte: 25 } }]
  }).toArray()
);

print("---- Medellín o menores de 22 ----");
printjson(
  db.usuarios.find({
    $or: [{ ciudad: "Medellín" }, { edad: { $lt: 22 } }]
  }).toArray()
);

// Arrays
print("---- Usuarios con lectura ----");
printjson(db.usuarios.find({ hobbies: "lectura" }).toArray());

print("---- Usuarios con 3 hobbies ----");
printjson(db.usuarios.find({ hobbies: { $size: 3 } }).toArray());

print("---- Usuarios con fútbol y lectura ----");
printjson(db.usuarios.find({ hobbies: { $all: ["fútbol", "lectura"] } }).toArray());

// RegEx
print("---- Nombres que empiezan con L ----");
printjson(db.usuarios.find({ nombre: { $regex: /^L/ } }).toArray());

print("---- Nombres que contienen 'an' ----");
printjson(db.usuarios.find({ nombre: { $regex: /an/i } }).toArray());

// Subdocumentos
print("---- Usuarios con nota >=4 en Matemáticas ----");
printjson(
  db.usuarios.find({
    notas: { $elemMatch: { materia: "Matemáticas", nota: { $gte: 4 } } }
  }).toArray()
);
