import {Router} from "express";
import {createRate} from "../Controllers/rate.js"

const router = Router();

router.post("/createRate", createRate)

export default router;