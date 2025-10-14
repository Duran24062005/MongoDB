// Operador $Group

// =====================================================
// ⚙️  COMBINANDO $match Y $group EN MONGODB
// =====================================================
//
// 💬 Introducción:
// En el framework de agregación de MongoDB, es común combinar
// las etapas $match (filtrado) y $group (agrupación).
//
// - $match → filtra los documentos que entran al pipeline.
// - $group → agrupa esos documentos según una o más claves,
//             y permite realizar cálculos sobre ellos.
//
// 🧠 Esta combinación es parecida a un:
//     SELECT ... FROM ... WHERE ... GROUP BY ...
// en SQL.
//
// =====================================================


// -----------------------------------------------------
// 🧱 Datos de ejemplo: colección "ventas"
db.ventas.insertMany([
  { producto: "camisa",  precio: 20, cantidad: 5,  tienda: "A", fecha: ISODate("2025-01-01") },
  { producto: "pantalón", precio: 25, cantidad: 4,  tienda: "B", fecha: ISODate("2025-01-02") },
  { producto: "zapatos",  precio: 40, cantidad: 3,  tienda: "A", fecha: ISODate("2025-01-03") },
  { producto: "camisa",  precio: 20, cantidad: 2,  tienda: "B", fecha: ISODate("2025-01-04") },
  { producto: "zapatos",  precio: 40, cantidad: 1,  tienda: "C", fecha: ISODate("2025-01-05") },
  { producto: "gorra",   precio: 15, cantidad: 6,  tienda: "A", fecha: ISODate("2025-01-06") },
  { producto: "camisa",  precio: 20, cantidad: 8,  tienda: "A", fecha: ISODate("2025-01-07") }
]);


// -----------------------------------------------------
// 🧩 1️⃣ Uso básico: $match + $group
//
// Filtramos las ventas de la tienda "A" y agrupamos por producto,
// calculando el total vendido (sumando cantidad).
db.ventas.aggregate([
  { $match: { tienda: "A" } },  // Filtro previo
  {
    $group: {
      _id: "$producto",                // Clave de agrupación
      total_vendido: { $sum: "$cantidad" }, // Suma de cantidades
      total_ingresos: { $sum: { $multiply: ["$precio", "$cantidad"] } } // Cálculo de ingresos
    }
  }
]);

//
// 🔎 Resultado esperado:
// [
//   { _id: "camisa", total_vendido: 13, total_ingresos: 260 },
//   { _id: "zapatos", total_vendido: 3, total_ingresos: 120 },
//   { _id: "gorra", total_vendido: 6, total_ingresos: 90 }
// ]

// -----------------------------------------------------
// 🧩 2️⃣ Agrupación por múltiples campos
//
// Agrupamos por tienda y producto al mismo tiempo.
db.ventas.aggregate([
  {
    $group: {
      _id: { tienda: "$tienda", producto: "$producto" },
      total_vendido: { $sum: "$cantidad" }
    }
  }
]);
//
// 🔎 Resultado: agrupa por cada combinación tienda-producto.

// -----------------------------------------------------
// 🧩 3️⃣ Filtro previo con $match y agrupación posterior
//
// Solo queremos productos con precio mayor a 20
// y agrupamos por tienda para calcular ingresos totales.
db.ventas.aggregate([
  { $match: { precio: { $gt: 20 } } },
  {
    $group: {
      _id: "$tienda",
      ingresos_totales: { $sum: { $multiply: ["$precio", "$cantidad"] } },
      productos_contados: { $sum: 1 }
    }
  }
]);
//
// 🔎 Resultado: ingresos y número de productos con precio > 20 por tienda.

// -----------------------------------------------------
// 🧩 4️⃣ Filtro posterior al agrupamiento
//
// Puedes usar otro $match DESPUÉS de agrupar.
// Por ejemplo, mostrar solo los grupos con más de 5 unidades vendidas.
db.ventas.aggregate([
  {
    $group: {
      _id: "$producto",
      total_vendido: { $sum: "$cantidad" }
    }
  },
  {
    $match: { total_vendido: { $gt: 5 } }
  }
]);
//
// 🔎 Resultado: productos cuyo total vendido es mayor que 5.

// -----------------------------------------------------
// 🧩 5️⃣ Combinando $match, $group y $sort
//
// Podemos ordenar los resultados de agrupación.
// Aquí ordenamos por ingresos totales descendente.
db.ventas.aggregate([
  { $match: { tienda: "A" } },
  {
    $group: {
      _id: "$producto",
      ingresos_totales: { $sum: { $multiply: ["$precio", "$cantidad"] } }
    }
  },
  { $sort: { ingresos_totales: -1 } }
]);
//
// 🔎 Resultado: productos de la tienda A ordenados por ingresos

// -----------------------------------------------------
// 🧩 6️⃣ Ejemplo con fechas y periodos
//
// Agrupar por mes de venta y calcular ingresos del mes.
db.ventas.aggregate([
  {
    $group: {
      _id: { mes: { $month: "$fecha" } },
      ingresos_mes: { $sum: { $multiply: ["$precio", "$cantidad"] } },
      total_ventas: { $sum: "$cantidad" }
    }
  },
  { $sort: { "_id.mes": 1 } }
]);
//
// 🔎 Resultado: resumen mensual de ventas

// -----------------------------------------------------
// 📘 RESUMEN FINAL
//
// 🔹 $match → filtra los documentos (similar a WHERE en SQL)
// 🔹 $group → agrupa documentos (similar a GROUP BY)
// 🔹 $sum, $avg, $max, $min, $count → operadores comunes dentro de $group
// 🔹 Se pueden usar múltiples etapas en el pipeline: 
//    $match → $group → $sort → $project → ...
//
// 💡 Buenas prácticas:
// - Usa $match primero para mejorar el rendimiento.
// - Crea índices en los campos que uses en $match.
// - Usa nombres descriptivos en los campos de salida.
//
// =====================================================
// 🔚 Fin del documento: $match + $group en MongoDB
// =====================================================
