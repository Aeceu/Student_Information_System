import { Outlet } from "react-router-dom";
import AdminNav from "../AdminNav";
const AdminLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center ">
      <AdminNav />
      <Outlet />
    </div>
  );
};
export default AdminLayout;
