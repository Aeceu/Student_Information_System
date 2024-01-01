import { Router } from "express";
import {
  login,
  logout,
  signup,
} from "../../controllers/students/AuthController";
import { handleRefreshToken } from "../../controllers/students/StudentRefreshToken";
import {
  deleteStudentById,
  getAllStudents,
  getAllStudentsByStudentNumber,
  getStudent,
  updateStudent,
} from "../../controllers/students/StudentController";
import {
  getStudentSubjects,
  addStudenSubject,
  deleteStudentSubject,
} from "../../controllers/students/SubjectsController";

const router = Router();

router.post("/student/login", login);
router.post("/student/signup", signup);
router.get("/student/logout", logout);
router.get("/student/refresh", handleRefreshToken);

router.get("/student/:id", getStudent);
router.get("/students", getAllStudents);
router.post("/students", getAllStudentsByStudentNumber);
router.patch("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudentById);

router.get("/student/subjects/:id", getStudentSubjects);
router.post("/student/subjects/:id", addStudenSubject);
router.delete("/student/subjects/:id", deleteStudentSubject);

export default router;
