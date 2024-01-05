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
  AddSubjectEnrolled,
  getStudentSubjects,
  deleteStudentSubject,
  updateSubjectEnrolled,
  updateGrades,
} from "../../controllers/students/SubjectsController";

const router = Router();

router.post("/student/signup", signup);
router.post("/student/login", login);
router.get("/student/logout", logout);
router.get("/student/refresh", handleRefreshToken);

router.get("/student/:id", getStudent);
router.get("/students", getAllStudents);
router.post("/students", getAllStudentsByStudentNumber);
router.patch("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudentById);

router.get("/student/subjects/:id", getStudentSubjects);
router.post("/student/subjects/:id", AddSubjectEnrolled);
router.patch("/student/subjects/:id", updateSubjectEnrolled);
router.patch("/student/subject/grade/:id", updateGrades);
router.delete("/student/subjects/:id", deleteStudentSubject);

export default router;
