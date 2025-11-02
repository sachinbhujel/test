import mongoose from "mongoose";

const mongodbURI = process.env.MONGO_URI;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(mongodbURI, {
            dbName: "test",
        });
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log("Mongodb connection error", error);
    }
};

export default connectMongoDB;
