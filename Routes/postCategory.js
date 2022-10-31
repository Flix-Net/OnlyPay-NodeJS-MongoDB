import {Router} from "express";
import {createPostCategory} from "../Controllers/postCategory.js"

const router = Router();

router.post("/createPostCategory", createPostCategory);

export default router;