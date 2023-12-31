import AdminStore from "@/state/AdminStore";
import { Navigate, Outlet } from "react-router-dom";

type ROLES = string;

type TProps = {
  allowedRoles: ROLES[];
};

const AdminProtectedRoute = ({ allowedRoles }: TProps) => {
  const admin = AdminStore((state) => state.admin);
  const token = AdminStore((state) => state.token);

  return allowedRoles.includes(admin.role) ? (
    <Outlet />
  ) : admin || token ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
export default AdminProtectedRoute;
