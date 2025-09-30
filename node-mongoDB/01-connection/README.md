🚀 Acá te muestro paso a paso cómo conectarte a **MongoDB desde Node.js usando el driver oficial de JavaScript**:

---

## 1. Instalar el driver oficial de MongoDB

En tu proyecto Node.js instala el paquete:

```bash
npm install mongodb
```

---

## 2. Importar el cliente y conectarse

En tu archivo `index.js` o donde manejes la conexión:

```js
// Importamos MongoClient desde el paquete mongodb
const { MongoClient } = require("mongodb");

// URL de conexión (puede ser local o en la nube como Atlas)
const uri = "mongodb://localhost:27017"; // cambia según tu entorno

// Crear un cliente
const client = new MongoClient(uri);

async function main() {
  try {
    // Conectar al cliente
    await client.connect();
    console.log("✅ Conectado a MongoDB");

    // Seleccionar la base de datos
    const db = client.db("mi_base");

    // Seleccionar una colección
    const collection = db.collection("usuarios");

    // Ejemplo: Insertar un documento
    const result = await collection.insertOne({ nombre: "Alexi", edad: 25 });
    console.log("Documento insertado con id:", result.insertedId);

    // Ejemplo: Buscar documentos
    const usuarios = await collection.find({}).toArray();
    console.log("Usuarios:", usuarios);

  } catch (error) {
    console.error("❌ Error de conexión:", error);
  } finally {
    // Cerrar la conexión
    await client.close();
  }
}

// Ejecutar la función
main();
```

---

## 3. Notas importantes

* Si usas **MongoDB Atlas**, la URI se parece a:

  ```
  mongodb+srv://usuario:password@cluster0.mongodb.net/mi_base?retryWrites=true&w=majority
  ```
* Recuerda reemplazar `usuario`, `password` y `mi_base` por los tuyos.
* Usa variables de entorno para no exponer la URI directamente (`.env`).

---

