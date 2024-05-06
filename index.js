const express = require("express")
const connectionDB = require("./src/config/db")
const userRoute = require("./src/Routes/userRouter")
const db1Router = require("./src/Routes/homepagedata1Route")
const app=express()

const port = process.env.PORT || 3000
app.use(express.json())
const cors=require('cors')
const btofferRouter = require("./src/Routes/beautyoffersdataRoute")
app.use(cors({origin:true}))

app.get("/",(req,res)=>{
    res.send("Sever is Live")
})

app.use("/user",userRoute)
app.use("/products",db1Router)
app.use("/products",btofferRouter)


app.listen(port,()=>{
    connectionDB()
    console.log(`Sever is running on port ${port}`);
})