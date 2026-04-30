import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const url = process.env.MONGODB_URL!;

const client = new MongoClient(url);

const db = client.db();

if(!db) throw new Error("Database not found");

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});