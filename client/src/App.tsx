import { Routes, Route } from "react-router-dom";
import StudentLayout from "./components/layouts/StudentLayout";
import StudentHome from "./pages/student/StudentHome";
import IDPage from "./pages/student/IDPage";
import Profile from "./pages/student/Profile";
import StudentPersistLogin from "./utils/StudentPersistLogin";
import AdminPersistLogin from "./utils/AdminPersisLogin";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import DashboardLayout from "./components/layouts/DashboardLayout";
import DefaultInfo from "./components/DefaultInfo";
import UpdatingInfo from "./components/UpdateingInfo";
import SubjectLayout from "./components/layouts/SubjectLayout";
import FirstYearTables from "./components/tables/FirstYearTables";
import SecondYearTables from "./components/tables/SecondYearTables";
import ThirdYearTables from "./components/tables/ThirdYearTables";
import FourthYearTables from "./components/tables/FourthYearTables";

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
            <Route path="student/ID/:id" element={<IDPage />} />

            <Route path="student/subjects" element={<SubjectLayout />}>
              <Route path="first_year/:id?" element={<FirstYearTables />} />
              <Route path="second_year/:id?" element={<SecondYearTables />} />
              <Route path="third_year/:id?" element={<ThirdYearTables />} />
              <Route path="fourth_year/:id?" element={<FourthYearTables />} />
            </Route>
          </Route>
        </Route>
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};
export default App;
