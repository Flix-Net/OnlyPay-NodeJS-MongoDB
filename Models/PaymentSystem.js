import mongoose from "mongoose";

const PaymentSystemSchema = new mongoose.Schema({
    title:{
        type:String,
        request:true
    }
});

export default mongoose.model("PaymentSystem", PaymentSystemSchema);