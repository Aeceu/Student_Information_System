import { Router } from "express";
import { login, logout, signup } from "../../controllers/admin/AuthController";
import { handleRefreshToken } from "../../controllers/admin/AdminRefreshToken";
const router = Router();

router.post("/admin/login", login);
router.post("/admin/signup", signup);
router.get("/admin/logout", logout);
router.get("/admin/refresh", handleRefreshToken);

export default router;
