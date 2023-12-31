import { useState } from "react";
import DeleteModal from "./modals/DeleteModal";
import { Link } from "react-router-dom";

type TDeleteStudentProps = {
  id: string;
};

const DeleteStudentButton = ({ id }: TDeleteStudentProps) => {
  const [show, setShow] = useState(false);

  return (
    <span className="flex items-center gap-2 text-sm">
      <Link
        to="update"
        className="px-4 py-1 rounded-sm bg-green-500 text-white shadow-xl hover:scale-105 duration-200 transition-all"
      >
        update
      </Link>
      <button
        onClick={() => setShow(true)}
        type="button"
        className="px-4 py-1 flex items-center justify-center  rounded-sm bg-red-500 text-white shadow-xl hover:scale-105 duration-300 transition-all"
      >
        delete
      </button>
      {show && <DeleteModal id={id} setShow={setShow} />}
    </span>
  );
};
export default DeleteStudentButton;
