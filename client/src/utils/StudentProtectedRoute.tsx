import StudentStore from "@/state/StudentStore";
import { Navigate, Outlet } from "react-router-dom";

type ROLES = string;

type TProps = {
  allowedRoles: ROLES[];
};

const StudentProtectedRoute = ({ allowedRoles }: TProps) => {
  const student = StudentStore((state) => state.student);
  const student_token = StudentStore((state) => state.token);

  return allowedRoles.includes(student.role) ? (
    <Outlet />
  ) : student || student_token ? (
    <Navigate to="/" />
  ) : (
    <Navigate to="/login" />
  );
};
export default StudentProtectedRoute;
