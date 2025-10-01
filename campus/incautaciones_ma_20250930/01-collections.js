// Collections to Incautaciones de MA 20250930

use ('Incautacionesde_MA_DB_20250930');


db.Departamentos.insertOne(
    {
        id_departamento: 1,
        nombre_departamento: 'ANTIOQUIA',
        codigo_departamento: 5
    }
);


db.Municipios.insertOne(
    {
        id_municipio: 1,
        nombre_municipio: 'CASERES',
        codigo_municipio: 5120,
        departamento_id: 1,
    }
);

db.Hechos.insertOne(
    {
        id_hecho: 1,
        fecha_hecho: '01-01-2010',
        cantidad_incautada: 67,
        municipio_id: 1,
        unidad_medida_id: 1
    }
);


db.UnidadMedida.insertOne(
    {
        id_unidad_medida: 1,
        nidad_medida: 'KILOGRAMO',
        siglas_unidad_medida: 'KG',
    }
);



// Supongamos que ya tienes tu colección Incautaciones con los campos:
// { "FECHA HECHO": "...", "MUNICIPIO": "...", "CANTIDAD": "...", "UNIDAD": "..." }

// Contadores para IDs
let idHecho = 1;
let municipios = {};   // Diccionario para asignar IDs a municipios
let unidades = {};     // Diccionario para asignar IDs a unidades
let municipioCounter = 1;
let unidadCounter = 1;

// Iteramos sobre Incautaciones
db.Incautaciones.find().forEach(doc => {
  
  // Asignar municipio_id único
  if (!municipios[doc["MUNICIPIO"]]) {
    municipios[doc["MUNICIPIO"]] = municipioCounter++;
    
    // Insertamos en colección Municipios
    db.Municipios.insertOne({
      id_municipio: municipios[doc["MUNICIPIO"]],
      nombre: doc["MUNICIPIO"]
    });
  }

  // Asignar unidad_medida_id único
  if (!unidades[doc["UNIDAD"]]) {
    unidades[doc["UNIDAD"]] = unidadCounter++;
    
    // Insertamos en colección UnidadMedida
    db.UnidadMedida.insertOne({
      id_unidad_medida: unidades[doc["UNIDAD"]],
      unidad_medida: doc["UNIDAD"],
      siglas_unidad_medida: doc["UNIDAD"].substring(0, 2).toUpperCase()
    });
  }

  // Insertar en Hechos
  db.Hechos.insertOne({
    id_hecho: idHecho++,
    fecha_hecho: doc["FECHA HECHO"],
    cantidad_incautada: parseFloat(doc["CANTIDAD"]),
    municipio_id: municipios[doc["MUNICIPIO"]],
    unidad_medida_id: unidades[doc["UNIDAD"]]
  });

});
