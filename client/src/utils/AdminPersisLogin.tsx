import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LuLoader2 } from "react-icons/lu";
import useRefreshToken from "@/hooks/admin/useRefreshToken";
import AdminStore from "@/state/AdminStore";

const AdminPersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const navigate = useNavigate();
  const admin = AdminStore((state) => state.admin);
  const token = AdminStore((state) => state.token);

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
    !token || !admin ? verifyRefreshToken() : setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex p-4 justify-center">
          <LuLoader2 className="animate-spin" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default AdminPersistLogin;
