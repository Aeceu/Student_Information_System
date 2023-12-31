import { useAdminLogout } from "@/hooks/admin/useLogout";
import { useStudentLogout } from "@/hooks/student/useLogout";

const StudentHome = () => {
  const student_logout = useStudentLogout();
  const admin_logout = useAdminLogout();
  return (
    <div>
      StudentHome
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
export default StudentHome;
