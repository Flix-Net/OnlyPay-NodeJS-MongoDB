import Post from "../Models/Post.js";
import User from "../Models/User.js";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

//  --------------- Create new Post -------------

export const createPost = async (req, res)=>{
    try {
        const {title, text , author} = req.body;

        let newPost;

        if (req.files)
        {
            let fileName = Date.now().toString() + req.files.imgURL.name;
            const __dirname = dirname(fileURLToPath(import.meta.url));
            await req.files.imgURL.mv(path.join(__dirname, "..", "uploads", fileName));

            newPost = new Post({
                title,
                text,
                imgURL: fileName,
                author,
                authorID: req.userId,
            });
        }
        else
        {
            newPost = new Post({
                title,
                text,
                author,
                authorID: req.userId
            });
        }


        await newPost.save();
        await User.findByIdAndUpdate(req.userId, {$push: {posts:newPost}} );
        return res.json({ newPost ,message:"Пост успешно создан!"})
    }
    catch (err)
    {
        console.log(err);
        return res.json({ err:`error is: ${err}` ,message:"Ошибка загрузки поста"});
    }
}

//  --------------- Get All Post ----------------

export const getAllPosts = async (req, res)=> {
    try {
        let posts = await Post.find().sort("-createdAt");

        if (Object.entries(posts).length === 0)
            return res.json({message:"Постов нет"})
        else
            return res.json({posts});
    }
    catch (err) {
        return res.json({message:"Ошибка загрузки постов"})
    }
}

//  --------------- Get One Post ----------------

export const getOnePost = async (req, res)=>{
    try {
        let postID = req.params.id;

        await Post.findOneAndUpdate( { _id:postID }, { $inc: { view: 1 } }, { returnDocument: "after" })
            .then((post)=>
            {
                if (!post)
                    return res.json({message:"Пост не найден"});
                else
                    return res.json(post);
            })
            .catch((err)=>
            {
                return res.json({err, message:"Ошибка поиска поста"})
            });
    }
    catch (err)
    {
        return res.json({err, message:"Ошибка на сервере"})
    }

}

//  --------------- Get My Post's ----------------

export const getMyPosts = async (req, res)=> {
    try {
        const user = await User.findById(req.userId);
        const list = await Promise.all(
            user.posts.map(post => {
                return Post.findById(post._id)
            })
        );
        res.json(list);
    }
    catch (err) {
        return res.json({ err:err ,message:"Ошибка загрузки постов"})
    }
}

// ---------------- Delete Post -----------------

export const deletePost = async (req, res)=> {
    const postID = req.params.id;

    try {
        await Post.findOneAndDelete({ _id:postID } )
            .then((post)=>{
                if (!post)
                {
                    return res.json({message:"Пост не найден"});
                }
            })
            .catch((err)=>{
                return res.json({message:"Ошибка удаления поста", err});
            })

        await User.findByIdAndUpdate(req.userId, {
            $pull:{posts: postID}
        })
        return res.json({message:"Пост успешно удалён"});
    }
    catch (err)
    {
        return res.json({message:"Ошибка удаления поста", err});
    }


}

// ---------------- Edit Post ------------------

export const editPost = async (req, res)=>{
    try {
        // let postID = req.params.id;
        // const {title, text} = req.body;
        //
        // await Post.updateOne(
        //     {
        //         _id:postID
        //     },
        //     {
        //         title,
        //         text
        //     })
        // return res.json({message:"Пост успешно обновлён"});

        const {title,text} = req.body;
        let postID = req.params.id;

        const post = await Post.findById(postID);

        if (req.files)
        {
            let fileName = Date.now().toString() + req.files.image.name;
            const __dirname = dirname(fileURLToPath(import.meta.url));
            await req.files.image.mv(path.join(__dirname, "..", "uploads", fileName));
            post.imgURL = fileName || "";
        }

        post.title = title;
        post.text = text;
        await post.save();
        res.json({post, message:"Пост успешно обновлен"});
    }
    catch (err) {
        return res.json({message:"Ошибка редактирования поста", err});
    }
}