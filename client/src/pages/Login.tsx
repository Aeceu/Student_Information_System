import AdminLoginForm from "@/components/forms/AdminLoginForm";
import StudentLoginForm from "@/components/forms/StudentLoginForm";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [type, setType] = useState("STUDENT");

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
    <div className="relative w-full h-screen flex   justify-center bg-[url(./bodybg.jpg)] bg-cover bg-center p-4">
      <img
        src="./uni.jpg"
        alt="uni"
        className="absolute top-0 left-0 w-full h-full opacity-10"
      />
      <div className="w-[400px] h-[400px] p-4 flex flex-col justify-center items-center gap-4 z-10">
        <h1 className="text-white text-2xl font-bold w-full text-center">
          Student Information System
        </h1>

        <span className="w-full">
          <select
            form="student_form"
            name="types"
            id="types"
            className="outline-none text-xs shadow-slate-sm"
            onChange={handleTypeChange}
          >
            <option value="STUDENT">Student</option>
            <option value="ADMIN">Admin</option>
          </select>
        </span>
        {type === "STUDENT" && <StudentLoginForm />}
        {type === "ADMIN" && <AdminLoginForm />}
      </div>
    </div>
  );
};
export default Login;
