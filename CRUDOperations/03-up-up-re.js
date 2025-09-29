// UpdateOne()
// Sirve para actualizar un documento ya existente, con base en una busqueda
// utilizando el metodo find()

// Update()
//

// ReplaceOne()
// Sirve para reemplazar un documento ya existente, tambien con base en una busqueda
// utilizando el metodo find()

// Uno actualiza el documento ya existente y el otro lo crea


// Primero debemos tener seleccionada la base de datos con el comando
// use nombre_database

// Luego utilizamos el comando más el nombre de la colección a la que se haran las consultas
// db.nombreColeccion.funcion();

// Dentro de los parentesis, se introduce una lista de objetos JSON
// db.nombreColeccion.funcion();


// ReplaceOne
// db.collection.replaceOne({"nombreCampoRemplazar": "InfoReemplazar"}, {"PorEsteNombre": "PorEstaInfo"});
db.movie.replaceOne({"Doc1": "Star Wars"}, {"Pelicula": "Star Wars", "Anio": 1997});

// Y si no encuentra ese documento que entonces lo cree pasandole el parametro {upsert: boilean = true or false}
// Si no existe lo crea
// db.collection.replaceOne({"nombreCampoRemplazar": "InfoReemplazar"}, {"PorEsteNombre": "PorEstaInfo"}, {upsert: true});
db.movie.replaceOne({"Doc1": "Star Wars"}, {"Pelicula": "Star Wars", "Anio": 1997}, {upsert: true});

// Si no existe no lo crea
// db.collection.replaceOne({"nombreCampoRemplazar": "InfoReemplazar"}, {"PorEsteNombre": "PorEstaInfo"}, {upsert: false});
db.movie.replaceOne({"Doc1": "Star Wars"}, {"Pelicula": "Star Wars", "Anio": 1997}, {upsert: false});


// UpdateOne: 
// db.collection.update({"nombreCampoActualizar": "InfoActualizar"}, {"PorEsteNombre": "PorEstaInfo"});
db.movie.update({"Doc1": "Star Wars"}, {"Pelicula": "Star Wars", "Anio": 1997});

// Actualiza la primera coincidencia o no pasandole el parametro {multi: boilean = true or false}
// Actualiza todas las coincidencias
// db.collection.update({"nombreCampoActualizar": "InfoActualizar"}, {"PorEsteNombre": "PorEstaInfo"}, {multi: true});
db.movie.update({"Doc1": "Star Wars"}, {$set: {"Pelicula": "Star Wars", "Anio": 1997}}, {multi: true});

// solo actualiza la prra coincidencia
// db.collection.update({"nombreCampoActualizar": "InfoActualizar"}, {"PorEsteNombre": "PorEstaInfo"}, {multi: false});
db.movie.update({"Doc1": "Star Wars"}, {"Pelicula": "Star Wars", "Anio": 1997}, {multi: false});