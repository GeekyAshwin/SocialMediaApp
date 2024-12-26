import { MongoClient } from "mongodb";
import 'dotenv/config'
import mongoose from "mongoose";

const dbUrl = process.env.DATABASE_URL;
const dbName = process.env.DATABASE_NAME;

const mongoClient = new MongoClient(dbUrl);

const connection = {
    async connectDB() {
        try {
            // connect mongodb
            await mongoClient.connect();
            mongoose.connect(dbUrl);
            // return the instance
            return mongoClient.db(dbName);
        } catch (error) {
            console.error(error);
        }    
    }
}

export default connection;

