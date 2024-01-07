import { TStudent } from "@/student.type";
import { useState, useEffect } from "react";
import SearchTab from "./SearchTab";
import StudentsTables from "./StudentsTables";
import NewStore from "@/state/NewStore";

const DashboardSideBar = () => {
  const [students, setStudents] = useState<TStudent[] | null>(null);
  const [search, setSearch] = useState("");

  const fetchStudentsWithoutSearch = NewStore(
    (state) => state.fetchStudentsWithoutSearch
  );
  const fetchStudentsWithSearch = NewStore(
    (state) => state.fetchStudentsWithSearch
  );
  const isLoading = NewStore((state) => state.isLoading);
  const setIsLoading = NewStore((state) => state.setIsLoading);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      if (!search) {
        const res = await fetchStudentsWithoutSearch();
        setStudents(res);
      } else {
        const res = await fetchStudentsWithSearch(search);
        setStudents(res);
      }

      setIsLoading(false);
    };

    const timeout = setTimeout(fetchData, 500);

    return () => clearTimeout(timeout);
  }, [
    fetchStudentsWithSearch,
    fetchStudentsWithoutSearch,
    search,
    setIsLoading,
  ]);

  return (
    <div className="flex flex-col w-1/4 h-full border-r">
      <SearchTab search={search} setSearch={setSearch} />
      <StudentsTables students={students} loading={isLoading} />
    </div>
  );
};
export default DashboardSideBar;
