import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/tanamanroute.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.use("/api/tanaman", router);

// Export the app for testing purposes
export default app;

