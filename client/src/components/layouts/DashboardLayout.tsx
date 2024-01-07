import { Outlet } from "react-router-dom";
import DashboardSideBar from "../DashboardSideBar";
import NoStudentSelected from "../NoStudentSelected";
import { LuLoader2 } from "react-icons/lu";
import NewStore from "@/state/NewStore";

const DashboardLayout = () => {
  const seletedStudent = NewStore((state) => state.selectedStudent);
  const isLoading = NewStore((state) => state.isLoading);

  return (
    <div className="w-full h-[calc(100vh-50px)] flex items-center justify-center">
      <DashboardSideBar />
      <div className="w-3/4 h-full">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <LuLoader2 size="2rem" className="animate-spin" />
          </div>
        ) : !seletedStudent ? (
          <NoStudentSelected />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};
export default DashboardLayout;
