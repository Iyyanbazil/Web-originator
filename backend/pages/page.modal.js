const mongoose =require('mongoose')
const {Schema}=mongoose

const Page= new Schema(
    {
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:25
    },
    user:{
        type:String,
        required:false,
    },
    slug:{
        type:String,
        required:false,

    },

    content:Object,

},
{timestamp:true},
);
export default mongoose.model("Pages",Page)