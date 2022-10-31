import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
    title:{
        type:String,
        request:true
    }
});

export default mongoose.model("Tag", TagSchema);