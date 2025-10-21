# Listado Colegios Oficiales 20251016

```mermaid

erDiagram
    INSTITUCION_EDUCATIVA ||--|| TIPO_ESTABLECIMIENTO : "pertenece a"
    INSTITUCION_EDUCATIVA ||--|| SECTOR : "pertenece a"
    INSTITUCION_EDUCATIVA ||--|| ZONA : "ubicada en"
    INSTITUCION_EDUCATIVA ||--|| ESTADO_INSTITUCION : "tiene estado"
    INSTITUCION_EDUCATIVA ||--o{ PERSONAL : "cuenta con"
    PERSONAL ||--|| CARGO_PERSONAL : "ocupa"

    INSTITUCION_EDUCATIVA ||--o{ INSTITUCION_NIVEL : "ofrece"
    INSTITUCION_NIVEL }o--|| NIVEL_EDUCATIVO : "corresponde a"

    INSTITUCION_EDUCATIVA ||--o{ INSTITUCION_JORNADA : "tiene"
    INSTITUCION_JORNADA }o--|| JORNADA : "corresponde a"

    INSTITUCION_EDUCATIVA ||--o{ INSTITUCION_ESPECIALIDAD : "ofrece"
    INSTITUCION_ESPECIALIDAD }o--|| ESPECIALIDAD : "pertenece a"

    INSTITUCION_EDUCATIVA ||--o{ INSTITUCION_GRADO : "ofrece"
    INSTITUCION_GRADO }o--|| GRADO : "corresponde a"
    GRADO ||--|| NIVEL_EDUCATIVO : "pertenece a"

```

![Modelo conceotual](./img/Listado%20Colegios%20Oficiales%2020251016.drawio.png)

- Project: **Listado_colegios_oficiales_20251016**
- 📚 [Documentación](https://docs.google.com/document/d/1nwijOu7kT1J5EZ9AG5ys61OBG4a-kbuw/edit?usp=sharing&ouid=114885156140019858076&rtpof=true&sd=true)

Desarrollado por ALexi Durán Gómez C.c: 1.067.031.983