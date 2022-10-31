import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({

    AuthorID:{
        type:mongoose.Schema.Types.ObjectId,ref:"User"
    },
    RateID:{
        type:mongoose.Schema.Types.ObjectId, ref:"Rate"
    }

});

export default mongoose.model("Subscription", SubscriptionSchema);