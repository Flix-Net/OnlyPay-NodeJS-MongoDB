import {Router} from "express";
import {createRoleCategory} from "../Controllers/RoleCategory.js"

const router = Router();

router.post("/createRoleCategory", createRoleCategory)

export default router;