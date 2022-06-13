import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import path from 'path'
// import uiRoute from './ui/ui.route'
import pageRoute from './pages/page.route'
import userRoute from "./signup/route"
const app=express()
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

//setup templete engine
app.use("/resources",express.static(path.join(__dirname,'public')));
app.use('views',express.static(path.join(__dirname,'views')));
app.set('view engine','hbs');

// app.get('/',(req,res)=>{
// console.log("home route");
// res.render("home",{title:"home page"})
// })
// app.use('/',uiRoute)

// app.all("/login",userRoute)
app.all("/",userRoute)
// app.use("/Signup",userRoute)
app.use("/login",userRoute)
app.use("/pages",pageRoute)
// mongo db setting

 const PORT=process.env.PORT || 8085;
const mongoUri=`mongodb+srv://ayyanbazil:ayyanbazil123@nodeexpressproject.gb1ff.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoUri,()=>{
    console.log("connected to database");
})
// const PORT=process.env.PORT || 8085;
 app.listen(PORT,()=>{
     console.log(`server is running on port ${PORT}`);
 });
