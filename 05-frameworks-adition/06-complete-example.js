// =====================================================
// 🎯 PIPELINE CON LAS 4 ETAPAS PRINCIPALES EN MONGODB
// =====================================================
//
// 💬 Introducción:
// El framework de agregación de MongoDB nos permite transformar,
// filtrar y resumir datos en múltiples etapas.
//
// Las 4 etapas más comunes y fundamentales son:
//
//   1️⃣ $match   → Filtra documentos (como un WHERE en SQL)
//   2️⃣ $group   → Agrupa documentos y realiza operaciones (SUM, AVG, etc.)
//   3️⃣ $project → Selecciona y transforma campos
//   4️⃣ $sort    → Ordena el resultado final
//
// En este ejemplo construiremos un pipeline que las combine.
//
// =====================================================

// -----------------------------------------------------
// 🧱 Ejemplo base: colección “ventas”
db.ventas.drop(); // Limpia la colección si ya existe
db.ventas.insertMany([
  { producto: "camisa", precio: 20, cantidad: 5, tienda: "A", fecha: ISODate("2025-01-01") },
  { producto: "pantalón", precio: 25, cantidad: 4, tienda: "B", fecha: ISODate("2025-01-02") },
  { producto: "zapatos", precio: 40, cantidad: 3, tienda: "A", fecha: ISODate("2025-01-03") },
  { producto: "gorra", precio: 15, cantidad: 6, tienda: "C", fecha: ISODate("2025-01-04") },
  { producto: "camisa", precio: 22, cantidad: 4, tienda: "A", fecha: ISODate("2025-02-10") },
  { producto: "zapatos", precio: 42, cantidad: 2, tienda: "B", fecha: ISODate("2025-03-01") }
]);

// -----------------------------------------------------
// 🔄 PIPELINE COMPLETO CON LAS 4 ETAPAS
db.ventas.aggregate([
  // -------------------------------------------------
  // 1️⃣ $match: Filtra solo las ventas realizadas en la tienda "A"
  { $match: { tienda: "A" } },

  // -------------------------------------------------
  // 2️⃣ $group: Agrupa por producto y calcula el total de ventas
  {
    $group: {
      _id: "$producto", // Agrupamos por producto
      total_ventas: { $sum: { $multiply: ["$precio", "$cantidad"] } }, // precio * cantidad
      cantidad_total: { $sum: "$cantidad" } // total de unidades vendidas
    }
  },

  // -------------------------------------------------
  // 3️⃣ $project: Formateamos los resultados para mostrar nombres claros
  {
    $project: {
      _id: 0,
      producto: "$_id",
      total_ventas: 1,
      cantidad_total: 1,
      promedio_unitario: { $divide: ["$total_ventas", "$cantidad_total"] }
    }
  },

  // -------------------------------------------------
  // 4️⃣ $sort: Ordenamos los resultados por total de ventas (descendente)
  { $sort: { total_ventas: -1 } }
]);
//
// 🔎 Resultado esperado:
// [
//   {
//     producto: "zapatos",
//     total_ventas: 200,      // (40 * 3) + (42 * 2) de tienda A → solo los de tienda A
//     cantidad_total: 5,
//     promedio_unitario: 40
//   },
//   {
//     producto: "camisa",
//     total_ventas: 188,      // (20*5 + 22*4)
//     cantidad_total: 9,
//     promedio_unitario: 20.888...
//   }
// ]

// -----------------------------------------------------
// 💡 Explicación de cada etapa:
//
// ✅ $match:
//     - Filtra los documentos iniciales para reducir el volumen de datos
//       antes de las demás operaciones.
//     - Similar a un “WHERE tienda = 'A'” en SQL.
//
// ✅ $group:
//     - Permite agrupar documentos según un campo.
//     - Puede realizar operaciones como $sum, $avg, $min, $max.
//
// ✅ $project:
//     - Sirve para incluir, excluir o crear nuevos campos.
//     - En este caso, renombramos el campo "_id" como "producto"
//       y agregamos un promedio calculado.
//
// ✅ $sort:
//     - Ordena el resultado final.
//     - Se puede usar 1 (ascendente) o -1 (descendente).
//
// -----------------------------------------------------
// 📘 Buenas prácticas:
//
// 🔹 Aplica $match lo más temprano posible para reducir carga.
// 🔹 Usa $project después de $group para dar formato final.
// 🔹 $sort conviene dejarlo al final para ordenar ya los resultados agregados.
// 🔹 Puedes combinar otras etapas ($limit, $skip, $lookup, etc.) según el caso.
//
// =====================================================
// 🔚 FIN DEL DOCUMENTO: PIPELINE COMPLETO DE 4 ETAPAS
// =====================================================
