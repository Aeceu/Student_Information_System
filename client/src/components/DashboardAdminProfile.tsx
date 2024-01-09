import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AdminStore from "@/state/AdminStore";
import { Separator } from "./ui/separator";

const DashboardAdminProfile = () => {
  const admin = AdminStore((state) => state.admin);
  return (
    <div className="p-4  w-1/4 h-full shadow-2xl rounded-md bg-white border border-red-50">
      <div className="relative p-4 h-[150px] flex justify-center items-end bg-red-400 rounded-md shadow-xl ">
        <Avatar className="w-[100px] h-[100px] absolute -bottom-10 left-2 shadow-xl border-[4px] border-red-500">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-14  flex flex-col gap-2">
        <span className="flex items-center gap-2">
          <p className="bg-red-400 text-white shadow-xl rounded-full text-xs px-2 py-0.5">
            username
          </p>
          <h1 className="text-sm">{admin.username}</h1>
        </span>
        <span className="flex items-center gap-2">
          <p className="bg-red-400 text-white shadow-xl rounded-full text-xs px-2 py-0.5">
            email
          </p>
          <h1 className="text-sm">{admin.email}</h1>
        </span>
        <span className="flex items-center gap-2">
          <p className="bg-red-400 text-white shadow-xl rounded-full text-xs px-2 py-0.5">
            name
          </p>
          <h1 className="text-sm">{admin.name}</h1>
        </span>
        <span className="flex items-center gap-2">
          <p className="bg-red-400 text-white shadow-xl rounded-full text-xs px-2 py-0.5">
            role
          </p>
          <h1 className="text-sm">{admin.role.toLowerCase()}</h1>
        </span>
      </div>
      <div className="my-4 flex items-center gap-2 w-full">
        <button
          type="button"
          className="w-full px-2 py-1 rounded-md bg-emerald-500 text-white shadow-xl hover:scale-105 transition-all duration-200 text-sm"
        >
          Update
        </button>
        <button
          type="button"
          className="w-full px-2 py-1 rounded-md bg-red-500 text-white shadow-xl hover:scale-105 transition-all duration-200 text-sm"
        >
          Delete
        </button>
      </div>
      <Separator className="" />
    </div>
  );
};
export default DashboardAdminProfile;
