import mongoose from "mongoose";

const FollowerSchema = new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId, ref:"User"
    },
    rateID:{
        type:mongoose.Schema.Types.ObjectId, ref:"Rate"
    }
});

export default mongoose.model("Follower", FollowerSchema);