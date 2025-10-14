// Relación uno a uno - Por referencia

/**
    Las referencias son muy parecidas a tablas relacionales en sql, ya que haremos referencia
    a un campo mediante un Id, este nos servirá para poder crear relación con un documento
    (uno a uno) o varios documentos (uno a muchos).
 */

[
    {
        title: "MongoDB: The Definitive Guide",
        author: [
            "Kristina Chodorow",
            "Mike Dirolf"
        ],
        published_date: ISODate("2010-089-24"),
        pages: 216,
        laguage: "English",
        publisher: {
            name: "O'Reilly Media",
            founded: 1980,
            location: "CA"
        }
    },
    {
        title: "50 Tips and Tricks for MongoDB Developer",
        author: "Kristina Chodorow",
        published_date: ISODate("2011-05-06"),
        pages: 68,
        laguage: "English",
        publisher: {
            name: "O'Reilly Media",
            founded: 1980,
            location: "CA"
        }
    },
]