// ===================================================
// Introducción y contexto
// ===================================================

// Selección y uso de la base de datos
use("test");


// Inicio de session para generar los cambios
const session = db.getMongo().startSession();


const incautaciones = session.getDatabase("test").Incautaciones;

session.startTransaction();



// Mediante el comando import o por compass se importaron los datos desde un csv 
// ubicado en la siguiente ruta *https://github.com/Duran24062005/MongoDB/blob/main/campus/incautaciones_ma_20250930/INCAUTACIONES_DE_MA_20250930.csv*
// ya con todos esos datos cargados en la base de datos y centralizados en una sola collección procedemos a ejecutar los comandos

// Prueba y revisión de todos los datos
db.Incautaciones.find();

// =======================================================================================================================================================================================

// ###############################
// Ejercicios básicos
// ###############################

// 1. Encuentra todos los municipios que empiezan por “San”.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /^San/i}
});




// 2. Lista los municipios que terminan en “ito”.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /ito$/i}
});




// 3. Busca los municipios cuyo nombre contenga la palabra “Valle”.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /Valle/i}
});




// 4. Devuelve los municipios cuyo nombre empiece por vocal.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /^[AEIOU]/i}
});

/*
    En regex, los corchetes [] definen un conjunto de caracteres posibles.
    Todo lo que esté dentro se interpreta literalmente como una lista, no como condiciones separadas con OR.
    Así que [A|A|I|O|U] significa:
    “coincide con una sola letra que sea A, |, I, O o U”.
    Es decir, también incluiría el símbolo “|” como posible coincidencia
 */
db.Incautaciones.find({
    MUNICIPIO: {$regex: /^[A|A|I|O|U]/i}
});





// 5. Filtra los municipios que terminen en “al” o “el”.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /(AL|EL)$/i}
});





// =======================================================================================================================================================================================

// ###############################
// Ejercicios intermedios
// ###############################

// 6. Encuentra los municipios cuyo nombre contenga dos vocales seguidas.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /[AEIOU]{2}/i}
});

/*
    Si quisieramos solo vocales diferentes seguidas (por ejemplo “ae” o “io”, pero no “aa”), podrías usar una lookahead más avanzada:
*/
db.Incautaciones.find({
  MUNICIPIO: { $regex: /[aeiou](?=[aeiou])/i }
});

/*
    [aeiouáéíóúü].*[aeiouáéíóúü] = una vocal cualquiera, luego cualquier cantidad de caracteres, y luego otra vocal (pueden ser la misma o distinta).
    Útil si quieremos “dos vocales en el nombre” sin exigir que sean contiguas.

    Si quieremos que ambas vocales sean distintas (p. ej. ae pero no aa), el patrón se complica (lookahead o grupos).
    Si nuestros datos pueden tener caracteres especiales (espacios, guiones, tildes), recomiendo usar la versión que incluye vocales acentuadas 
    como mostraré a continuación.
*/
db.Incautaciones.find({
  MUNICIPIO: { $regex: /[aeiouáéíóúü].*[aeiouáéíóúü]/i }
});


// 7. Obtén todos los municipios con nombres que contengan la letra “z”.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /Z/i}
});




// 8. Lista los municipios que empiecen con “Santa” y tengan cualquier cosa después.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /^SANTA/i}
});




// 9. Encuentra municipios cuyo nombre tenga exactamente 6 letras.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /^[A-ZÁÉÍÓÍÚ]{6}$/i}
});




// 10. Filtra los municipios cuyo nombre tenga 2 palabras.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /^[A-ZÁÉÍÓÍÚ]+ [A-ZÁÉÍÓÍÚ]+$/i}
});



// =======================================================================================================================================================================================

// ###############################
// Ejercicios Avanzados
// ###############################

// 11. Encuentra municipios cuyos nombres terminen en “ito” o “ita”.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /(ito|ita)$/i}
});

/*
    Santa Rita ❌ OJO: sí contiene “ita” pero no al final del nombre completo si tenemos más palabras; si quieremos incluir esos casos, habría que ajustar la regex.
*/
db.Incautaciones.find({
    MUNICIPIO: {$regex: /(\bito\b|ita\b)$/i}
});


// 12. Lista los municipios que contengan la sílaba “gua” en cualquier posición.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /gua/i}
});





// 13. Devuelve los municipios que empiecen por “Puerto” y terminen en “o”.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /^Puerto o$/i}
});




// 14. Encuentra municipios con nombres que tengan más de 10 caracteres.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /^[A-ZAEIOUÁÉÍÓÚ]{11,}$/i}
});




// 15. Busca municipios que no contengan vocales.
db.Incautaciones.find({
    MUNICIPIO: {$regex: /^[^AEIOUÁÉÍÓÚ]$/i}
});

db.Incautaciones.find({
    MUNICIPIO: {$regex: /^[^AEIOUÁÉÍÓÚ]+$/}
});



session.commitTransaction();

session.endSession();


// Desarrollado por Alexi Duran Gomez: C.c 1.067.031.983