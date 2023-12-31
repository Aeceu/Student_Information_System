import axios from "@/api/axios";
import StudentStore from "@/state/StudentStore";
import { AxiosError, isAxiosError } from "axios";
import { useState } from "react";
import { LuLoader2, LuEyeOff, LuEye } from "react-icons/lu";
import { FaArrowRightLong, FaUser, FaLock } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StudentLoginForm = () => {
  const navigate = useNavigate();
  const setStudent = StudentStore((state) => state.setStudent);
  const setToken = StudentStore((state) => state.setToken);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    student_number: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "/student/login",
        { data },
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      toast.success(res.data.message);
      setStudent(res.data.student);
      setToken(res.data.accessToken);
      navigate("/");
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (typeof axiosError.response?.data === "string") {
          setError(axiosError.response?.data);
          toast.error(axiosError.response?.data);
        }
      }
    } finally {
      setLoading(false);
      setData({
        password: "",
        student_number: "",
      });
    }
  };

  return (
    <form
      id="student_form"
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-4 w-full text-white"
    >
      <p className={`${!error && "hidden"} text-xs  font-bold`}>{error}</p>
      <span className="bg-white flex items-center gap-2 text-black w-full text-sm px-4 py-1 rounded-sm shadow-slate-sm">
        <FaUser className="text-red-500" />
        <input
          type="text"
          id="student_number"
          placeholder="student number"
          value={data.student_number}
          onChange={handleChange}
          className="w-full outline-none "
        />
      </span>
      <span className="bg-white flex items-center gap-2 text-black w-full text-sm px-4 py-1 rounded-sm shadow-slate-sm">
        <FaLock className="text-red-500" />
        <input
          type={show ? "text" : "password"}
          id="password"
          placeholder="password"
          value={data.password}
          onChange={handleChange}
          className="w-full outline-none "
        />
        {show ? (
          <LuEye
            size="1.5rem"
            className="text-red-500 cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => setShow(false)}
          />
        ) : (
          <LuEyeOff
            size="1.5rem"
            className="text-red-500 cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => setShow(true)}
          />
        )}
      </span>
      <h1 className="text-xs flex items-center justify-end w-full gap-2">
        Don't have account yet?{" "}
        <Link
          to={"/signup"}
          className="h-full text-blue-500 flex items-center gap-1 font-bold hover:scale-105 duration-300 transition-all cursor-pointer"
        >
          Click here <FaArrowRightLong size=".7rem" />
        </Link>
      </h1>
      <span className="w-full flex flex-col gap-2 ">
        <button
          disabled={loading}
          type="submit"
          className="w-full px-8 py-1 bg-red-500 shadow-slate-md text-white  flex items-center justify-center rounded-sm
        hover:scale-105 duration-300 transition-all cursor-pointer"
        >
          {loading ? (
            <LuLoader2 size="2em" className="animate-spin" />
          ) : (
            "Log in"
          )}
        </button>
        <div className="w-full flex items-center gap-2">
          <div className="w-full h-[1px] border-b border-slate-950" />
          or
          <div className="w-full h-[1px] border-b border-slate-950" />
        </div>
        <Link
          to={"/signup"}
          className="w-full px-8 py-1 bg-amber-500 shadow-slate-md text-white  flex items-center justify-center rounded-sm
        hover:scale-105 duration-300 transition-all cursor-pointer"
        >
          Sign up
        </Link>
      </span>
    </form>
  );
};
export default StudentLoginForm;
