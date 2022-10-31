import Rate from "../Models/Rate.js";

export const createRate = async (req, res)=>{
    try{
        const {title, price} = req.body;

        const rate = new Rate({
            title,
            price
        });

        await rate.save();
        res.json({message:"Тариф успешно добавлен"});
    }
    catch (err) {
        res.json({message:"Ошибка добавления тарифа"});
    }
}