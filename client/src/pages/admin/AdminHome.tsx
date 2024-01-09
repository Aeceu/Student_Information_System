import StudentsCountsBarChart from "@/components/StudentsCountsBarChart";
import DashboardAdminProfile from "@/components/DashboardAdminProfile";
import AdminStore from "@/state/AdminStore";
import { Link } from "react-router-dom";
import { LuArrowRightFromLine } from "react-icons/lu";
import StudentTypePieChart from "@/components/tables/StudentTypePieChart";
import AdminStudentCounts from "@/components/AdminStudentCounts";
const AdminHome = () => {
  const admin = AdminStore((state) => state.admin);
  return (
    <div className="bg-slate-50 w-full h-[calc(100vh-50px)] flex items-center gap-2 p-2">
      <DashboardAdminProfile />
      <div className="w-full h-full flex flex-col gap-2">
        <span className="col-span-2 w-full  p-2 flex gap-2">
          <h1 className="text-red-500 text-2xl font-bold">
            Hello, {admin.name}!
          </h1>
          <Link
            to="dashboard"
            className=" px-2 py-1.5 bg-red-400 text-white rounded-md shadow-xl flex items-center gap-2 w-max hover:scale-105 duration-200 transition-all text-sm"
          >
            Go to Student Profile <LuArrowRightFromLine size="1.3rem" />
          </Link>
        </span>
        <div className="w-full flex items-center gap-2">
          <StudentsCountsBarChart />
          <StudentTypePieChart />
        </div>
        <AdminStudentCounts />
      </div>
    </div>
  );
};
export default AdminHome;
