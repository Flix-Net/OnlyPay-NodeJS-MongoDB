import {Router} from "express";
import {register, login, getMe} from "../Controllers/auth.js";
import {checkAuth} from "../utils/checkAuth.js";

const router = Router();

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// GetMe
router.get("/getMe", checkAuth, getMe);

export default router;