import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connenctionString = process.env.MONGO_URL;

function connectDB() {
    const params = {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }

    try {
        mongoose.set("strictQuery", true);
        mongoose.connect(connenctionString, params);
        console.log("MongoDB connection is sucessfull");
    } catch(err) {
        console.log("MongoDB connection failed", err);
    }
}

export default connectDB