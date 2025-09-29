// Cursor
// El cursor es el conjunto de documentos entregados por la base de datos al aplicar
// El metodo .find(), sin importar su longitud

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


// Cursor
db.collection.find() // Nos regresa en cursor

// para trabajar con el cursos y acceder a el como un arrays
db.movie.find().toArray()[0] // Primera posición
db.movie.find().toArray()[-1] // Ultima posición
db.movie.find().toArray()[5] // Posición inexistente, si la posición 5 no existe no devuelve nada

    // Limit
    db.nombreColeccion.find().limit(2); // Limite de 2

    // Count
    db.nombreColeccion.find().count(); // Retorna la cantidad de documentos en la colección
