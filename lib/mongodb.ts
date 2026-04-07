import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI ?? process.env.DATABASE_URL;
const options = {};

if (!uri) {
  throw new Error("Please add your Mongo URI to .env");
}

const client = new MongoClient(uri, options);

export default client.connect();
