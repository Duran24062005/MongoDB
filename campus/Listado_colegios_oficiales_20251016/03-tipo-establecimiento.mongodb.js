use("Listado_colegios_oficiales_20251016");

db.DataCompleta.aggregate([
    {
        $project: {
            tipo_Establecimiento: {
                $trim: {
                    input: "$tipo_Establecimiento"
                }
            }
        }
    },
    {
        $match: {
          tipo_Establecimiento: {
            $ne: null, $ne: " "
          }
        }
    },
    {
        $group: {
          _id: "$tipo_Establecimiento",
        }
    },
    {
        $project: {
          _id: 0,
          tipo_establecimiento: "$_id",
        }
    },
    {
        $out: "TiposEstablecimiento"
    }
]);