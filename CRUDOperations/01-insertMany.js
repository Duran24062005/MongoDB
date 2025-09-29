/* 
    insertMany()
    Este metodo permite hacer muchas inserciones a la vez en una sola query
*/

// Primero debemos tener seleccionada la base de datos con el comando
// use nombre_database

// Luego utilizamos el comando más el nombre de la colección a la que se haran las consultas
// db.nombreColeccion.funcion();

// Dentro de los parentesis, se introduce una lista de objetos JSON
// db.nombreColeccion.funcion();

db.collection.insertMany([{"Pelicula": "Piratas del Caribe", "Anio": 2021, "Description": "lorem ipsum"}, {"Pelicula": "Piratas del Caribe", "Anio": 2021, "Description": "lorem ipsum"}]);


// Formateado
db.movies.insertMany(
    [
        {
            "Pelicula": "Piratas del Caribe", 
            "Anio": 2021, "Description": "lorem ipsum"
        }, 
        {
            "Pelicula": "Piratas del Caribe", 
            "Anio": 2021, 
            "Description": "lorem ipsum"
        }
    ]
);