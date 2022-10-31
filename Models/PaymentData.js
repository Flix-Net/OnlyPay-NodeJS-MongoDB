import mongoose from "mongoose";

const PaymentDataSchema = new mongoose.Schema({
    IDPaySystem:{
        type:mongoose.Schema.Types.ObjectId, ref:"PaymentSystem"
    },
    numberCart:{
        type:String,
        request:true
    },
    pinCode:{
        type:String,
        request:true
    }
});

export default mongoose.model("PaymentData", PaymentDataSchema);