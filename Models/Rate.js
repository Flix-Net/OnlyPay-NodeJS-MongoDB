import mongoose from "mongoose";

const RateSchema = new mongoose.Schema({
    title:{
        type:String,
        request:true,
        unique:true
    },
    price:{
        type:Number,
        request:true,
        unique:true
    }
});

export default mongoose.model("Rate", RateSchema);