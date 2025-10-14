// Operador $Match


// ===============================================
// 🔍 OPERADOR $match EN MONGODB
// ===============================================
//
// 💬 Introducción:
// $match es una de las etapas más utilizadas en el
// "Aggregation Framework". Sirve para FILTRAR documentos,
// de manera similar a cómo lo hace db.colección.find().
//
// Se usa dentro del método aggregate() como una etapa inicial,
// o en cualquier punto del pipeline para reducir los datos
// antes de otras operaciones.
//
// Sintaxis básica:
// db.<coleccion>.aggregate([
//     { $match: { <condiciones> } }
// ])
//
// -----------------------------------------------------------

// 🧱 Creamos una colección de ejemplo:
db.ventas.insertMany([
    { _id: 1, producto: "camisa", precio: 20, cantidad: 5, tienda: "A", fecha: ISODate("2025-01-01") },
    { _id: 2, producto: "pantalón", precio: 25, cantidad: 4, tienda: "B", fecha: ISODate("2025-01-02") },
    { _id: 3, producto: "zapatos", precio: 40, cantidad: 3, tienda: "A", fecha: ISODate("2025-01-03") },
    { _id: 4, producto: "camisa", precio: 20, cantidad: 2, tienda: "B", fecha: ISODate("2025-01-04") },
    { _id: 5, producto: "zapatos", precio: 40, cantidad: 1, tienda: "C", fecha: ISODate("2025-01-05") },
    { _id: 6, producto: "gorra", precio: 15, cantidad: 6, tienda: "A", fecha: ISODate("2025-01-06") }
]);

// -----------------------------------------------------------
// 🧩 1️⃣ Filtro simple por igualdad
//
// Selecciona documentos donde el campo tienda sea "A"
db.ventas.aggregate([
    { $match: { tienda: "A" } }
]);
//
// 🔎 Resultado: sólo documentos con tienda "A"

// -----------------------------------------------------------
// 🧩 2️⃣ Filtro con operadores de comparación
//
// Los más comunes son:
// $gt (mayor que), $gte (mayor o igual),
// $lt (menor que), $lte (menor o igual),
// $eq (igual), $ne (diferente).
db.ventas.aggregate([
    { $match: { precio: { $gt: 20 } } }
]);
//
// 🔎 Resultado: documentos donde el precio sea mayor a 20

// -----------------------------------------------------------
// 🧩 3️⃣ Filtro con múltiples condiciones (AND implícito)
//
// Cuando hay varios pares clave-valor, se cumple todo.
db.ventas.aggregate([
    { $match: { tienda: "A", precio: { $gt: 15 } } }
]);
//
// 🔎 Resultado: documentos donde tienda = "A" y precio > 15

// -----------------------------------------------------------
// 🧩 4️⃣ Uso explícito de $and y $or
//
// - $and: ambas condiciones deben cumplirse
// - $or: al menos una condición debe cumplirse
db.ventas.aggregate([
    {
        $match: {
            $or: [
                { tienda: "A" },
                { precio: { $lte: 20 } }
            ]
        }
    }
]);
//
// 🔎 Resultado: ventas hechas en la tienda A o con precio ≤ 20

// -----------------------------------------------------------
// 🧩 5️⃣ Uso de $in y $nin
//
// $in: valores dentro de una lista
// $nin: valores que NO están en una lista
db.ventas.aggregate([
    { $match: { tienda: { $in: ["A", "B"] } } }
]);
//
// 🔎 Resultado: documentos donde tienda sea "A" o "B"

// -----------------------------------------------------------
// 🧩 6️⃣ Filtros con fechas
//
// Puedes usar operadores sobre campos tipo fecha
db.ventas.aggregate([
    {
        $match: {
            fecha: { $gte: ISODate("2025-01-03"), $lte: ISODate("2025-01-05") }
        }
    }
]);
//
// 🔎 Resultado: documentos con fecha entre el 3 y el 5 de enero

// -----------------------------------------------------------
// 🧩 7️⃣ Filtros anidados (subdocumentos o arrays)
//
// Si un documento tiene un campo objeto o arreglo, también
// se puede filtrar con notación de punto.
db.inventario.insertMany([
    { item: "camisa", stock: { local: 20, bodega: 15 } },
    { item: "pantalón", stock: { local: 5, bodega: 50 } },
    { item: "zapatos", stock: { local: 10, bodega: 30 } }
]);

db.inventario.aggregate([
    { $match: { "stock.local": { $lt: 15 } } }
]);
//
// 🔎 Resultado: productos con menos de 15 unidades en stock.local

// -----------------------------------------------------------
// 🧩 8️⃣ Uso de expresiones con $expr
//
// Permite comparar campos dentro del mismo documento
db.ventas.aggregate([
    {
        $match: {
            $expr: { $gt: ["$precio", "$cantidad"] }  // precio > cantidad
        }
    }
]);
//
// 🔎 Resultado: documentos donde el precio sea mayor que la cantidad

// -----------------------------------------------------------
// 📘 RESUMEN:
//
// 🔹 $match es equivalente a un filtro (como WHERE en SQL).
// 🔹 Se puede usar en cualquier punto del pipeline,
//     pero se recomienda usarlo al inicio para optimizar.
// 🔹 Admite todos los operadores de comparación y lógicos.
// 🔹 Puede trabajar con fechas, números, textos o subdocumentos.
//
// -----------------------------------------------------------
//
// 💡 Buenas prácticas:
// - Coloca $match al inicio para reducir el volumen de datos.
// - Usa índices en los campos que más se filtran.
// - Combínalo con $group y $project para análisis más potentes.
//
// ===============================================
// 🔚 Fin del documento: Operador $match
// ===============================================
