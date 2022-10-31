import {Router} from "express";
import {createPaymentSystem} from "../Controllers/paymentSystem.js"

const router = Router();

router.post("/createRoleCategory", createPaymentSystem)

export default router;