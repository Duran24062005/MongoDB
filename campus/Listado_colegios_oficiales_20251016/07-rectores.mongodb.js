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
        $group: {
          _id: "$nombre_rector"
        }
    }
]);
