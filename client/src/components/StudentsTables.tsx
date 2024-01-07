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
import AddNewStudentModal from "./modals/AddNewStudentModal";
import { useNavigate } from "react-router-dom";
import NewStore from "@/state/NewStore";

type TStudentTables = {
  students: TStudent[] | null;
  loading: boolean;
};

const StudentsTables = ({ students, loading }: TStudentTables) => {
  const clearSelectedStudent = NewStore((state) => state.clearSelectedStudent);
  const navigate = useNavigate();
  const setIsLoading = NewStore((state) => state.setIsLoading);
  const [selected, setSelected] = useState<number | undefined>();
  const [addNewStudent, setAddNewStudent] = useState(false);
  const fetchSelectedStudent = NewStore((state) => state.fetchSelectedStudent);

  if (loading) {
    return (
      <div className="w-full flex justify-center p-4">
        <LuLoader2 className="animate-spin" />
      </div>
    );
  }

  if (students?.length === 0) {
    return (
      <div className="w-full h-full flex flex-col gap-4 items-center justify-between p-4">
        <span className="w-full h-full flex flex-col items-center justify-center">
          <LuUserX2 size="10rem" className="text-stone-300" />
          <h1 className="uppercase text-2xl text-stone-300">
            Student number found
          </h1>
        </span>
        <span className="w-full flex items-center justify-end p-2">
          <button
            type="button"
            onClick={() => setAddNewStudent(true)}
            className="px-3 py-1.5 bg-emerald-500 text-white rounded-md text-xs shadow-xl hover:scale-105 duration-200 transition-all"
          >
            Add New Student
          </button>
        </span>
        {addNewStudent && <AddNewStudentModal setShow={setAddNewStudent} />}
      </div>
    );
  }

  const handleSelect = async (id: string, key: number) => {
    setSelected(key);
    try {
      setIsLoading(true);
      fetchSelectedStudent(id);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" w-full h-screen overflow-y-auto  flex flex-col justify-between">
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
                onClick={() => {
                  handleSelect(student.id, i);
                }}
              >
                <TableCell className="">{student.student_number}</TableCell>
                <TableCell className="">{`${student.last_name}, ${student.first_name} ${student.middle_name}`}</TableCell>
                <TableCell className="">{student.type}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <span className="w-full flex items-center justify-end p-4 gap-2">
        <button
          type="button"
          onClick={() => setAddNewStudent(true)}
          className="px-4 py-2 bg-emerald-500 text-white rounded-md text-xs shadow-xl hover:scale-105 duration-200 transition-all"
        >
          Add New Student
        </button>
        <button
          type="button"
          onClick={clearSelectedStudent}
          className="px-4 py-2 bg-red-500 text-white rounded-md text-xs shadow-xl hover:scale-105 duration-200 transition-all"
        >
          Clear Entries
        </button>
      </span>
      {addNewStudent && <AddNewStudentModal setShow={setAddNewStudent} />}
    </div>
  );
};
export default StudentsTables;
