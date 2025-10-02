// Find()
// Este metodo permite filtrar docuemnto dentro de la base de datos
// Pasandole como como argumentos los parametros de busqueda

// Primero debemos tener seleccionada la base de datos con el comando
// use nombre_database

// Luego utilizamos el comando más el nombre de la colección a la que se haran las consultas
// db.nombreColeccion.funcion();

// Dentro de los parentesis, se introduce una lista de objetos JSON
// db.nombreColeccion.funcion();


// Find example
// db.nombreColeccion.find({"Parametro": "igual a esto"}, {"_id": 0 = no; 1 = si});

// Sin argumentos retorna todo los documentos dentro de la colección
db.movie.find()

// Con parametros retorna segun el parametro de busqueda
db.nombreColeccion.find({"Pelicula": "Piratas del Caribe"}, {"_id": 0}); // Sin id

db.nombreColeccion.find({"Pelicula": "Piratas del Caribe"}, {"_id": 1}); // Conn id



// ======================================
// FILTRAR POR ObjectId EN MONGODB
// ======================================
//
// El campo _id de los documentos creados automáticamente
// es de tipo ObjectId (un identificador único de 12 bytes).
//
// Para consultar por este campo, debemos usar la función
// ObjectId("valorHexadecimal") en el filtro.
//
// ======================================
// EJEMPLOS
// ======================================

// 1. Insertar un documento para obtener su ObjectId
db.usuarios.insertOne({ nombre: "Alexi", edad: 25 });

// 2. Ver el documento y copiar el _id
db.usuarios.find().pretty();
//
// Resultado de ejemplo:
// {
//   "_id": ObjectId("651a0a5b2c4a5fef9d9cba12"),
//   "nombre": "Alexi",
//   "edad": 25
// }

// 3. Filtrar usando ese ObjectId
db.usuarios.find(
  { _id: ObjectId("651a0a5b2c4a5fef9d9cba12") }
);

// Esto devolverá solo el documento cuyo _id coincide.

// ======================================
// NOTAS IMPORTANTES
// ======================================
//
// - El valor debe ir dentro de ObjectId("...").
// - No funciona si buscas con string directo:
//   ❌ db.usuarios.find({ _id: "651a0a5b2c4a5fef9d9cba12" })
// - Siempre asegúrate de pegar el valor exacto del _id.
// - Si trabajas con drivers (Node, Python, etc.),
//   también debes importar el tipo ObjectId.
// 
// En mongosh es suficiente usar la función ObjectId().
//
