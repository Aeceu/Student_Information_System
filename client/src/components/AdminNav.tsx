import { useAdminLogout } from "@/hooks/admin/useLogout";

const AdminNav = () => {
  const admin_logout = useAdminLogout();
  return (
    <nav className="w-full h-[50px] flex items-center justify-between px-8 bg-[url(./bodybg.jpg)] bg-cover bg-center bg-no-repeat">
      AdminNav
      <button
        onClick={admin_logout}
        className="text-xs p-2 cursor-pointer rounded-sm bg-yellow-500 shadow-xl text-white"
      >
        Log out
      </button>
    </nav>
  );
};
export default AdminNav;
