import { axiosPrivate } from "@/api/axios";
import SelectedStudentStore from "@/state/SelectedStudentStore";
import { TUpdateStudent } from "@/student.type";
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";

type TUpdateStudentButtonProps = {
  updateStudent: TUpdateStudent;
};

const UpdateStudentButton = ({ updateStudent }: TUpdateStudentButtonProps) => {
  const [loading, setLoading] = useState(false);
  const setUpdate = SelectedStudentStore((state) => state.setUpdate);
  const update = SelectedStudentStore((state) => state.update);
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
    }
  };
  return (
    <span className="flex items-center gap-2 text-sm">
      <button
        disabled={loading}
        type="button"
        className="w-full py-1 flex items-center justify-center rounded-sm bg-green-500 text-white shadow-xl "
        onClick={handleUpdate}
      >
        {loading ? (
          <LuLoader2 className="animate-spin " size="1.2rem" />
        ) : (
          "Submit"
        )}
      </button>
      <button
        type="button"
        className="w-full py-1 flex items-center justify-center rounded-sm bg-red-500 text-white shadow-xl"
        onClick={() => setUpdate(!update)}
      >
        Cancel
      </button>
    </span>
  );
};
export default UpdateStudentButton;
