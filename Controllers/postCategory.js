import PostCategory from "../Models/PostCategory.js";


export const createPostCategory = async (req, res)=>{
    try{
        const {title} = req.body;

        const postCategory = new PostCategory({
            title
        });

        await postCategory.save();
        res.json({message:"Категория постов успешно добавлена"});
    }
    catch (err) {
        res.json({message:"Ошибка добавления категории постов"});
    }
}