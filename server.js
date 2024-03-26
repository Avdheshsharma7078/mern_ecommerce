import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import morgan from "morgan";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
//configure env
dotenv.config();

//database config

connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
//res api

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port

const PORT = process.env.PORT || 8080;

//RUN OR LISTEN

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
