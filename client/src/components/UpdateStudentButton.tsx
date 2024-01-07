import { TUpdateStudent } from "@/student.type";
import { useState } from "react";
import UpdateStudentModal from "./modals/UpdateStudentModal";
import { Link } from "react-router-dom";

type TUpdateStudentButtonProps = {
  updateStudent: TUpdateStudent;
  id: string;
};

const UpdateStudentButton = ({
  updateStudent,
  id,
}: TUpdateStudentButtonProps) => {
  const [show, setShow] = useState(false);

  return (
    <span className="flex items-center gap-2 text-sm">
      <button
        type="button"
        className="w-full py-1 flex items-center justify-center rounded-sm bg-green-500 text-white shadow-xl hover:scale-105 duration-200 transition-all "
        onClick={() => setShow(true)}
      >
        Submit
      </button>
      <Link
        to="/admin/dashboard"
        className="w-full py-1 flex items-center justify-center rounded-sm bg-red-500 text-white shadow-xl hover:scale-105 duration-200 transition-all"
      >
        Cancel
      </Link>
      {show && (
        <UpdateStudentModal
          setShow={setShow}
          updateStudent={updateStudent}
          id={id}
        />
      )}
    </span>
  );
};
export default UpdateStudentButton;
