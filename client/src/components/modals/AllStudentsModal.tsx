import { axiosPrivate } from "@/api/axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuLoader2, LuUserX2 } from "react-icons/lu";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { TStudent } from "@/student.type";

const AllStudentsModal = () => {
  const [students, setStudents] = useState<TStudent[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const res = await axiosPrivate.get("/students");
        setStudents(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="z-[100] overflow-hidden   absolute top-0 left-0 w-full h-screen bg-black/70 flex items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3 } }}
        className="  p-2 z-10 bg-white rounded-sm shadow-xl  flex flex-col items-center gap-4 "
      >
        {loading ? (
          <LuLoader2 size="1.5rem" className="animate-spin" />
        ) : students.length === 0 ? (
          <div className="w-full h-full flex flex-col gap-4 items-center justify-between p-4">
            <span className="w-full h-full flex flex-col items-center justify-center">
              <LuUserX2 size="10rem" className="text-stone-300" />
              <h1 className="uppercase text-2xl text-stone-300">
                Student number found
              </h1>
            </span>
          </div>
        ) : (
          <div className="w-full h-full overflow-y-auto">
            <Table className="w-max ">
              <TableHeader>
                <TableRow className="text-xs">
                  <TableHead>Student Number</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students &&
                  students.map((student, i) => (
                    <TableRow
                      key={i}
                      className={`text-xs cursor-pointer text-black `}
                    >
                      <TableCell className="">
                        {student.student_number}
                      </TableCell>
                      <TableCell className="">{`${student.last_name}, ${student.first_name} ${student.middle_name}`}</TableCell>
                      <TableCell className="">{student.type}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        )}
      </motion.div>
    </div>
  );
};
export default AllStudentsModal;
