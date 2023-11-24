const express = require("express")
const connectDB = require("./db/db")
const app = express()
app.use(express.json())

const userRouter=require("./router/userRoutes")
app.use("/api/v1/auth",userRouter)

const start = async () => {
    await connectDB();
    app.listen(8000, () => {
        console.log("Server started......");
    })
}

start();