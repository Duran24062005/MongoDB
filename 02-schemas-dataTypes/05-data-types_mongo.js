// Tipos de datos en MongoDB

// ======================================
// TIPOS DE DATOS SOPORTADOS EN MONGODB
// ======================================
//
// MongoDB soporta múltiples tipos de datos (BSON types).
// BSON = Binary JSON, es la representación interna
// que utiliza MongoDB para guardar documentos.
//
// Cada tipo tiene su sintaxis específica cuando
// trabajamos en la shell de MongoDB (mongosh).
//
// ======================================
// LISTA DE TIPOS DE DATOS PRINCIPALES
// ======================================
//
// 1. String (cadenas de texto)
// 2. Integer (enteros de 32 bits y 64 bits)
// 3. Double (decimales, flotantes)
// 4. Boolean (true / false)
// 5. Date (fechas y horas)
// 6. Null (valor nulo)
// 7. Array (listas)
// 8. Object (documentos embebidos)
// 9. ObjectId (identificador único generado por MongoDB)
// 10. Binary Data (datos binarios)
// 11. Regular Expression (expresiones regulares)
// 12. Timestamp (marca de tiempo interna)
// 13. Decimal128 (números decimales de alta precisión)
// 14. JavaScript (código JS embebido)
//
// ======================================
// EJEMPLOS DE USO EN MONGOSH
// ======================================

// 1. STRING
db.tipos.insertOne({ tipo: "String", valor: "Hola mundo" });

// 2. INTEGER (32 bits)
db.tipos.insertOne({ tipo: "Integer", valor: NumberInt(25) });

// 3. LONG (64 bits)
db.tipos.insertOne({ tipo: "Long", valor: NumberLong(1234567890123) });

// 4. DOUBLE (flotante)
db.tipos.insertOne({ tipo: "Double", valor: 3.1416 });

// 5. BOOLEAN
db.tipos.insertOne({ tipo: "Boolean", valor: true });

// 6. DATE
db.tipos.insertOne({ tipo: "Date", valor: new Date() });

// 7. NULL
db.tipos.insertOne({ tipo: "Null", valor: null });

// 8. ARRAY
db.tipos.insertOne({ tipo: "Array", valor: [1, 2, 3, "texto", true] });

// 9. OBJECT (documento embebido)
db.tipos.insertOne({
  tipo: "Object",
  valor: { nombre: "Alexi", edad: 25, activo: true }
});

// 10. OBJECTID (generado automáticamente)
db.tipos.insertOne({ tipo: "ObjectId", valor: ObjectId() });

// 11. BINARY DATA
db.tipos.insertOne({ tipo: "Binary", valor: BinData(0, "1234abcd") });

// 12. REGULAR EXPRESSION
db.tipos.insertOne({ tipo: "Regex", valor: /colombia/i });

// 13. TIMESTAMP
db.tipos.insertOne({ tipo: "Timestamp", valor: Timestamp() });

// 14. DECIMAL128 (alta precisión, útil para dinero)
db.tipos.insertOne({ tipo: "Decimal128", valor: NumberDecimal("12345.6789") });

// 15. JAVASCRIPT (código dentro de un documento)
db.tipos.insertOne({
  tipo: "JavaScript",
  valor: function() { return "Hola desde JS en Mongo"; }
});

// ======================================
// NOTAS IMPORTANTES
// ======================================
//
// - MongoDB usa "ObjectId" como _id por defecto.
// - Para enteros, usar NumberInt (32 bits) o NumberLong (64 bits).
// - Para valores financieros se recomienda Decimal128
//   en lugar de Double, para evitar errores de precisión.
// - Date siempre se guarda en UTC.
// - BinData se usa para guardar datos binarios (imágenes, archivos).
// - Regex permite almacenar patrones de búsqueda.
// - JavaScript embebido se usa poco en práctica,
//   pero Mongo lo soporta.
//
// ======================================
// RESUMEN
// ======================================
//
// ✔ MongoDB soporta distintos tipos de datos BSON.
// ✔ Los más usados: String, Number, Boolean, Date, Array, Object.
// ✔ Tipos especiales: ObjectId, Decimal128, Binary, Regex, Timestamp.
// ✔ La elección correcta del tipo mejora la integridad
//   y el rendimiento de las consultas.
//


db.mive.find({anio: {$type: "number"}});
db.mive.find({Anio: {$type: "double"}});
db.mive.find({Anio: {$type: "string"}});