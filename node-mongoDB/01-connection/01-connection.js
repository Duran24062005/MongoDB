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
