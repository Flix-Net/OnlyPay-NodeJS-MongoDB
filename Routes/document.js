import {Router} from "express";
import {createDocument} from "../Controllers/Document.js"

const router = Router();

router.post("/postDocument", createDocument)

export default router;