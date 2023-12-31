import { useAdminLogout } from "@/hooks/admin/useLogout";
import { useStudentLogout } from "@/hooks/student/useLogout";

const AdminHome = () => {
  const student_logout = useStudentLogout();
  const admin_logout = useAdminLogout();
  return (
    <div className="w-full h-[calc(100vh-50px)] flex flex-col items-center justify-center gap-4">
      AdminHome
      <button
        onClick={student_logout}
        className="px-8 py-1 bg-slate-950 text-white  cursor-pointer"
      >
        STUDENT LOG-OUT
      </button>
      <button
        onClick={admin_logout}
        className="px-8 py-1 bg-slate-950 text-white  cursor-pointer"
      >
        ADMIN LOG-OUT
      </button>
    </div>
  );
};
export default AdminHome;
