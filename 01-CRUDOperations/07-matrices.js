// Matrices

// Search find()
db.prueba.find();

// insertOne()
db.prueba.insertOne(
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


// InsertMany()
db.prueba.insertMany(
    [
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
        },
        {
            "item": "notebook",
            "stock": [
                {
                    "warehouse": "C",
                    "qty": 6
                }
            ]
        },
        {
            "item": "paper",
            "stock": [
                {
                    "warehouse": "A",
                    "qty": 60
                },
                {
                    "warehouse": "B",
                    "qty": 15
                }
            ]
        },
        {
            "item": "planner",
            "stock": [
                {
                    "warehouse": "A",
                    "qty": 50
                },
                {
                    "warehouse": "B",
                    "qty": 5
                }
            ]
        },
        {
            "item": "postcard",
            "stock": [
                {
                    "warehouse": "B",
                    "qty": 15
                },
                {
                    "warehouse": "C",
                    "qty": 35
                }
            ]
        },
    ]
);



// Search find() fltrado warehouse
db.prueba.find({"stock.warehouse": 'A'});
/**
[
  {
    _id: ObjectId('68db40ce8b80cb2d30fa3351'),
    item: 'journal',
    stock: [
      { warehouse: 'A', qty: 30 },
      { warehouse: 'B', qty: 3 },
      { warehouse: 'C', qty: 8 }
    ]
  },
  {
    _id: ObjectId('68db4dff8b80cb2d30fa3352'),
    item: 'journal',
    stock: [
      { warehouse: 'A', qty: 30 },
      { warehouse: 'B', qty: 3 },
      { warehouse: 'C', qty: 8 }
    ]
  },
  {
    _id: ObjectId('68db4dff8b80cb2d30fa3354'),
    item: 'paper',
    stock: [ { warehouse: 'A', qty: 60 }, { warehouse: 'B', qty: 15 } ]
  },
  {
    _id: ObjectId('68db4dff8b80cb2d30fa3355'),
    item: 'planner',
    stock: [ { warehouse: 'A', qty: 50 }, { warehouse: 'B', qty: 5 } ]
  }
]
 */

// Search find() fltrado qty
db.prueba.find({"stock.qty": 30});
/**
[
  {
    _id: ObjectId('68db4dff8b80cb2d30fa3356'),
    item: 'postcard',
    stock: [ { warehouse: 'B', qty: 15 }, { warehouse: 'C', qty: 35 } ]
  }
]
*/

// Filtrar por posición
db.prueba.find({"stock.0.warehouse": 'B'});
/**
[
  {
    _id: ObjectId('68db4dff8b80cb2d30fa3356'),
    item: 'postcard',
    stock: [ { warehouse: 'B', qty: 15 }, { warehouse: 'C', qty: 35 } ]
  }
]
*/