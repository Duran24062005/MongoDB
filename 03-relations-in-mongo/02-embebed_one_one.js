// Relación Uno a uno - Incrustado

/**
    Incrustar datos conectados en un solo documento puede reducir el número
    de operaciones de lectura necesarias para obtener datos. En general, debe estructurar
    su esquema para su aplicación reciba toda la información requerida en una sola operación
    de lectura.
*/

[
    // ============================
    // Patron document
    // ============================
    {
        _id: "joe",
        name: "joe Bookreader"
    },

    // ============================
    // Address document
    // ============================
    {
        patron_id: "joe", // reference to patron document
        street: "123 Fake Street",
        city: "Faketon",
        state: "MA",
        zip: "12345",
    },



    // ============================
    // Embebed Document
    // ============================
    {
        _id: "joe",
        name: "joe Bookreader",
        address: {
            // El patron se quito, porque ya está el _id y sabes que están relacionados
            street: "123 Fake Street",
            city: "Faketon",
            state: "MA",
            zip: "12345",
        }
    }
]

// Colección patron
db.patron.insertOne({
        _id: "joe",
        name: "joe Bookreader"
    });


db.patron.find().pretty(); // Para ver los documentos más recientes incrustados, también lo entrega mejor formateado
[ { _id: 'joe', name: 'joe Bookreader' } ] // Shell response

// Colección Adrees
db.address.insertOne({
        patron_id: "joe", // reference to patron document
        street: "123 Fake Street",
        city: "Faketon",
        state: "MA",
        zip: "12345",
    });

db.address.find().pretty(); // pretty: muestra el ultimo elemento agregado, también lo entrega mejor formateado
[
  {
    _id: ObjectId('68dde626cde4330c68fa3351'),
    patron_id: 'joe',
    street: '123 Fake Street',
    city: 'Faketon',
    state: 'MA',
    zip: '12345'
  }
] // Shell response


// ============================
// Consultar relación
// ============================

// consultar patron
db.patron.find({name: "joe Bookreader"});

// Consultar su _id
let idJoe = db.patron.findOne({name: "joe Bookreader"})._id;

// consultar su referencia
db.address.find({patron_id: idJoe});

[
  {
    _id: ObjectId('68dde626cde4330c68fa3351'),
    patron_id: 'joe',
    street: '123 Fake Street',
    city: 'Faketon',
    state: 'MA',
    zip: '12345'
  }
] // Shell response

// limpiar la consola con: ctrl + l



// ============================
// Nuevas inserciones y relaciones entre tablas por referencias
// ============================
db.patron.insertMany(
    [
        {
            name: "joe Bookreader"
        },
        {
            name: "cristian andres"
        },
        {
            name: "camilo david"
        }
    ]
);
/*
    {
    acknowledged: true,
    insertedIds: {
        '0': ObjectId('68ddea8ccde4330c68fa3352'),
        '1': ObjectId('68ddea8ccde4330c68fa3353'),
        '2': ObjectId('68ddea8ccde4330c68fa3354')
    }
    }
*/

// Busqueda del patron y asignación a variable
let id2 = db.patron.findOne({_id: ObjectId('68ddea8ccde4330c68fa3354')})._id;


// creación de su dirección utilizando su _id como referencia
db.address.insertOne(
    {
        patron_id: id2,
        street: "567 new stree",
        city: "Faketon 234",
        state: "MA for three",
        zip: "6789",

    }
);

/**
    {
        acknowledged: true,
        insertedId: ObjectId('68ddec95cde4330c68fa3357')
    }
*/

// Buscar ese registro
db.address.findOne(
    {
        patron_id: id2
    }
);

/**
    {
        _id: ObjectId('68ddec95cde4330c68fa3357'),
        patron_id: ObjectId('68ddea8ccde4330c68fa3354'),
        street: '567 new stree',
        city: 'Faketon 234',
        state: 'MA for three',
        zip: '6789'
    }
*/
