import { MongoClient } from "mongodb";
import 'dotenv/config'

const dbUrl = process.env.DATABASE_URL;
const dbName = process.env.DATABASE_NAME;

const mongoClient = new MongoClient(dbUrl);

const connection = {
    async connectDB() {
        try {
            // connect mongodb
            await mongoClient.connect();
            // return the instance
            return mongoClient.db(dbName);
        } catch (error) {
            console.error(error);
        }    
    }
}

export default connection;

