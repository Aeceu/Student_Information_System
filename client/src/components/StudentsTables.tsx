import { TStudent } from "@/student.type";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { LuLoader2, LuUserX2 } from "react-icons/lu";
import { useState } from "react";
import SelectedStudentStore from "@/state/SelectedStudentStore";
import { axiosPrivate } from "@/api/axios";

type TStudentTables = {
  students: TStudent[] | null;
  loading: boolean;
};

const StudentsTables = ({ students, loading }: TStudentTables) => {
  const setSelectedStudent = SelectedStudentStore(
    (state) => state.setSeletedStudent
  );
  const setUpdate = SelectedStudentStore((state) => state.setUpdate);
  const setIsLoading = SelectedStudentStore((state) => state.setIsLoading);
  const [selected, setSelected] = useState<number | undefined>();

  if (loading) {
    return (
      <div className="w-full flex justify-center p-4">
        <LuLoader2 className="animate-spin" />
      </div>
    );
  }

  if (students?.length === 0) {
    return (
      <div className="w-full flex flex-col gap-4 items-center p-4">
        <LuUserX2 size="10rem" className="text-stone-300" />
        <h1 className="uppercase text-2xl text-stone-300">No student found</h1>
      </div>
    );
  }

  const handleSelect = async (id: string, key: number) => {
    setUpdate(false);
    setSelected(key);
    try {
      setIsLoading(true);
      const res = await axiosPrivate.get(`/student/${id}`);
      setSelectedStudent(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" w-full h-screen overflow-y-auto ">
      <Table className="w-max">
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
                className={`text-xs cursor-pointer hover:bg-yellow-500 ${
                  i === selected && "bg-yellow-500 text-white"
                }`}
                onClick={() => handleSelect(student.id, i)}
              >
                <TableCell className="">{student.student_number}</TableCell>
                <TableCell className="">{`${student.last_name}, ${student.first_name} ${student.middle_name}`}</TableCell>
                <TableCell className="">{student.type}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default StudentsTables;
