import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// ==================== Register ======================
export const register = async (req, res)=> {
    try {
        const {username,login,password, email} = req.body;

        let isUser = await User.findOne({username});
        if (isUser)
        {
            return res.json({message:`Пользователь ${username} уже зарегистрирован!`});
        }

        isUser = await User.findOne({login});
        if (isUser)
        {
            return res.json({message:`Логин ${login} уже занят!`});
        }

        isUser = await User.findOne({email});
        if (isUser)
        {
            return res.json({message:"Данный email уже занят!"});
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);

        const newUser = new User({
            username,
            login,
            password:hash,
            email
        });

        const token = jwt.sign(
            {id:newUser._id},
            process.env.JWT_SECRET,
            {expiresIn: "30d"}
        );

        await newUser.save();

        res.json({username, token, message: "Регистрация прошла успешно!"});

    }
    catch (err)
    {
        res.json({message:"Ошибка регистрации!", error:`${err}`});
    }
}


// ============= Login ==========================
export const login = async (req, res)=>{
    try {
        const {login, password} = req.body;

        const isUser = await User.findOne({login});

        if (!isUser)
        {
            return res.json({message:"Пользователь не найден!"})
        }

        const isPasswordCorrect = bcrypt.compareSync(password, isUser.password);

        if (!isPasswordCorrect)
        {
            return res.json({message:"Пароль не верный!"});
        }

        const token = jwt.sign(
            {id:isUser._id},
            process.env.JWT_SECRET,
            {expiresIn: "30d"}
        );

        res.json({token,isUser, message:"Вы успешно авторизовались!"});

    }
    catch (err)
    {
        res.json({message:"Ошибка авторизации!"});
    }
}

// ======================== getMe =========================
export const getMe = async (req, res)=>
{
    try {
        const isUser = await User.findById(req.userId)

        if (!isUser)
        {
            return res.json({message:"Аккаунт не найден!"})
        }

        const token = jwt.sign(
            {id: isUser._id},
            process.env.JWT_SECRET,
            {expiresIn: "30d"}
        )
        return  res.json({isUser, token})

    }
    catch (err)
    {
        return res.json({message:"Аккаунт не найден!"});
    }
}