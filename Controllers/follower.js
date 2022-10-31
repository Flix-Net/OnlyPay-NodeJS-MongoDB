import Follower from "../Models/Follower.js";

export const createFollower = async (req, res)=>{
    try {
        const {rateID, userID} = req.body;

        const follower = new Follower({
            rateID,
            userID
        });

        follower.save();
        res.json({message:"Подписчик успешно добавлен"});
    }
    catch (err) {
        res.json({err, message:"Подписчик успешно добавлен"});
    }
}