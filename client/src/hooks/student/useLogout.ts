import axios from "@/api/axios";
import StudentStore from "@/state/StudentStore";
import { useNavigate } from "react-router-dom";

export const useStudentLogout = () => {
  const setStudent = StudentStore((state) => state.setStudent);
  const setToken = StudentStore((state) => state.setToken);
  const navigate = useNavigate();
  const logout = async () => {
    setStudent(null);
    setToken("");

    try {
      const res = await axios.get("/student/logout", {
        withCredentials: true,
      });

      console.log(res.data, res.status);
      alert(res.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return logout;
};
