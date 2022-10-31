import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        request:true,
        unique:true
    },
    login:{
        type:String,
        request: true,
        unique: true
    },
    password:{
        type:String,
        request:true,
    },
    email:{
        type:String,
        request:true,
        unique:true
    },
    balance:{
        type:Number
    },
    verifData:{
        type:mongoose.Schema.Types.ObjectId, ref:"Document"
    },

    roleCategory:[{type:mongoose.Schema.Types.ObjectId, ref:"RoleCategory"}],

    subscriptions:[{type:mongoose.Schema.Types.ObjectId, ref:"Subscription"}],
    followers:[{type:mongoose.Schema.Types.ObjectId, ref:"Follower"}],

    paymentData:{ type:mongoose.Schema.Types.ObjectId, ref:"PaymentData" },
    posts:[{type:mongoose.Schema.Types.ObjectId, ref:"Post"}]
},
    {timestamps:true});

export default mongoose.model("User",UserSchema);