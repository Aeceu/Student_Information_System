import axios from "@/api/axios";
import AdminStore from "@/state/AdminStore";
import { AxiosError, isAxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const setAdmin = AdminStore((state) => state.setAdmin);
  const setToken = AdminStore((state) => state.setToken);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
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
        "/admin/login",
        { data },
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      setAdmin(res.data.admin);
      setToken(res.data.accessToken);
      navigate("/admin");
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (typeof axiosError.response?.data === "string") {
          console.log(axiosError.response?.data);
          toast.error(axiosError.response.data);
        }
      }
    } finally {
      setLoading(false);
      setData({
        password: "",
        email: "",
      });
    }
  };

  return (
    <form
      id="student_form"
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-4 w-full"
    >
      <input
        type="text"
        id="email"
        placeholder="email"
        value={data.email}
        onChange={(e) => handleChange(e)}
        className="text-sm w-full text-black outline-none px-4 py-1 rounded-sm  shadow-slate-sm "
      />
      <input
        type="password"
        id="password"
        placeholder="password"
        value={data.password}
        onChange={(e) => handleChange(e)}
        className="text-sm w-full text-black outline-none px-4 py-1 rounded-sm  shadow-slate-sm "
      />
      <button
        disabled={loading}
        type="submit"
        className="w-full px-8 py-1 bg-red-500 shadow-slate-md text-white  flex items-center justify-center rounded-sm
        hover:scale-105 duration-300 transition-all cursor-pointer"
      >
        {loading ? (
          <LuLoader2 size="1.5rem" className="animate-spin" />
        ) : (
          "Log in"
        )}
      </button>
    </form>
  );
};
export default AdminLoginForm;
