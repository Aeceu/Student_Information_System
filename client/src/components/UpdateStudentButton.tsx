import SelectedStudentStore from "@/state/SelectedStudentStore";
import { TUpdateStudent } from "@/student.type";
import { useState } from "react";
import UpdateStudentModal from "./modals/UpdateStudentModal";

type TUpdateStudentButtonProps = {
  updateStudent: TUpdateStudent;
};

const UpdateStudentButton = ({ updateStudent }: TUpdateStudentButtonProps) => {
  const [show, setShow] = useState(false);
  const setUpdate = SelectedStudentStore((state) => state.setUpdate);
  const update = SelectedStudentStore((state) => state.update);

  return (
    <span className="flex items-center gap-2 text-sm">
      <button
        type="button"
        className="w-full py-1 flex items-center justify-center rounded-sm bg-green-500 text-white shadow-xl hover:scale-105 duration-200 transition-all "
        onClick={() => setShow(true)}
      >
        Submit
      </button>
      <button
        type="button"
        className="w-full py-1 flex items-center justify-center rounded-sm bg-red-500 text-white shadow-xl hover:scale-105 duration-200 transition-all"
        onClick={() => setUpdate(!update)}
      >
        Cancel
      </button>
      {show && (
        <UpdateStudentModal setShow={setShow} updateStudent={updateStudent} />
      )}
    </span>
  );
};
export default UpdateStudentButton;
