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
import { LuLoader2 } from "react-icons/lu";
import { TAdmin } from "@/admin.type";

const AdminTables = () => {
  return (
    <div className="w-full h-full shadow-2xl rounded-md bg-white border border-red-50 flex flex-col justify-between">
      <Tables />
      <div className="flex items-center justify-end p-2">
        <button
          type="button"
          className="rounded-md bg-green-500 px-2 py-1.5 shadow-xl text-white text-sm hover:scale-105 duration-200 transition-all"
        >
          Add new
        </button>
      </div>
    </div>
  );
};
export default AdminTables;

const Tables = () => {
  const [loading, setLoading] = useState(false);
  const [admins, setAdmins] = useState<TAdmin[]>([]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <LuLoader2 size="1.5rem" className="animate-spin" />
      </div>
    );
  }

  if (admins.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        No admins
      </div>
    );
  }

  return (
    <Table className="">
      <TableHeader>
        <TableRow className="text-xs ">
          <TableHead className="rounded-tl-md bg-slate-950 text-stone-50 ">
            Username
          </TableHead>
          <TableHead className="bg-slate-950 text-stone-50 ">Name</TableHead>
          <TableHead className="bg-slate-950 text-stone-50 ">Email</TableHead>
          <TableHead className="rounded-tr-md bg-slate-950 text-stone-50 ">
            Position
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {admins &&
          admins.map((admin) => (
            <TableRow key={admin.id}>
              <TableCell className="text-xs">{admin.username}</TableCell>
              <TableCell className="text-xs">{admin.name}</TableCell>
              <TableCell className="text-xs">{admin.email}</TableCell>
              <TableCell className="text-xs">{admin.role}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
