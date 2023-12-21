import { axiosPrivate } from "@/api/axios";
import { TStudent } from "@/student.type";
import { useState, useEffect } from "react";
import SearchTab from "./SearchTab";
import StudentsTables from "./StudentsTables";

const DashboardSideBar = () => {
  const [students, setStudents] = useState<TStudent[] | null>(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        let res;
        if (!search) {
          res = await axiosPrivate.get("/students");
        } else {
          res = await axiosPrivate.post("/students", { search });
        }
        setStudents(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeout = setTimeout(fetchData, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="flex flex-col w-1/4 h-full border-r">
      <SearchTab search={search} setSearch={setSearch} />
      <StudentsTables students={students} loading={isLoading} />
    </div>
  );
};
export default DashboardSideBar;
