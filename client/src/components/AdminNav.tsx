import { useAdminLogout } from "@/hooks/admin/useLogout";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const admin_logout = useAdminLogout();
  return (
    <nav className="w-full h-[50px] flex items-center justify-between px-8 bg-gradient-to-r from-red-500 via-red-600 to-red-400 bg-cover bg-center bg-no-repeat">
      <h1 className="text-white font-semibold">
        Earist Student Information System
      </h1>
      <div className="text-sm flex items-center gap-4 text-white">
        <Link to="/admin">Home</Link>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/subjects">Subjects</Link>
        <Link to="/admin/sections">Sections</Link>
      </div>
      <button
        onClick={admin_logout}
        className="text-xs p-2 cursor-pointer rounded-sm bg-yellow-500 shadow-xl text-white"
      >
        Log out
      </button>
    </nav>
  );
};
export default AdminNav;
