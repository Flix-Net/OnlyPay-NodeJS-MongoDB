import mongoose from "mongoose";

const DocumentsSchema = new mongoose.Schema({
    name:{
        type:String,
        request:true,
        unique:true
    },
    facePhoto:{
        type:String,
        default:"",
        request:true
    }
},
    {timestamps:true});

export default mongoose.model("Documents", DocumentsSchema);