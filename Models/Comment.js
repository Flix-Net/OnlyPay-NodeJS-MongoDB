import mongoose from "mongoose";

let CommentSchema = new mongoose.Schema({
    author:{
        type:String,
        request:true
    },
    authorID:{
        type:mongoose.Schema.Types.ObjectId, ref:"User"
    },
    text:{
        type:String,
        request:true
    }
});

export default mongoose.model("Comment", CommentSchema);