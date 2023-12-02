require("dotenv").config();
const express = require("express");
const cloudinary=require("cloudinary").v2
const app = express();
const connectDB = require("./db/db");
const cors = require("cors");
const expressFileUpload=require("express-fileupload")
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})
app.use(expressFileUpload({useTempFiles:true}))
app.use(express.json());
app.use(cors());

const userRouter = require("./router/userRoutes");
const courseRouter = require("./router/courseRouter");
const paymentRouter = require("./router/paymentRouter");

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1", courseRouter);

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(8000, () => {
    console.log("Server started......");
  });
};

start();
