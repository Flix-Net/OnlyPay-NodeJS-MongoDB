import PaymentData from "../Models/PaymentData.js";

export const createPaymentData = async (req,res)=>{
    try {
        const {IDPaySystem, pinCode, numberCart} = req.body;

        const PayData = new PaymentData({
            IDPaySystem,
            pinCode,
            numberCart
        });

        await PayData.save();
        res.json({message:"Платежные данные добавлены"});
    }
    catch (err) {
        res.json({message:"Ошибка добавления платежных данных"});
    }
}