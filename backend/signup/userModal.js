const mongoose=require("mongoose")

const Users= new mongoose.Schema({
    Fname:String,
       
   
    Lname:String,
    
    email:String,
   
    password:String,
  
    Cpassword:String,
     
})
export default mongoose.model("Users",Users);