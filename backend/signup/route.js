
const express=require("express")
const userRoute=express.Router()
import {postData,getData} from './controller'
userRoute.post("/Signup",postData)
userRoute.post("/login",getData)
module.exports=userRoute