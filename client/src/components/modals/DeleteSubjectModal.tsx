import { axiosPrivate } from "@/api/axios";
import NewStore from "@/state/NewStore";
import { motion } from "framer-motion";
import { SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import { useLocation } from "react-router-dom";

type TDeleteSubjectModal = {
  subjectID: string | undefined;
  setShowDeleteModal: React.Dispatch<SetStateAction<boolean>>;
};

const DeleteSubjectModal = ({
  setShowDeleteModal,
  subjectID,
}: TDeleteSubjectModal) => {
  const [loading, setLoading] = useState(false);

  const fetchSubjectsEnrolled = NewStore(
    (state) => state.fetchSubjectsEnrolled
  );
  const lol = useLocation();
  const params = lol.search.split("=")[1];

  const handleDelete = async () => {
    try {
      setLoading(true);
      const res = await axiosPrivate.delete(`/student/subjects/${subjectID}`);
      toast.success(res.data);
      setLoading(false);
      fetchSubjectsEnrolled(params);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="z-50 fixed top-0 left-0 w-full min-h-screen bg-black/70 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white px-4 py-4 flex flex-col items-center gap-4 rounded-lg border border-stone-500 shadow-xl"
      >
        <h1>Are you sure you want to delete the subject from student?</h1>
        <div className="w-full h-[1px] border-b border-stone-300" />
        <span className="w-full flex items-center justify-end">
          <span className="flex items-center gap-2 text-sm">
            <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-1 rounded-sm bg-green-500 text-white shadow-xl hover:scale-105 duration-200 transition-all"
            >
              {loading ? (
                <LuLoader2 className="animate-spin " size="1.2rem" />
              ) : (
                "Yes"
              )}
            </button>
            <button
              onClick={() => setShowDeleteModal(false)}
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
export default DeleteSubjectModal;
