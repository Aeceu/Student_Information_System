import { axiosPrivate } from "@/api/axios";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

type TDeleteModalProps = {
  id: string;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const DeleteModal = ({ id, setShow }: TDeleteModalProps) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteStudent = async (id: string) => {
    console.log(id);

    try {
      setLoading(true);
      const res = await axiosPrivate.delete(`/admin/student/${id}`);
      console.log(res.data);
      toast.success(res.data);
      setShow(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setShow(false);
    }
  };
  return (
    <div className="z-[100] absolute top-0 left-0 w-full min-h-screen bg-black/70 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white px-4 py-4 flex flex-col items-center gap-4 rounded-lg border border-stone-500 shadow-xl"
      >
        <h1>Are you sure you want to delete the student from system?</h1>
        <div className="w-full h-[1px] border-b border-stone-300" />
        <span className="w-full flex items-center justify-end">
          <span className="flex items-center gap-2 text-sm">
            <button
              type="button"
              onClick={() => handleDeleteStudent(id)}
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
export default DeleteModal;
