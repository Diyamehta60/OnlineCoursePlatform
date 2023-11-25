const express = require("express")
const connectDB = require("./db/db")
const app = express()
app.use(express.json())

const userRouter=require("./router/userRoutes")
const courseRouter=require("./router/courseRouter")
app.use("/api/v1/auth",userRouter)
app.use("/api/v1",courseRouter)

const start = async () => {
    await connectDB();
    app.listen(8000, () => {
        console.log("Server started......");
    })
}

start();