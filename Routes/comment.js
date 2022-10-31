import {Router} from "express";
import {createComment} from "../Controllers/Comment.js"

const router = Router();

router.post("/createComment", createComment);

export default router;