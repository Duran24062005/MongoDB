// Insertions into Incautacionesde_MA_DB_20250930


db.Departamentos.insertMany(
    {
        id_departamento: 1,
        nombre_departamento: 'ANTIOQUIA',
        codigo_departamento: 5
    }
);


db.Municipios.insertMany(
    {
        id_municipio: 1,
        nombre_municipio: 'CASERES',
        codigo_municipio: 5120,
        departamento_id: 1,
    }
);

db.Hechos.insertMany(
    {
        id_hecho: 1,
        fecha_hecho: 'CASERES',
        cantidad_incautada: 67,
        municipio_id: 1,
        unidad_medida_id: 1
    }
);


db.UnidadMedida.insertMany(
    {
        id_unidad_medida: 1,
        nidad_medida: 'KILOGRAMO',
        siglas_unidad_medida: 'KG',
    }
);