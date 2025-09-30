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