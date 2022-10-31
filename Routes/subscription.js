import {Router} from "express";
import {createSubscription} from "../Controllers/Subscription.js"

const router = Router();

router.post("/addSubscription", createSubscription)

export default router;