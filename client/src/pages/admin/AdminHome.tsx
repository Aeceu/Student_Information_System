import AdminStudentCounts from "@/components/AdminStudentCounts";
import AdminTables from "@/components/AdminTables";
import DashboardAdminProfile from "@/components/DashboardAdminProfile";

const AdminHome = () => {
  return (
    <div className="bg-slate-50 w-full h-[calc(100vh-50px)] grid  grid-cols-3 gap-2 p-8">
      <DashboardAdminProfile />

      <div className="col-span-2 w-full shadow-2xl rounded-md bg-white border border-red-50">
        <AdminTables />
      </div>
      <AdminStudentCounts />
    </div>
  );
};
export default AdminHome;
