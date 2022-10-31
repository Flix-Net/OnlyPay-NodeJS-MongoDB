import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        request:true,
        unique:true
    },
    text:{
        type:String,
        request: true
    },
    imgURL:{type:String, default:""},
    view:{type:Number, default: 0},
    author:{type:String},
    authorID:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    comments: [{type:mongoose.Schema.Types.ObjectId, ref:"Comment"}],
    rate:{type:mongoose.Schema.Types.ObjectId, ref:"Rate"},
    category:{type:mongoose.Schema.Types.ObjectId, ref:"Category"},
    tags:{type:mongoose.Schema.Types.ObjectId, ref:"Tag"}
},
    {timestamps:true});

export default mongoose.model("Post", PostSchema);