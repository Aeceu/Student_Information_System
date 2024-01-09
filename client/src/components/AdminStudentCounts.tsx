import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { axiosPrivate } from "@/api/axios";
import { TAdmin } from "@/admin.type";
import { LuLoader2 } from "react-icons/lu";

const AdminStudentCounts = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        setLoading(true);
        const res = await axiosPrivate.get("/admins");
        setAdmins(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2 w-full h-[190px]  ">
      <div className="overflow-y-auto col-span-2 rounded-md bg-white shadow-xl">
        {!loading ? (
          <Tables admins={admins} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <LuLoader2 size="1.2rem" className="animate-spin" />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center rounded-md p-4 bg-emerald-500 text-white shadow-xl ">
        <h1>List of Students</h1>
        <button
          type="button"
          className="rounded-md px-2 py-1.5  text-white text-sm hover:scale-110 duration-200 transition-all cursor-pointer"
        >
          <img src="/student.svg" alt="student" className="w-[40px]" />
        </button>
      </div>
    </div>
  );
};
export default AdminStudentCounts;

type TTablesProps = {
  admins: TAdmin[];
};

const Tables = ({ admins }: TTablesProps) => {
  return (
    <Table className="min-w-[100%] w-max">
      <TableHeader>
        <TableRow>
          <TableHead className="text-xs bg-slate-950 text-white border-l border-white rounded-tl-md">
            username
          </TableHead>
          <TableHead className="text-xs bg-slate-950 text-white border-l border-white">
            email
          </TableHead>
          <TableHead className="text-xs bg-slate-950 text-white border-l border-white">
            name
          </TableHead>
          <TableHead className="text-xs bg-slate-950 text-white border-l border-white rounded-tr-md">
            role
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {admins.map((admin, i) => (
          <TableRow key={i}>
            <TableCell className="text-xs">{admin.username}</TableCell>
            <TableCell className="text-xs">{admin.email}</TableCell>
            <TableCell className="text-xs">{admin.name}</TableCell>
            <TableCell className="text-xs">{admin.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
