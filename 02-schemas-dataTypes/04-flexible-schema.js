// Schema Flexible

/*
    Los datos en MongoDB tienen un schema flexible. Las colecciones no imponen la estructura
    del documento de forma predeterminada. Esta flexibilidad le brinda opciones de modelado de datos
    que se adaptan a su aplicación y sus requisitos de rendimiento.

    A diferencia de las bases de datos SQL, donde debe determinar y aclarar el schema de una tablas
    antes de insertar datos, las colecciones de MongoDB, por defecto, no requieren que sus documentos 
    tengan el mismo schema.
    Es decir:

        - No es necesarios que los documentos de una sola colección tengan el mismo conjunto de campos
        y el tipo de dato de un campo puede diferir entre los documentos de la colección.

        - Para cambiar la estrucutura de los documentos en una colección, como agregar nuevos 
        campos, eliminar campos existentes o cambiar los valores de un campo a un nuevo tipo,
        actualice los documentos a la nueva estrucutura.

    Esta flexibilidad fácilita la asignación de documentos a una entidad o un objeto. Cada documento puede
    coincidir con los campos de datos de la entidad representada, incluso si el documento tiene una variación sustancial
    de otros docuementos de la colección.
    Sin embargo, en la paractica, los documentos de una colección comparten una estructura similar y puede aplicar
    reglas de validación de documentos para una colección durante las operaciones de actualización e inserción.
*/