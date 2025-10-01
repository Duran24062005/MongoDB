// Esquema Fijo
// ======================================
// ESQUEMAS FIJOS Y NO FIJOS EN MONGODB
// ======================================
//
// En MongoDB, por defecto las colecciones NO tienen
// un esquema fijo (schema-less).
// Esto significa que puedes insertar documentos con
// diferentes estructuras dentro de la misma colección.
//
// Sin embargo, también es posible imponer un ESQUEMA FIJO
// usando validadores (JSON Schema) al momento de crear
// la colección.
//
// ======================================
// ESQUEMA NO FIJO (por defecto en MongoDB)
// ======================================
//
// - No se define un esquema rígido.
// - Permite insertar documentos con diferentes campos.
// - Muy flexible pero puede generar inconsistencias.
//
// Ejemplo:
// (en mongosh)
//
// Insertar documentos con diferentes estructuras:
db.usuariosNoFijo.insertOne({ nombre: "Alexi", edad: 25 });
db.usuariosNoFijo.insertOne({ nickname: "Maria", hobby: "pintar", activo: true });
db.usuariosNoFijo.insertOne({ user: "Carlos", notas: [10, 9, 8] });
//
// Resultado: la colección tendrá documentos con
// campos distintos y no habrá ningún error.
//

// ======================================
// ESQUEMA FIJO (con JSON Schema Validation)
// ======================================
//
// - Se usa al crear la colección.
// - Solo permite documentos que cumplan las reglas.
// - Asegura consistencia en los datos.
//
// Sintaxis general:
// db.createCollection("nombre", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: [ "campo1", "campo2" ],
//       properties: {
//         campo1: { bsonType: "string" },
//         campo2: { bsonType: "int" }
//       }
//     }
//   }
// });
//
// Ejemplo práctico:
db.createCollection("usuariosFijo", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "nombre", "edad" ],
      properties: {
        nombre: { bsonType: "string" },
        edad: { bsonType: "int" },
        correo: { bsonType: "string" }
      }
    }
  }
});

// Insertar documento válido:
db.usuariosFijo.insertOne({ nombre: "Juan", edad: 30, correo: "juan@mail.com" });

// Insertar documento inválido (falta 'edad'):
db.usuariosFijo.insertOne({ nombre: "Pedro", profesion: "Carpintero" });
//
// Resultado: este segundo insert lanzará un error,
// ya que no cumple con el esquema definido.
//

// ======================================
// RESUMEN RÁPIDO
// ======================================
//
// ✔ Esquema NO FIJO:
//   - Default de MongoDB
//   - Flexible, acepta cualquier estructura
//   - Riesgo de inconsistencia
//
// ✔ Esquema FIJO:
//   - Se define con JSON Schema en la colección
//   - Garantiza consistencia
//   - Rechaza documentos inválidos
