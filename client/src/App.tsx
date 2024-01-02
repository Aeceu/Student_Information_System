import { Routes, Route } from "react-router-dom";
import StudentLayout from "./components/layouts/StudentLayout";
import StudentHome from "./pages/student/StudentHome";
import Grades from "./pages/student/Grades";
import Profile from "./pages/student/Profile";
import Subjects from "./pages/student/Subjects";
import StudentPersistLogin from "./utils/StudentPersistLogin";
import AdminPersistLogin from "./utils/AdminPersisLogin";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import StudentsSubjects from "./pages/admin/StudentsSubjects";
import DashboardLayout from "./components/layouts/DashboardLayout";
import DefaultInfo from "./components/DefaultInfo";
import UpdatingInfo from "./components/UpdateingInfo";

const App = () => {
  return (
    <Routes>
      {/* Student's Route */}
      <Route path="/*" element={<StudentLayout />}>
        <Route element={<StudentPersistLogin />}>
          <Route index element={<StudentHome />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Route>

      {/* Admin's Route */}
      <Route path="/*" element={<AdminLayout />}>
        <Route element={<AdminPersistLogin />}>
          <Route path="admin" element={<AdminHome />} />
          <Route path="admin/dashboard" element={<DashboardLayout />}>
            <Route index element={<DefaultInfo />} />
            <Route path="update" element={<UpdatingInfo />} />
            <Route path="student/grades/:id" element={<Grades />} />
            <Route path="student/subjects/:id?" element={<Subjects />} />
          </Route>
          <Route path="admin/subjects" element={<StudentsSubjects />} />
        </Route>
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};
export default App;
