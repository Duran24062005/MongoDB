// =====================================================
// 🎯 OPERADOR $project EN MONGODB
// =====================================================
//
// 💬 Introducción:
// $project es una etapa del *Aggregation Framework* que permite
// SELECCIONAR, EXCLUIR o CREAR nuevos campos en la salida del pipeline.
//
// Es similar al SELECT en SQL, pero con más control sobre
// qué campos mostrar, cómo renombrarlos o cómo transformarlos.
//
// =====================================================

// -----------------------------------------------------
// 🧱 Ejemplo base: colección "ventas"
db.ventas.insertMany([
  { producto: "camisa", precio: 20, cantidad: 5, tienda: "A", fecha: ISODate("2025-01-01") },
  { producto: "pantalón", precio: 25, cantidad: 4, tienda: "B", fecha: ISODate("2025-01-02") },
  { producto: "zapatos", precio: 40, cantidad: 3, tienda: "A", fecha: ISODate("2025-01-03") },
  { producto: "gorra", precio: 15, cantidad: 6, tienda: "C", fecha: ISODate("2025-01-04") }
]);

// -----------------------------------------------------
// 🧩 1️⃣ Mostrar campos específicos
//
// Mostrar solo el producto y el precio.
db.ventas.aggregate([
  { $project: { producto: 1, precio: 1, _id: 0 } }
]);
//
// 🔎 Resultado: solo aparecen los campos producto y precio.
// 🔸 _id se excluye explícitamente con _id: 0.

// -----------------------------------------------------
// 🧩 2️⃣ Ocultar campos
//
// Excluir el campo "fecha" de la salida.
db.ventas.aggregate([
  { $project: { fecha: 0 } }
]);
//
// 🔎 Resultado: todos los campos menos fecha.

// -----------------------------------------------------
// 🧩 3️⃣ Renombrar campos
//
// Mostrar el nombre del producto como “nombre_producto” y el precio como “valor”.
db.ventas.aggregate([
  {
    $project: {
      _id: 0,
      nombre_producto: "$producto",
      valor: "$precio"
    }
  }
]);
//
// 🔎 Resultado:
// { nombre_producto: "camisa", valor: 20 }

// -----------------------------------------------------
// 🧩 4️⃣ Crear nuevos campos calculados
//
// Calcular el valor total de cada venta (precio * cantidad).
db.ventas.aggregate([
  {
    $project: {
      _id: 0,
      producto: 1,
      precio: 1,
      cantidad: 1,
      total: { $multiply: ["$precio", "$cantidad"] }
    }
  }
]);
//
// 🔎 Resultado: agrega un campo “total” con el cálculo por documento.

// -----------------------------------------------------
// 🧩 5️⃣ Crear campos con expresiones condicionales
//
// Agregar un campo “categoria_precio” que indique “Alto” si el precio >= 25, de lo contrario “Bajo”.
db.ventas.aggregate([
  {
    $project: {
      producto: 1,
      precio: 1,
      categoria_precio: {
        $cond: { if: { $gte: ["$precio", 25] }, then: "Alto", else: "Bajo" }
      }
    }
  }
]);
//
// 🔎 Resultado: cada producto tendrá una etiqueta "Alto" o "Bajo".

// -----------------------------------------------------
// 🧩 6️⃣ Crear campos de fecha
//
// Mostrar el año y el mes a partir del campo “fecha”.
db.ventas.aggregate([
  {
    $project: {
      producto: 1,
      año: { $year: "$fecha" },
      mes: { $month: "$fecha" },
      _id: 0
    }
  }
]);
//
// 🔎 Resultado: extrae año y mes de la fecha.

// -----------------------------------------------------
// 🧩 7️⃣ Uso combinado con otras etapas
//
// Filtrar solo productos de la tienda A, calcular el total y mostrar
// únicamente los campos relevantes.
db.ventas.aggregate([
  { $match: { tienda: "A" } },
  {
    $project: {
      _id: 0,
      producto: 1,
      total: { $multiply: ["$precio", "$cantidad"] },
      fecha: 1
    }
  },
  { $sort: { total: -1 } }
]);
//
// 🔎 Resultado: ventas de la tienda A con sus totales, ordenadas de mayor a menor.

// -----------------------------------------------------
// 🧩 8️⃣ Combinando $group y $project
//
// Agrupar por tienda, sumar el total de ventas y luego
// proyectar un resultado personalizado.
db.ventas.aggregate([
  {
    $group: {
      _id: "$tienda",
      total_ventas: { $sum: { $multiply: ["$precio", "$cantidad"] } },
      promedio_precio: { $avg: "$precio" }
    }
  },
  {
    $project: {
      _id: 0,
      tienda: "$_id",
      total_ventas: 1,
      promedio_precio: 1,
      estado: {
        $cond: { if: { $gte: ["$total_ventas", 150] }, then: "Destacada", else: "Normal" }
      }
    }
  },
  { $sort: { total_ventas: -1 } }
]);
//
// 🔎 Resultado: tiendas con su total, promedio y estado categorizado.

// -----------------------------------------------------
// 📘 RESUMEN FINAL
//
// 🔹 $project permite:
//    - Incluir o excluir campos.
//    - Renombrar campos.
//    - Crear nuevos campos calculados.
//    - Aplicar expresiones, condicionales y funciones.
//
// 🔹 Se usa comúnmente después de $match, $group o $sort.
//
// 💡 Buenas prácticas:
// - Evita proyectar campos innecesarios en pipelines grandes.
// - Usa _id: 0 si no deseas que aparezca por defecto.
// - Usa $project para formatear la salida final de tus consultas.
//
// =====================================================
// 🔚 Fin del documento: Operador $project en MongoDB
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