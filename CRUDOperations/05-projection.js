// Proyecciones
// En MongoDB, la proyección es el proceso de seleccionar únicamente los campos necesarios 
// de los documentos devueltos por una consulta, en lugar de recuperar el documento completo. 
// Esto optimiza el rendimiento y reduce el uso de ancho de banda y memoria, especialmente en colecciones grandes. 

// ================================
// PROYECCIONES EN MONGO DB
// ================================

// Las proyecciones en MongoDB se usan para ESPECIFICAR qué campos queremos
// que se muestren en el resultado de una consulta.
// Esto se hace en el segundo parámetro del método .find().

// ================================
// Sintaxis general
// ================================
// db.nombreColeccion.find(
//    { <criterio_de_busqueda> },
//    { <campo>: 1 (mostrar) | 0 (ocultar) }
// );

// Nota: 
// - El "_id" se muestra por defecto, a menos que lo ocultemos con "_id: 0"
// - No se puede mezclar mostrar y ocultar campos al mismo tiempo
//   (excepto "_id").

// ================================
// Ejemplo con la colección "movie"
// ================================

// Mostrar todos los documentos con todos sus campos
db.movie.find();

// Mostrar solo las películas (campo "Pelicula") sin el _id
db.movie.find({}, { "Pelicula": 1, "_id": 0 });

// Mostrar solo los autores (campo "Author") junto con el _id
db.movie.find({}, { "Author": 1 });

// Mostrar película y año, ocultando _id
db.movie.find({}, { "Pelicula": 1, "Anio": 1, "_id": 0 });

// ================================
// Ejemplo con condiciones
// ================================

// Buscar todas las películas llamadas "Piratas del Caribe"
// y mostrar solo el nombre y el año
db.movie.find(
    { "Pelicula": "Piratas del Caribe" },
    { "Pelicula": 1, "Anio": 1, "_id": 0 }
);

// Buscar películas del año 2020 y mostrar solo descripción
db.movie.find(
    { "Anio": "2020" },
    { "description": 1, "_id": 0 }
);

// ================================
// Ejemplo combinando cursor + proyección
// ================================

// Guardar el cursor
var cursor = db.movie.find({}, { "Pelicula": 1, "_id": 0 });

// Mostrar la primera película usando toArray()
cursor.toArray()[0];

// Mostrar las últimas películas limitando a 2 resultados
db.movie.find({}, { "Pelicula": 1, "_id": 0 }).limit(2);

// Contar cuántas películas cumplen una condición
db.movie.find({ "Anio": "2020" }).count();

// ================================
// Resumen rápido
// ================================
// 1 → mostrar campo
// 0 → ocultar campo
// "_id" se incluye por defecto
// Proyecciones permiten controlar qué se devuelve de la base de datos
