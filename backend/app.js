const express = require("express")
const connectDB = require("./db/db")
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(cors());

const userRouter=require("./router/userRoutes")
const courseRouter=require("./router/courseRouter")
const paymentRouter = require("./router/paymentRouter");

app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/auth",userRouter)
app.use("/api/v1",courseRouter)

const start = async () => {
    await connectDB();
    app.listen(8000, () => {
        console.log("Server started......");
    })
}

start();