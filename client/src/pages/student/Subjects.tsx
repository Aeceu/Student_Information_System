import { axiosPrivate } from "@/api/axios";
import SubjectsTables from "@/components/SubjectsTables";
import AddNewSubjectModal from "@/components/modals/AddNewSubjectModal";
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
  const [showModal, setShowModal] = useState(false);
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
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1>No enrolled subjects</h1>
        <span className="w-full flex items-center justify-center gap-4 p-2">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="px-3 py-1.5 bg-bl0ue-500 bg-blue-500 text-white rounded-md text-xs shadow-xl hover:scale-105 duration-200 transition-all"
          >
            Add New Subject
          </button>
        </span>
        {showModal && <AddNewSubjectModal setShowModal={setShowModal} />}
      </div>
    );
  }

  return <SubjectsTables />;
};
export default Subjects;
