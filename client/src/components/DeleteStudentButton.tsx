import SelectedStudentStore from "@/state/SelectedStudentStore";
import { useState } from "react";
import DeleteModal from "./modals/DeleteModal";

type TDeleteStudentProps = {
  id: string;
};

const DeleteStudentButton = ({ id }: TDeleteStudentProps) => {
  const setUpdate = SelectedStudentStore((state) => state.setUpdate);
  const update = SelectedStudentStore((state) => state.update);
  const [show, setShow] = useState(false);

  return (
    <span className="flex items-center gap-2 text-sm">
      <button
        onClick={() => setUpdate(!update)}
        type="button"
        className="px-4 py-1 rounded-sm bg-green-500 text-white shadow-xl hover:scale-105 duration-200 transition-all"
      >
        update
      </button>
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
