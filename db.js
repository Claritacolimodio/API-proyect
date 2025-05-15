import { MongoClient } from "mongodb";

// REMEMBER TO CHANGE THIS TO YOUR CONNECTION STRING
const connectionString = "mongodb+srv://claracolimodio:Austral25@myproyect25.x9jynmk.mongodb.net/";

const client = new MongoClient(connectionString);

let conn;
try {
  // Try
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("Austral");

export default db;
