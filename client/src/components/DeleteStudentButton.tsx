import { axiosPrivate } from "@/api/axios";
import SelectedStudentStore from "@/state/SelectedStudentStore";
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";

type TDeleteStudentProps = {
  id: string;
};

const DeleteStudentButton = ({ id }: TDeleteStudentProps) => {
  const setUpdate = SelectedStudentStore((state) => state.setUpdate);
  const update = SelectedStudentStore((state) => state.update);
  const [loading, setLoading] = useState(false);
  const handleDeleteStudent = async (id: string) => {
    console.log(id);

    try {
      setLoading(true);
      const res = await axiosPrivate.delete(`/admin/student/${id}`);
      console.log(res.data);

      alert(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <span className="flex items-center gap-2 text-sm">
      <button
        onClick={() => setUpdate(!update)}
        type="button"
        className="px-4 py-1 rounded-sm bg-green-500 text-white shadow-xl"
      >
        update
      </button>
      <button
        onClick={() => handleDeleteStudent(id)}
        type="button"
        className="w-full flex items-center justify-center py-1 rounded-sm bg-red-500 text-white shadow-xl hover:scale-105 duration-300 transition-all"
      >
        {loading ? (
          <LuLoader2 className="animate-spin " size="1.2rem" />
        ) : (
          "Delete"
        )}
      </button>
    </span>
  );
};
export default DeleteStudentButton;
