// ================================
// DOCUMENTOS Y MATRICES INCRUSTADAS EN MONGO DB
// ================================

// En MongoDB podemos tener documentos dentro de otros documentos.
// También podemos usar matrices (arrays) para guardar múltiples valores
// o incluso objetos incrustados.

// ================================
// Documento simple
// ================================
// Ejemplo de documento con campos básicos
[
    {
        "Pelicula": "Piratas del Caribe",
        "Anio": "2003",
        "Author": "Gore Verbinski",
        "description": "Aventura en altamar con piratas y tesoros"
    }
]

// ================================
// Documento con documento incrustado
// ================================
// Podemos anidar un objeto dentro de otro
[
    {
        "Pelicula": "Matrix",
        "Anio": "1999",
        "Author": {
            "Nombre": "Lana Wachowski",
            "Nacionalidad": "Estadounidense"
        },
        "description": "Película de ciencia ficción"
    }
]

// ================================
// Documento con matriz (array)
// ================================
// Una matriz puede contener valores simples
[
    {
        "Pelicula": "Avengers",
        "Anio": "2012",
        "Actores": ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
    }
]

// ================================
// Documento con matriz de documentos
// ================================
// Una matriz puede contener objetos incrustados
[
    {
        "Pelicula": "Inception",
        "Anio": "2010",
        "Elenco": [
            { "Nombre": "Leonardo DiCaprio", "Personaje": "Cobb" },
            { "Nombre": "Joseph Gordon-Levitt", "Personaje": "Arthur" },
            { "Nombre": "Ellen Page", "Personaje": "Ariadne" }
        ]
    }
]

// ================================
// Consultas con documentos y arrays incrustados
// ================================

// Buscar película por un campo del documento incrustado
db.movie.find({ "Author.Nombre": "Lana Wachowski" });

// Buscar películas donde un actor específico esté en el array
db.movie.find({ "Actores": "Chris Evans" });

// Buscar películas donde un documento del array tenga una condición
db.movie.find({ "Elenco.Nombre": "Leonardo DiCaprio" });

// ================================
// Proyecciones con arrays y documentos
// ================================

// Mostrar solo los actores de "Avengers"
db.movie.find(
    { "Pelicula": "Avengers" },
    { "Actores": 1, "_id": 0 }
);

// Mostrar solo los nombres del elenco en Inception
db.movie.find(
    { "Pelicula": "Inception" },
    { "Elenco.Nombre": 1, "_id": 0 }
);

// ================================
// Resumen rápido
// ================================
// - Documentos incrustados permiten tener objetos dentro de objetos
// - Arrays pueden guardar listas de valores o documentos
// - Podemos hacer consultas directas a campos incrustados usando la notación de punto
// - Proyecciones también funcionan sobre campos dentro de documentos y arrays



db.prueba.insertMany(
    {
        "item": "journal",
        "stock": [
            {
                "warehouse": "A",
                "qty": 30
            },
            {
                "warehouse": "B",
                "qty": 3
            },
            {
                "warehouse": "C",
                "qty": 8
            }
        ]
    }
);