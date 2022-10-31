import mongoose from "mongoose";

const RoleCategorySchema = new mongoose.Schema({
    title:{
        type:String,
        request:true,
        unique:true
    }
});

export default mongoose.model("RoleCategory", RoleCategorySchema);