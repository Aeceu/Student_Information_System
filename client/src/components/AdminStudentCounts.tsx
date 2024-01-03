import { axiosPrivate } from "@/api/axios";
import { useEffect, useState } from "react";

const AdminStudentCounts = () => {
  const [students, setStudents] = useState(0);
  const [admins, setAdmins] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await axiosPrivate.get("/usercount");
        setStudents(res.data.students_count);
        setAdmins(res.data.admins_count);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCounts();
  }, []);

  return (
    <div className="col-span-2 w-full shadow-2xl rounded-md bg-white border border-red-50">
      <h1>Number of Students registered: {students}</h1>
      <h1>Number of Admin registered: {admins}</h1>
    </div>
  );
};
export default AdminStudentCounts;
