import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";
import NewStore from "@/state/NewStore";

const SubjectLayout = () => {
  const [loading, setLoading] = useState(false);
  const fetchSubjectsEnrolled = NewStore(
    (state) => state.fetchSubjectsEnrolled
  );

  const lol = useLocation();
  const params = lol.search.split("=")[1];

  useEffect(() => {
    try {
      setLoading(true);
      fetchSubjectsEnrolled(params);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LuLoader2 className="animate-spin" size="2rem" />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <YearNav />
      <Outlet />
    </div>
  );
};
export default SubjectLayout;

const YearNav = () => {
  const lol = useLocation();
  const params = lol.search.split("=")[1];
  return (
    <nav className="shadow-xl w-full flex items-center  gap-2 p-4 ">
      <h1 className="text-sm text-red-500 font-bold">View grades:</h1>
      <Link
        to={`first_year/?id=${params}`}
        className="px-5 py-2 bg-emerald-400 text-white shadow-xl text-sm rounded-md hover:scale-105 duration-200 transition-all"
      >
        First Year
      </Link>
      <Link
        to={`second_year/?id=${params}`}
        className="px-5 py-2 bg-blue-400 text-white shadow-xl text-sm rounded-md hover:scale-105 duration-200 transition-all"
      >
        Second Year
      </Link>
      <Link
        to={`third_year/?id=${params}`}
        className="px-5 py-2 bg-amber-400 text-white shadow-xl text-sm rounded-md hover:scale-105 duration-200 transition-all"
      >
        Third Year
      </Link>
      <Link
        to={`fourth_year/?id=${params}`}
        className="px-5 py-2 bg-fuchsia-400 text-white shadow-xl text-sm rounded-md hover:scale-105 duration-200 transition-all"
      >
        Fourth Year
      </Link>
    </nav>
  );
};
