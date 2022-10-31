import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next)=>{

    const token = (req.headers.authorization || "").replace(/Bearer\s?/,'');
    const secret = process.env.JWT_SECRET;

    if (token !== "null" && token != null && token !== "")
    {
        try {
            const decoded = jwt.verify(token, secret);
            req.userId = decoded.id;
            next();
        }
        catch (err)
        {
            return res.json({message:"Ошибка аутентификации"});
        }
    }
    else
    {
        return res.json({message:"Нет токена! (авторизация не пройдена)"});

    }

}