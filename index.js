import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/tanamanroute.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const PORT = 3000;
const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI.toString(), clientOptions);

        console.log("Successfully connect to the MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
}

connectDB()
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(console.dir);

app.use("/api/tanaman", router);

export default app;

