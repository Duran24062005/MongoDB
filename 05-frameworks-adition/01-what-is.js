// Framework de agregación
// ===============================================
// 🧠 FRAMEWORK DE AGREGACIÓN EN MONGODB
// ===============================================
//
// 💬 Introducción:
// El "Aggregation Framework" (Marco de Agregación) es un
// conjunto de herramientas que permite procesar datos dentro
// de MongoDB, transformarlos y generar resultados calculados.
//
// Es similar a un "pipeline" (tubería de procesamiento),
// donde cada etapa ($stage) toma los documentos de la etapa
// anterior, los transforma y los pasa a la siguiente.
//
// Sintaxis básica:
// db.<colección>.aggregate([
//     { <etapa_1> },
//     { <etapa_2> },
//     ...
// ])
//
// -----------------------------------------------------------

// 📚 Ejemplo base de datos: una colección de ventas
db.sales.insertMany([
    { _id: 1, item: "camisa", precio: 20, cantidad: 5, tienda: "A", fecha: ISODate("2025-01-01") },
    { _id: 2, item: "pantalón", precio: 25, cantidad: 4, tienda: "B", fecha: ISODate("2025-01-02") },
    { _id: 3, item: "zapatos", precio: 40, cantidad: 3, tienda: "A", fecha: ISODate("2025-01-03") },
    { _id: 4, item: "camisa", precio: 20, cantidad: 2, tienda: "B", fecha: ISODate("2025-01-04") },
    { _id: 5, item: "zapatos", precio: 40, cantidad: 1, tienda: "A", fecha: ISODate("2025-01-05") }
]);

// -----------------------------------------------------------
// 🧩 1️⃣ Etapa $match (filtrar documentos)
//
// Filtra documentos igual que lo haría un find()
db.sales.aggregate([
    { $match: { tienda: "A" } }
]);

// -----------------------------------------------------------
// 🧩 2️⃣ Etapa $group (agrupar y calcular)
//
// Agrupa por un campo y calcula totales o promedios
db.sales.aggregate([
    {
        $group: {
            _id: "$item",                   // Agrupa por 'item'
            totalVentas: { $sum: "$cantidad" },   // Suma las cantidades
            ingresoTotal: { $sum: { $multiply: ["$cantidad", "$precio"] } } // cantidad * precio
        }
    }
]);

// -----------------------------------------------------------
// 🧩 3️⃣ Etapa $project (seleccionar campos o crear nuevos)
//
// Controla qué campos se muestran y puede crear nuevos campos calculados
db.sales.aggregate([
    {
        $project: {
            item: 1,                     // mostrar campo original
            tienda: 1,                   // mostrar campo original
            total: { $multiply: ["$precio", "$cantidad"] }  // nuevo campo calculado
        }
    }
]);

// -----------------------------------------------------------
// 🧩 4️⃣ Etapa $sort (ordenar los resultados)
//
// Ordena los resultados por un campo específico
db.sales.aggregate([
    { $sort: { precio: -1 } }  // -1 descendente, 1 ascendente
]);

// -----------------------------------------------------------
// 🧩 5️⃣ Etapa $limit y $skip (limitar y omitir)
//
// $limit: devuelve sólo X documentos
// $skip: omite los primeros X documentos
db.sales.aggregate([
    { $sort: { fecha: 1 } },
    { $skip: 2 },
    { $limit: 2 }
]);

// -----------------------------------------------------------
// 🧩 6️⃣ Etapa $lookup (join entre colecciones)
//
// Une documentos de otra colección (similar a un JOIN en SQL)
db.tiendas.insertMany([
    { _id: "A", ciudad: "Bogotá" },
    { _id: "B", ciudad: "Medellín" }
]);

db.sales.aggregate([
    {
        $lookup: {
            from: "tiendas",          // Colección a unir
            localField: "tienda",     // Campo en sales
            foreignField: "_id",      // Campo en tiendas
            as: "info_tienda"         // Nombre del nuevo arreglo
        }
    }
]);

// -----------------------------------------------------------
// 🧩 7️⃣ Etapa $unwind (desenrollar arreglos)
//
// Divide un documento con arreglo en varios documentos
db.sales.aggregate([
    { $lookup: {
        from: "tiendas",
        localField: "tienda",
        foreignField: "_id",
        as: "info_tienda"
    }},
    { $unwind: "$info_tienda" } // Cada documento tendrá una sola tienda
]);

// -----------------------------------------------------------
// 🧩 8️⃣ Pipeline completo combinado
//
// Ejemplo que combina varias etapas:
db.sales.aggregate([
    { $match: { tienda: "A" } },
    { $group: {
        _id: "$item",
        totalCantidad: { $sum: "$cantidad" },
        ingresoTotal: { $sum: { $multiply: ["$cantidad", "$precio"] } }
    }},
    { $sort: { ingresoTotal: -1 } },
    { $project: {
        _id: 0,
        producto: "$_id",
        totalCantidad: 1,
        ingresoTotal: 1
    }}
]);

// -----------------------------------------------------------
// 🧾 Resumen de las etapas más comunes:
//
// - $match: filtrar documentos.
// - $group: agrupar y calcular.
// - $project: mostrar o crear campos.
// - $sort: ordenar resultados.
// - $limit / $skip: limitar u omitir.
// - $lookup: unir colecciones.
// - $unwind: descomponer arreglos.
//
// -----------------------------------------------------------
//
// 💡 Consejo:
// El framework de agregación se ejecuta directamente en el
// servidor, por lo que es mucho más eficiente que procesar
// los datos desde la aplicación.
//
// ===============================================
// 🔚 Fin del ejemplo de Aggregation Framework
// ===============================================
