use("Listado_colegios_oficiales_20251016");

db.DataCompleta.aggregate([
  {
    $project: {
      jornada: { $trim: { input: "$jornadas" } }
    }
  },
  {
    $match: {
      jornada: { $ne: null, $ne: "" }
    }
  },
  {
    $group: { _id: "$jornada" }
  },
  {
    $project: {
      _id: 0,
      jornada: "$_id"
    }
  },{
    $out: "Jornadas"
  }
])
