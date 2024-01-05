import { Router } from "express";
import { login, logout, signup } from "../../controllers/admin/AuthController";
import { handleRefreshToken } from "../../controllers/admin/AdminRefreshToken";
import {
  AdminDeleteStudent,
  AdminUpdateStudentInfo,
  DeleteAdmin,
  GetAllAdmins,
  GetCounts,
  UpdateAdmin,
} from "../../controllers/admin/AdminController";
const router = Router();

router.post("/admin/login", login);
router.post("/admin/signup", signup);
router.get("/admin/logout", logout);
router.get("/admin/refresh", handleRefreshToken);
router.get("/admins", GetAllAdmins);
router.get("/usercount", GetCounts);
router.delete("/admin/:id", DeleteAdmin);
router.put("/admin/updateStudent", AdminUpdateStudentInfo);
router.patch("/admin/:id", UpdateAdmin);
router.delete("/admin/student/:id", AdminDeleteStudent);

export default router;
