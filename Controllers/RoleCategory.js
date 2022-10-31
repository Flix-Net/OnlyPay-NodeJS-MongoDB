import RoleCategory from "../Models/RoleCategory.js";

export const createRoleCategory = async (req,res)=>{
    try{
        const {title} = req.body;

        const RoleCategoryItem = new RoleCategory({
            title
        });

        await RoleCategoryItem.save();
        res.json({message:"Категория роли автора установлена"});
    }
    catch (err)
    {
        res.json({err, message:"Ошибка установки категория роли автора"});
    }
}