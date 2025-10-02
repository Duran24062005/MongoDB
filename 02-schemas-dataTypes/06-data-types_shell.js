// Tipos de Datos en Shell

// ======================================
// TIPOS DE DATOS EN MONGOSH (SHELL)
// ======================================
//
// MongoDB usa BSON (Binary JSON), pero en la shell (`mongosh`)
// tenemos funciones y literales específicos para declarar
// esos tipos de datos al insertar documentos.
//
// ======================================
// LISTA DE TIPOS Y SU SINTAXIS EN SHELL
// ======================================

// 1. STRING
// Texto normal entre comillas
db.datos.insertOne({ tipo: "String", valor: "Hola mundo" });

// 2. INT (32 bits)
// Se usa NumberInt()
db.datos.insertOne({ tipo: "Int32", valor: NumberInt(25) });

// 3. LONG (64 bits)
// Se usa NumberLong()
db.datos.insertOne({ tipo: "Int64", valor: NumberLong(1234567890123) });

// 4. DOUBLE (decimal flotante)
// Números con punto decimal
db.datos.insertOne({ tipo: "Double", valor: 3.1416 });

// 5. DECIMAL128 (alta precisión, recomendado para dinero)
// Se usa NumberDecimal("valor")
db.datos.insertOne({ tipo: "Decimal128", valor: NumberDecimal("12345.6789") });

// 6. BOOLEAN
// true o false
db.datos.insertOne({ tipo: "Boolean", valor: true });

// 7. DATE
// Se usa new Date(), siempre en UTC internamente
db.datos.insertOne({ tipo: "Date", valor: new Date() });

// 8. NULL
// Valor nulo
db.datos.insertOne({ tipo: "Null", valor: null });

// 9. ARRAY
// Lista de valores de cualquier tipo
db.datos.insertOne({ tipo: "Array", valor: [1, 2, "texto", true] });

// 10. OBJECT (documento embebido)
// JSON anidado
db.datos.insertOne({
  tipo: "Object",
  valor: { nombre: "Alexi", edad: 25, activo: true }
});

// 11. OBJECTID
// Identificador único (por defecto en _id)
db.datos.insertOne({ tipo: "ObjectId", valor: ObjectId() });

// 12. BINARY DATA
// Se usa BinData(subtipo, "datosHex")
db.datos.insertOne({ tipo: "Binary", valor: BinData(0, "1234abcd") });

// 13. REGULAR EXPRESSION
// Expresiones regulares estilo JS
db.datos.insertOne({ tipo: "Regex", valor: /colombia/i });

// 14. TIMESTAMP
// Marca de tiempo de MongoDB
db.datos.insertOne({ tipo: "Timestamp", valor: Timestamp() });

// 15. JAVASCRIPT
// Código JS embebido (no muy usado en práctica)
db.datos.insertOne({
  tipo: "JavaScript",
  valor: function() { return "Hola desde JS en Mongo"; }
});

// ======================================
// RESUMEN DE FUNCIONES ESPECÍFICAS
// ======================================
//
// NumberInt(x)       → entero 32 bits
// NumberLong(x)      → entero 64 bits
// NumberDecimal("x") → decimal de alta precisión
// ObjectId()         → identificador único BSON
// BinData(t, "hex")  → datos binarios
// Timestamp()        → marca de tiempo
//
// El resto (string, boolean, array, null, object, date)
// se declaran igual que en JavaScript normal.
//
