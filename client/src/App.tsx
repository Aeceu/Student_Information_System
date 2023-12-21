import { Routes, Route } from "react-router-dom";
import StudentLayout from "./components/layouts/StudentLayout";
import Home from "./pages/Home";
import Grades from "./pages/student/Grades";
import Profile from "./pages/student/Profile";
import Subjects from "./pages/student/Subjects";
import Dashboard from "./pages/admin/Dashboard";
import Student from "./pages/admin/Student";
import StudentPersistLogin from "./utils/StudentPersistLogin";
import AdminPersistLogin from "./utils/AdminPersisLogin";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AdminLayout from "./components/layouts/AdminLayout";

const App = () => {
  return (
    <Routes>
      {/* Student's Route */}
      <Route path="/*" element={<StudentLayout />}>
        <Route index element={<Home />} />
        <Route element={<StudentPersistLogin />}>
          <Route path="student/:id" element={<Grades />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="student/subjects/:id" element={<Subjects />} />
        </Route>
      </Route>

      {/* Admin's Route */}
      <Route path="/*" element={<AdminLayout />}>
        <Route element={<AdminPersistLogin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin/student/:id" element={<Student />} />
        </Route>
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};
export default App;
