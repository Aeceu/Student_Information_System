import { axiosPrivate } from "@/api/axios";
import { useEffect, useState } from "react";

const AdminStudentCounts = () => {
  const [students, setStudents] = useState(0);
  const [admins, setAdmins] = useState(0);
  const [professors, setProfessors] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await axiosPrivate.get("/usercount");
        setStudents(res.data.students_count);
        setAdmins(res.data.admins_count);
        setProfessors(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCounts();
  }, []);

  return (
    <div className="grid grid-cols-3 p-2 w-full h-full  shadow-2xl rounded-md bg-white border border-red-50">
      <div className="col-span-3 px-2 w-full grid  gap-2 grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg shadow-2xl p-4 bg-red-400 text-white ">
          <h1>List of Students registered: {students}</h1>
          <button
            type="button"
            className="rounded-md px-2 py-1.5 bg-amber-400 text-white shadow-xl text-sm hover:scale-110 duration-200 transition-all cursor-pointer"
          >
            View Student Lists
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg shadow-2xl p-4 bg-green-400 text-white ">
          <h1>List of Admins registered: {admins}</h1>
          <button
            type="button"
            className="rounded-md px-2 py-1.5 bg-amber-400 text-white shadow-xl text-sm hover:scale-110 duration-200 transition-all cursor-pointer"
          >
            View Admin Lists
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg shadow-2xl p-4 bg-blue-400 text-white ">
          <h1>List of Professors registered: {professors}</h1>
          <button
            type="button"
            className="rounded-md px-2 py-1.5 bg-amber-400 text-white shadow-xl text-sm hover:scale-110 duration-200 transition-all cursor-pointer"
          >
            View Professor Lists
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminStudentCounts;
