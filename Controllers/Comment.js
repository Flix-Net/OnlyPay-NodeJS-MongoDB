import Comment from "../Models/Comment.js";

export const createComment = async (req, res)=>{
    try {
        const {author, authorID, text} = req.body;

        const comment = new Comment({
            author,
            authorID,
            text
        });

        await comment.save();
        res.json({message:"Комментарий успешно добавлен!"});
    }
    catch (err) {
        res.json({message:"Ошибка добавления комментария"});
    }
}