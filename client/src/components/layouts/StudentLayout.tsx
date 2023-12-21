import { Outlet } from "react-router-dom";
import NavBar from "../AdminNav";

const StudentLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <NavBar />
      <Outlet />
    </div>
  );
};
export default StudentLayout;
