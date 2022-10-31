import mongoose from "mongoose";

const PostCategorySchema = new mongoose.Schema({
    title:{
        type:String,
        request:true,
        unique:true
    }
});

export default mongoose.model("PostCategory", PostCategorySchema);