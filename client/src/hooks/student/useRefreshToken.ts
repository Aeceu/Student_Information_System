import axios from "@/api/axios";
import StudentStore from "@/state/StudentStore";

const useRefreshToken = () => {
  const setStudent = StudentStore((state) => state.setStudent);
  const setToken = StudentStore((state) => state.setToken);

  const refresh = async () => {
    const res = await axios.get("/student/refresh", {
      withCredentials: true,
    });

    setToken(res.data.accessToken);
    setStudent(res.data.student);
    return res.data;
  };
  return refresh;
};

export default useRefreshToken;
