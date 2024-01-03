import AdminStudentCounts from "@/components/AdminStudentCounts";
import AdminTables from "@/components/AdminTables";
import DashboardAdminProfile from "@/components/DashboardAdminProfile";
import AdminStore from "@/state/AdminStore";
import { Link } from "react-router-dom";
import { LuArrowRightFromLine } from "react-icons/lu";
const AdminHome = () => {
  const admin = AdminStore((state) => state.admin);
  return (
    <div className="bg-slate-50 w-full h-[calc(100vh-50px)] flex items-center gap-2 p-8">
      <DashboardAdminProfile />
      <div className="w-full h-full flex flex-col gap-2">
        <div className="col-span-2 w-full  p-2 flex gap-2">
          <h1 className="text-red-500 text-2xl font-bold">
            Hello, {admin.name}!
          </h1>
          <Link
            to="dashboard"
            className=" px-2 py-1.5 bg-red-400 text-white rounded-md shadow-xl flex items-center gap-2 w-max hover:scale-105 duration-200 transition-all text-sm"
          >
            Go to Dashboard <LuArrowRightFromLine size="1.3rem" />
          </Link>
        </div>
        <AdminTables />
        <AdminStudentCounts />
      </div>
    </div>
  );
};
export default AdminHome;
