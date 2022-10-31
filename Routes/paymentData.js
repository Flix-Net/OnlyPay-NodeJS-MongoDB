import {Router} from "express";
import {createPaymentData} from "../Controllers/paymentData.js"

const router = Router();

router.post("/createPaymentData", createPaymentData)

export default router;