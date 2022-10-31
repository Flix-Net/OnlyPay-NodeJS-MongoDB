import {Router} from "express";
import {createFollower} from "../Controllers/follower.js";

const router = Router();

router.post("/addFollower", createFollower)

export default router;