import { Outlet } from "react-router-dom";
import DashboardSideBar from "../DashboardSideBar";
import NoStudentSelected from "../NoStudentSelected";
import SelectedStudentStore from "@/state/SelectedStudentStore";
import { LuLoader2 } from "react-icons/lu";

const DashboardLayout = () => {
  const seletedStudent = SelectedStudentStore((state) => state.seletedStudent);
  const isLoading = SelectedStudentStore((state) => state.isLoading);

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
