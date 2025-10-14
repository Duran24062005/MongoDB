// =====================================================
// 🔢 OPERADOR $sort EN MONGODB
// =====================================================
//
// 💬 Introducción:
// $sort es una etapa del *Aggregation Framework* que se usa para
// ORDENAR los documentos del pipeline según uno o varios campos.
//
// Funciona de forma muy parecida a ORDER BY en SQL.
//
// Sintaxis general:
//
// db.<coleccion>.aggregate([
//     { $sort: { <campo1>: 1, <campo2>: -1, ... } }
// ])
//
// Donde:
//   1  → orden ascendente (de menor a mayor)
//  -1  → orden descendente (de mayor a menor)
//
// =====================================================


// -----------------------------------------------------
// 🧱 Ejemplo base: colección "ventas"
db.ventas.insertMany([
  { producto: "camisa", precio: 20, cantidad: 5, tienda: "A", fecha: ISODate("2025-01-01") },
  { producto: "pantalón", precio: 25, cantidad: 4, tienda: "B", fecha: ISODate("2025-01-02") },
  { producto: "zapatos", precio: 40, cantidad: 3, tienda: "A", fecha: ISODate("2025-01-03") },
  { producto: "camisa", precio: 20, cantidad: 2, tienda: "B", fecha: ISODate("2025-01-04") },
  { producto: "zapatos", precio: 40, cantidad: 1, tienda: "C", fecha: ISODate("2025-01-05") },
  { producto: "gorra", precio: 15, cantidad: 6, tienda: "A", fecha: ISODate("2025-01-06") },
  { producto: "camisa", precio: 20, cantidad: 8, tienda: "A", fecha: ISODate("2025-01-07") }
]);

// -----------------------------------------------------
// 🧩 1️⃣ Orden básico ascendente
//
// Ordenar los documentos por el campo "precio" (de menor a mayor).
db.ventas.aggregate([
  { $sort: { precio: 1 } }
]);
//
// 🔎 Resultado: documentos ordenados desde el precio más bajo al más alto.

// -----------------------------------------------------
// 🧩 2️⃣ Orden descendente
//
// Ordenar los documentos por "cantidad" (de mayor a menor).
db.ventas.aggregate([
  { $sort: { cantidad: -1 } }
]);
//
// 🔎 Resultado: primero las ventas con más unidades.

// -----------------------------------------------------
// 🧩 3️⃣ Ordenar por múltiples campos
//
// Ordenar primero por "precio" ascendente y luego por "cantidad" descendente.
// Si hay dos precios iguales, se usa "cantidad" para desempatar.
db.ventas.aggregate([
  { $sort: { precio: 1, cantidad: -1 } }
]);
//
// 🔎 Resultado: productos con el mismo precio se ordenan por cantidad descendente.

// -----------------------------------------------------
// 🧩 4️⃣ Combinar $match y $sort
//
// Filtramos solo ventas de la tienda "A" y las ordenamos por fecha descendente.
db.ventas.aggregate([
  { $match: { tienda: "A" } },
  { $sort: { fecha: -1 } }
]);
//
// 🔎 Resultado: ventas de la tienda A desde la más reciente a la más antigua.

// -----------------------------------------------------
// 🧩 5️⃣ Combinar $group y $sort
//
// Agrupamos por producto y ordenamos los resultados
// según el total vendido (descendente).
db.ventas.aggregate([
  {
    $group: {
      _id: "$producto",
      total_vendido: { $sum: "$cantidad" },
      ingresos_totales: { $sum: { $multiply: ["$precio", "$cantidad"] } }
    }
  },
  { $sort: { total_vendido: -1 } }
]);
//
// 🔎 Resultado: productos ordenados por cantidad vendida (mayor a menor).

// -----------------------------------------------------
// 🧩 6️⃣ Ordenar por fechas
//
// Ordenar las ventas de más antiguas a más recientes.
db.ventas.aggregate([
  { $sort: { fecha: 1 } }
]);
//
// 🔎 Resultado: las ventas más antiguas aparecen primero.

// -----------------------------------------------------
// 🧩 7️⃣ Ordenar con múltiples etapas
//
// Ejemplo completo: Filtrar, agrupar, ordenar y proyectar.
//
// Mostrar los ingresos totales por tienda,
// ordenados de mayor a menor.
db.ventas.aggregate([
  { $match: { precio: { $gte: 20 } } },
  {
    $group: {
      _id: "$tienda",
      ingresos_totales: { $sum: { $multiply: ["$precio", "$cantidad"] } }
    }
  },
  { $sort: { ingresos_totales: -1 } },
  {
    $project: {
      _id: 0,
      tienda: "$_id",
      ingresos_totales: 1
    }
  }
]);
//
// 🔎 Resultado: listado de tiendas por ingresos, de mayor a menor.

// -----------------------------------------------------
// 📘 RESUMEN FINAL
//
// 🔹 $sort ordena documentos en el pipeline.
// 🔹 Usa 1 para ascendente y -1 para descendente.
// 🔹 Puedes combinar varios campos para orden compuesto.
// 🔹 Funciona bien junto a $match, $group, y $project.
//
// 💡 Buenas prácticas:
// - Ordenar sobre campos indexados mejora el rendimiento.
// - Si el dataset es grande, usa $limit después de $sort
//   para reducir el uso de memoria.
//
// =====================================================
// 🔚 Fin del documento: Operador $sort en MongoDB
// =====================================================



db.Incautaciones.aggregate(
    [
        {
            $match: {
                CANTIDAD: {
                    $gt: 500.0
                }
            }
        }, 
        {
            $group: {
                _id: "$MUNICIPIO",
                TOTAL: {
                    $sum: "$CANTIDAD"
                }
            }
        }, 
        {
            $sort: {TOTAL: -1}
        },
        // ultima etapa, project
        {
            $project: {
                _id: 1,
                TOTAL: 0
            }
        }
    ]
);