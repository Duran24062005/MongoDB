use("Listado_colegios_oficiales_20251016");

db.DataCompleta.aggregate([
    {
        $project: {
            nombre_rector: {$trim: {input: "$nombre_Rector"}},
            establecimiento: {$trim: {input: "$nombreestablecimiento"}}
        }
    },{
        $match: {
          nombre_rector: {$ne: null, $ne: ""}
        }
    },{
        $lookup: {
          from: "Establecimientos",
          localField: field,
          foreignField: field,
          as: result
        }
    }
]);
