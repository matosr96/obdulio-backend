import mongoose from "mongoose";

const {MONGODB_URL} = process.env;

export interface InitMongooseOptions {
    mongoUrl: string;
}

export const initMongoose = async ({mongoUrl}: InitMongooseOptions) => {
    const connection = mongoose.connection;

    const connectionUrl = "mongodb+srv://matosr96:hm1065015878@oms.3birtah.mongodb.net/obdulio?retryWrites=true&w=majority";

    connection.on('error', (error) => {
        console.error(`Error in Mongoose connection: ${JSON.stringify(error)}`);
        throw new Error(error);
    });

    connection.on('connected', () => {
        console.info(`Mongoose: Connected to ${connectionUrl}`);    
    });

    connection.on('reconnectFailed', () => {
        console.error('Mongoose: DB Connection Lost, retries failed');
    });

    await mongoose.connect(connectionUrl, {
        autoIndex: true,
    });
}