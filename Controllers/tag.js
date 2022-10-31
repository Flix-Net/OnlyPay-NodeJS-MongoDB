import Tag from "../Models/Tag.js";

export const createTag = async (req, res)=>{
    try{
        const {title} = req.body;

        const tag = new Tag({
            title
        });

        await tag.save();
        res.json({message:"Тег успешно добавлен"});
    }
    catch (err)
    {
        res.json({err, message:"Ошибка добавления тега"});
    }

}