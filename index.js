import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./Routes/auth.js";
import postRouter from "./Routes/post.js";
import roleCategoryRouter from "./Routes/roleCategory.js";
import documentRouter from "./Routes/document.js";
import tagRouter from "./Routes/tag.js";
import paymentSystemRouter from "./Routes/paymentSystem.js";
import paymentDataRouter from "./Routes/paymentData.js";
import followerRouter from "./Routes/follower.js";
import subscriptionRouter from "./Routes/subscription.js";
import rateRouter from "./Routes/rate.js";
import postCategoryRouter from "./Routes/postCategory.js";
import commentRouter from "./Routes/comment.js";
import fileUpload from "express-fileupload";

const app = express();

// MiddleWare
app.use(express.json());

const corsOptions ={
origin:['http://localhost:3000']
};
app.use(cors(corsOptions));

app.use(fileUpload(undefined));
app.use(express.static('uploads'));

// Constants
dotenv.config();
const PORT = process.env.PORT ||4002;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Routes
app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/roleCategory", roleCategoryRouter);
app.use("/verification", documentRouter);
app.use("/paymentData", paymentDataRouter);
app.use("/paymentSystem", paymentSystemRouter);
app.use("/tag", tagRouter);
app.use("/follower", followerRouter);
app.use("/subscription", subscriptionRouter);
app.use("/postCategory", postCategoryRouter);
app.use("/rate", rateRouter);
app.use("/comment", commentRouter);

async function start()
{
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@fullstack.y3wqjdw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
        .then( ()=> console.log("Connect Data Base!"))
        .catch( ()=> console.log("Error Data Base!"))
    try {
        app.listen(PORT, ()=>{
            console.log(`Server has been started on port ${PORT}`);
        })
    }
    catch (err)
    {
        console.log('Connection error!');
    }
}

app.get('/', (req, res)=>{
    return res.json({message:"Start server"})
})

await start();
