import DefaultInfo from "@/components/DefaultInfo";
import UpdatingInfo from "@/components/UpdateingInfo";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<DashboardLayout />}>
        <Route index element={<DefaultInfo />} />
        <Route path="update" element={<UpdatingInfo />} />
      </Route>
    </Routes>
  );
};
export default Dashboard;
