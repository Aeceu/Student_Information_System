import { axiosPrivate } from "@/api/axios";
import SubjectsTables from "@/components/SubjectsTables";
import SelectedStudentStore from "@/state/SelectedStudentStore";
import { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";
import { useLocation } from "react-router-dom";

const Subjects = () => {
  const lol = useLocation();
  const [loading, setLoading] = useState(false);
  const setSubjectEnrolled = SelectedStudentStore(
    (state) => state.setSubjectEnrolled
  );
  const subjectsEnrolled = SelectedStudentStore(
    (state) => state.subjectsEnrolled
  );
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const params = lol.search.split("=")[1];
        const res = await axiosPrivate.get(`/student/subjects/${params}`);
        setSubjectEnrolled(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LuLoader2 className="animate-spin" size="2rem" />
      </div>
    );
  }

  if (subjectsEnrolled?.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h1>No enrolled subjects</h1>
      </div>
    );
  }

  return <SubjectsTables />;
};
export default Subjects;
