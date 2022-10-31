import Document from "../Models/Document.js";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

export const createDocument = async (req,res)=>{
    try{
        const {name} = req.body;

        let document;
        if (req.files)
        {
            let fileName = Date.now().toString() + req.files.facePhoto;
            const __dirname = dirname(fileURLToPath(import.meta.url));
            await req.files.facePhoto.mv(path.join(__dirname, "..", "uploads", fileName));

            document = new Document({
                name,
                facePhoto: fileName,
            });
        }
        else
        {
            res.json({message:"Ошибка, нет фотографий документов"});
        }

        await document.save();
        res.json({message:"Верификация пройдена"});
    }
    catch (err)
    {
        res.json({err, message:"Ошибка установки категория роли автора"});
    }
}