import { axiosPrivate } from "@/api/axios";
import SelectedStudentStore from "@/state/SelectedStudentStore";
import { motion } from "framer-motion";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

type TAddNewSubjectModal = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const AddNewSubjectModal = ({ setShowModal }: TAddNewSubjectModal) => {
  const selectedStudent = SelectedStudentStore((state) => state.seletedStudent);
  const [subject, setSubject] = useState({
    code: "",
    subject_name: "",
    units: 0,
    professor: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axiosPrivate.post(
        `/student/subjects/${selectedStudent?.id}`,
        { data: subject }
      );
      toast.success(res.data);
      setLoading(false);
      setSubject({
        code: "",
        subject_name: "",
        units: 0,
        professor: "",
      });
      setShowModal(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSubject({
        code: "",
        subject_name: "",
        units: 0,
        professor: "",
      });
      setShowModal(false);
    }
  };

  return (
    <div className="z-50 absolute top-0 left-0 w-full min-h-screen bg-black/70 flex items-center justify-center p-8">
      <motion.form
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3 } }}
        id="student_form"
        onSubmit={handleSubmit}
        className="w-[400px]  p-2 z-10 bg-white rounded-sm shadow-xl border-2 border-red-500 flex flex-col items-center gap-4 "
      >
        <div className="w-full flex items-center justify-between gap-2">
          <p className="w-max text-xl text-red-500 font-bold">Subject</p>
          <div className="w-full h-[1px] border-b border-amber-500" />
        </div>
        <div className="w-full flex items-center justify-center gap-2">
          <span className="w-full flex flex-col items-center justify-center">
            <p className="w-full text-xs text-stone-500">Code</p>
            <input
              type="text"
              value={subject.code}
              onChange={(e) => setSubject({ ...subject, code: e.target.value })}
              className="outline-none px-2 py-1 w-full border-b border-red-500 text-xs"
            />
          </span>
          <span className="w-full flex flex-col items-center justify-center">
            <p className="w-full text-xs text-stone-500">Units</p>
            <input
              type="text"
              value={subject.units}
              onChange={(e) =>
                setSubject({ ...subject, units: Number(e.target.value) })
              }
              className="outline-none px-2 py-1 w-full border-b border-red-500 text-xs"
            />
          </span>
        </div>
        <span className="w-full flex flex-col items-center justify-center">
          <p className="w-full text-xs text-stone-500">Subject name</p>
          <input
            type="text"
            value={subject.subject_name}
            onChange={(e) =>
              setSubject({ ...subject, subject_name: e.target.value })
            }
            className="outline-none px-2 py-1 w-full border-b border-red-500 text-xs"
          />
        </span>
        <span className="w-full flex flex-col items-center justify-center">
          <p className="w-full text-xs text-stone-500">Professor</p>
          <input
            type="text"
            value={subject.professor}
            onChange={(e) =>
              setSubject({ ...subject, professor: e.target.value })
            }
            className="outline-none px-2 py-1 w-full border-b border-red-500 text-xs"
          />
        </span>
        <span className="w-full flex items-center justify-end gap-2">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-1 rounded-sm shadow-xl text-sm bg-green-500 text-white hover:scale-105 duration-200 transition-all"
          >
            {loading ? (
              <LuLoader2 size="1.2rem" className="animate-spin" />
            ) : (
              "Submit"
            )}
          </button>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="px-4 py-1 rounded-sm shadow-xl text-sm bg-red-500 text-white hover:scale-105 duration-200 transition-all"
          >
            Cancel
          </button>
        </span>
      </motion.form>
    </div>
  );
};
export default AddNewSubjectModal;
