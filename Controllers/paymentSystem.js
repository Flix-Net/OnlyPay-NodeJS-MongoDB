import PaymentSystem from "../Models/PaymentSystem.js";

export const createPaymentSystem = async (req,res)=>{
    try {
        const {title} = req.body;

        const PaySys = new PaymentSystem({
            title
        });

        await PaySys.save();
        res.json({message:"Платежная система добавлена"})
    }
    catch (err)
    {
        res.json({message:"Ошибка добавления платежной системы"})
    }
}