
const express=require("express")
const userRoute=express.Router()
import {postData,getData} from './controller'
userRoute.post("/",postData)
userRoute.post("/login",getData)
module.exports=userRoute