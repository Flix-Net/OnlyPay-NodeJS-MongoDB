import {Router} from "express";
import {createTag} from "../Controllers/Tag.js"

const router = Router();

router.post("/createTag", createTag)

export default router;