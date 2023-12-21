import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LuLoader2 } from "react-icons/lu";
import useRefreshToken from "@/hooks/student/useRefreshToken";
import StudentStore from "@/state/StudentStore";

const StudentPersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const navigate = useNavigate();
  const student = StudentStore((state) => state.student);
  const token = StudentStore((state) => state.token);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.log(err);
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };
    !token || !student ? verifyRefreshToken() : setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-full flex p-4 justify-center">
          <LuLoader2 className="animate-spin" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default StudentPersistLogin;
