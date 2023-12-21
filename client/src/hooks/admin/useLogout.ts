import axios from "@/api/axios";
import AdminStore from "@/state/AdminStore";
import { useNavigate } from "react-router-dom";

export const useAdminLogout = () => {
  const setAdmin = AdminStore((state) => state.setAdmin);
  const setToken = AdminStore((state) => state.setToken);
  const navigate = useNavigate();
  const logout = async () => {
    setAdmin({
      id: "",
      name: "",
      role: "",
    });
    setToken("");

    try {
      const res = await axios.get("/admin/logout", {
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
