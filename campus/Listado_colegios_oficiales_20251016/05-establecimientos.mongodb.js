use("Listado_colegios_oficiales_20251016");


/*db.Establecimientos.aggregate([
    {
        $project: {
          nombre_estableciento: "$nombreestablecimiento",
          zona_id: {$trim: {input: "$zona"}},
          tipo_establecimiento_id: {$trim: {input: "$tipo_Establecimiento"}},
          estado_id: {$ifNull: [{$trim: {input: "$estado"}}, "Activo"]},
          numero_sedes: "$numero_de_sedes"
        }
    },
    {
        $match: {
          nombre_estableciento: {$ne: null, $ne: " "}
        }
    },
    {
        $lookup: {
          from: "Zonas",
          localField: "zona_id",
          foreignField: field,
          as: result
        }
    }
]);*/

db.DataCompleta.aggregate([
  {
    $project: {
      nombre_establecimiento: {$trim: {input: "$nombreestablecimiento"}},
      zona: { $trim: { input: "$zona" } },
      tipo_establecimiento: { $trim: { input: "$tipo_Establecimiento" } },
      estado: { $ifNull: [{ $trim: { input: "$estado" } }, "activo"] },
      numero_sedes: "$numero_de_Sedes"
    }
  },
  { $match: { nombre_establecimiento: { $ne: null, $ne: "" } } },

  // Obtener referencia de Zona
  {
    $lookup: {
      from: "Zonas",
      localField: "zona",
      foreignField: "tipo_zona",
      as: "zona_ref"
    }
  },
  { $unwind: { path: "$zona_ref", preserveNullAndEmptyArrays: true } },

  // Obtener referencia de TipoEstablecimiento
  {
    $lookup: {
      from: "TiposEstablecimiento",
      localField: "tipo_establecimiento",
      foreignField: "tipo_establecimiento",
      as: "tipo_ref"
    }
  },
  { $unwind: { path: "$tipo_ref", preserveNullAndEmptyArrays: true } },

  // Obtener referencia de Estado
  {
    $lookup: {
      from: "Estados",
      localField: "estado",
      foreignField: "status",
      as: "estado_ref"
    }
  },
  { $unwind: { path: "$estado_ref", preserveNullAndEmptyArrays: true } },

  // Proyección final
  {
    $project: {
      _id: 0,
      nombre_establecimiento: 1,
      numero_sedes: 1,
      tipo_establecimiento_id: "$tipo_ref._id",
      zona_id: "$zona_ref._id",
      estado_id: "$estado_ref._id"
    }
  },

  // Insertar en colección destino
  {
    $out: "Establecimientos"
  }
])
