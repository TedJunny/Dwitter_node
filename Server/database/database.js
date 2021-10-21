import MongoDb from "mongodb";
import { config } from "../config.js";

export async function connectDb() {
  return MongoDb.MongoClient.connect(config.db.host) //
    .then((client) => client.db());
}
