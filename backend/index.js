import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/booking.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = ["https://quantumtravel.netlify.app", "http://localhost:3000"];
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// MongoDB Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo database connected");
  } catch (error) {
    console.error("Mongo database connection failed:", error.message);
    setTimeout(connect, 5000); // Retry after 5 seconds
  }
};

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start Server
const startServer = async () => {
  await connect();
  app.listen(port, () => {
    console.log("Server is listening on port", port);
  });
};

startServer();



