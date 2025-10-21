use("Listado_colegios_oficiales_20251016");

db.DataCompleta.aggregate([
    {
        $project: {
          tipo_zona: {$trim: {input: "$zona"}} // eliminar espacios si existen
        }
    },
    {
        $match: {
          tipo_zona: {$ne: null, $ne: " " } // Excluir valores nulos o vacios
        }
    },
    {
        $group: {
          _id: "$tipo_zona"
        }
    },
    {
        $project: {
          _id: 0,
          tipo_zona: "$_id",
          descripcion_zona: "$_id"
        }
    },
    {
        $out: "Zonas"
    }
]);