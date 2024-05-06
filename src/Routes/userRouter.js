const {Router}= require("express");
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken");

const userModel = require("../Models/user.Model");
require("dotenv").config()


const userRoute= Router()

// User Registar
userRoute.post("/create",async(req,res)=>{
    const {name,email,password}=req.body;
    const user= await userModel.findOne({email})
    if (user) {
        return res.status(501).send("User already exists");
      }
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
          try {
            const newUser = new userModel({ email, name, password: hash });
            await newUser.save();
            res.status(201).send("User Register successfull");
          } catch (error) {
            return res.status(501).send("Error while hashing the password");
          }
        });
      } catch (error) {
        console.log('error: ', error);
        res.status(501).send("Error while create New user")
    }
})

// Login
userRoute.post("/login", async (req, res) => {
    // console.log("Hello");
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send("Wrong Credentials");
    }
  
    try {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
          return res.status(400).send("Error while checking the password");
        }
        if (!result) {
          return res.status(400).send("Wrong Password");
        }else{
          const token = jwt.sign({ id: user._id,username:user.username }, process.env.SECRET);
          res.status(200).send({ msg: "Login successfull", token,user });
        }
      });
  
     
    } catch (error) {
      res.status(500).send("Error while logging");
    }
  });


  module.exports=userRoute