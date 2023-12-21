import DashboardSideBar from "@/components/DashboardSideBar";
import StudentProfileTab from "@/components/StudentProfileTab";

const Dashboard = () => {
  return (
    <div className="w-full h-[calc(100vh-50px)] flex items-center justify-center">
      <DashboardSideBar />
      <div className=" w-3/4 h-full ">
        <StudentProfileTab />
      </div>
    </div>
  );
};
export default Dashboard;
