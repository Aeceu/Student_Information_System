import { axiosPrivate } from "@/api/axios";
import SelectedStudentStore from "@/state/SelectedStudentStore";
import { TUpdateStudent } from "@/student.type";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { LuLoader2 } from "react-icons/lu";

type TUpdateStudentModalProps = {
  updateStudent: TUpdateStudent;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const UpdateStudentModal = ({
  updateStudent,
  setShow,
}: TUpdateStudentModalProps) => {
  const [loading, setLoading] = useState(false);
  const setUpdate = SelectedStudentStore((state) => state.setUpdate);
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const res = await axiosPrivate.patch("/admin/updateStudent", {
        data: updateStudent,
      });
      alert(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setShow(false);
      setUpdate(false);
    }
  };
  return (
    <div className="z-50 absolute top-0 left-0 w-full min-h-screen bg-black/70 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white px-4 py-4 flex flex-col items-center gap-4 rounded-lg border border-stone-500 shadow-xl"
      >
        <h1>Are you sure you want to update the student's information?</h1>
        <div className="w-full h-[1px] border-b border-stone-300" />
        <span className="w-full flex items-center justify-end">
          <span className="flex items-center gap-2 text-sm">
            <button
              type="button"
              onClick={handleUpdate}
              className="px-4 py-1 rounded-sm bg-green-500 text-white shadow-xl hover:scale-105 duration-200 transition-all"
            >
              {loading ? (
                <LuLoader2 className="animate-spin " size="1.2rem" />
              ) : (
                "Yes"
              )}
            </button>
            <button
              onClick={() => setShow(false)}
              type="button"
              className="px-4 py-1 flex items-center justify-center rounded-sm bg-red-500 text-white shadow-xl hover:scale-105 duration-200 transition-all"
            >
              no
            </button>
          </span>
        </span>
      </motion.div>
    </div>
  );
};
export default UpdateStudentModal;
