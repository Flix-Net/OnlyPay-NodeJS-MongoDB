import Subscription from "../Models/Subscription.js";

export const createSubscription = async (req,res)=>{
    try{
        const {AuthorID, RateID} = req.body;

        const subscription = new Subscription({
            AuthorID,
            RateID
        });

        await subscription.save();
        res.json({message:"Подписка успешно добавлена"});
    }
    catch (err) {
        res.json({message:"Ошибка добавления подписки"});
    }
}