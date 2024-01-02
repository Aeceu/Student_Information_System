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
import AddNewStudentModal from "./modals/AddNewStudentModal";
import { useNavigate } from "react-router-dom";

type TStudentTables = {
  students: TStudent[] | null;
  loading: boolean;
};

const StudentsTables = ({ students, loading }: TStudentTables) => {
  const setSelectedStudent = SelectedStudentStore(
    (state) => state.setSeletedStudent
  );
  const navigate = useNavigate();
  const setUpdate = SelectedStudentStore((state) => state.setUpdate);
  const setIsLoading = SelectedStudentStore((state) => state.setIsLoading);
  const [selected, setSelected] = useState<number | undefined>();
  const [addNewStudent, setAddNewStudent] = useState(false);
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
    setUpdate(false);
    setSelected(key);
    try {
      setIsLoading(true);
      const res = await axiosPrivate.get(`/student/${id}`);
      setSelectedStudent(res.data);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setSelectedStudent(null);
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
                onClick={() => handleSelect(student.id, i)}
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
          onClick={handleClear}
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
