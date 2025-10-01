// Insertions into Incautacionesde_MA_DB_20250930


db.Departamentos.insertMany([
    { id_departamento: 1, nombre_departamento: 'ANTIOQUIA', codigo_departamento: 5 },
    { id_departamento: 2, nombre_departamento: 'VALLE DEL CAUCA', codigo_departamento: 76 },
    { id_departamento: 3, nombre_departamento: 'ATLANTICO', codigo_departamento: 8 },
    { id_departamento: 4, nombre_departamento: 'CUNDINAMARCA', codigo_departamento: 25 },
    { id_departamento: 5, nombre_departamento: 'CAUCA', codigo_departamento: 19 },
    { id_departamento: 6, nombre_departamento: 'CESAR', codigo_departamento: 20 },
    { id_departamento: 7, nombre_departamento: 'CHOCO', codigo_departamento: 27 },
    { id_departamento: 8, nombre_departamento: 'CORDOBA', codigo_departamento: 23 },
    { id_departamento: 9, nombre_departamento: 'GUAVIARE', codigo_departamento: 95 },
    { id_departamento: 10, nombre_departamento: 'META', codigo_departamento: 50 },
    { id_departamento: 11, nombre_departamento: 'NARIÑO', codigo_departamento: 52 },
    { id_departamento: 12, nombre_departamento: 'NORTE DE SANTANDER', codigo_departamento: 54 },
    { id_departamento: 13, nombre_departamento: 'PUTUMAYO', codigo_departamento: 86 },
    { id_departamento: 14, nombre_departamento: 'SANTANDER', codigo_departamento: 68 },
    { id_departamento: 15, nombre_departamento: 'SUCRE', codigo_departamento: 70 },
    { id_departamento: 16, nombre_departamento: 'TOLIMA', codigo_departamento: 73 }
]);



db.Municipios.insertMany([
    { id_municipio: 1, nombre_municipio: 'CACERES', codigo_municipio: 5120, departamento_id: 1 },
    { id_municipio: 2, nombre_municipio: 'ZARAGOZA', codigo_municipio: 5895, departamento_id: 1 },
    { id_municipio: 3, nombre_municipio: 'CALI', codigo_municipio: 76001, departamento_id: 2 },
    { id_municipio: 4, nombre_municipio: 'BARRANQUILLA', codigo_municipio: 8001, departamento_id: 3 },
    { id_municipio: 5, nombre_municipio: 'BELLO', codigo_municipio: 5088, departamento_id: 1 },
    { id_municipio: 6, nombre_municipio: 'MEDELLIN', codigo_municipio: 5001, departamento_id: 1 },
    { id_municipio: 7, nombre_municipio: 'SOACHA', codigo_municipio: 25754, departamento_id: 4 },
    { id_municipio: 8, nombre_municipio: 'BUCARAMANGA', codigo_municipio: 68001, departamento_id: 14 },
    { id_municipio: 9, nombre_municipio: 'SINCELEJO', codigo_municipio: 70001, departamento_id: 15 },
    { id_municipio: 10, nombre_municipio: 'NEIVA', codigo_municipio: 41001, departamento_id: 16 }
]);


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