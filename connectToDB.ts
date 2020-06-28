import { config } from "https://deno.land/x/dotenv/mod.ts";

import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
const client = new MongoClient();

const ConnectDB = () => {
  console.log("hi");
  client.connectWithUri(config().MONGO_URI);
};

export default ConnectDB;
