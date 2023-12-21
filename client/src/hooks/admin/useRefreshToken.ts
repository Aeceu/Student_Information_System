import axios from "@/api/axios";
import AdminStore from "@/state/AdminStore";

const useRefreshToken = () => {
  const setAdmin = AdminStore((state) => state.setAdmin);
  const setToken = AdminStore((state) => state.setToken);

  const refresh = async () => {
    const res = await axios.get("/admin/refresh", {
      withCredentials: true,
    });

    setToken(res.data.accessToken);
    setAdmin(res.data.admin);
    return res.data;
  };
  return refresh;
};

export default useRefreshToken;
