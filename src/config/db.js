const {connect}= require("mongoose")
require("dotenv").config()


const connectionDB=async()=>{
    await connect(process.env.DBURL)
}

module.exports= connectionDB;