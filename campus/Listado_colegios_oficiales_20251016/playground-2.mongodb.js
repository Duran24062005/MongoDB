// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Listado_colegios_oficiales_20251016");


db.DataCompleta.find();

db.DataCompleta.aggregate([
    {
        $match: {
          nombreestablecimiento: "GIMNASIO INFANTIL FEDERICO FROEBEL"
        }
    },
    {
        $group: {
          _id: "$zona",
            accumulatorN: {$sum: "$año"}
        }
    }
]);
