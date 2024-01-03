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
export default AdminTables;
