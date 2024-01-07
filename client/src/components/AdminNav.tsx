import { useAdminLogout } from "@/hooks/admin/useLogout";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AdminStore from "@/state/AdminStore";
import NewStore from "@/state/NewStore";

const AdminNav = () => {
  const admin = AdminStore((state) => state.admin);
  const admin_logout = useAdminLogout();
  const setSelectedStudent = NewStore((state) => state.setSelectedStudent);
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    navigate(link);
    setSelectedStudent(null);
  };

  return (
    <nav className="z-50 w-full h-[50px] flex items-center justify-between px-16 bg-gradient-to-r from-red-500 via-red-600 to-red-400 bg-cover bg-center bg-no-repeat">
      <h1 className="text-white font-semibold">
        Earist Student Information System
      </h1>
      <div className="text-sm flex items-center gap-4 text-white">
        <button type="button" onClick={() => handleNavigate("/admin")}>
          Home
        </button>
        <button
          type="button"
          onClick={() => handleNavigate("/admin/dashboard")}
        >
          Dashboard
        </button>
      </div>
      <span className="flex items-center gap-4">
        <h1 className="bg-yellow-400 shadow-xl text-red-500 px-2 py-1 rounded-md text-xs  font-bold">{`${
          admin.name
        }  (${admin.role.toLowerCase()})`}</h1>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-xs outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-red-500">
            <DropdownMenuLabel className="text-xs text-red-500">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-red-500" />
            <DropdownMenuItem onClick={admin_logout} className="text-xs">
              Log-out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </span>
    </nav>
  );
};
export default AdminNav;
