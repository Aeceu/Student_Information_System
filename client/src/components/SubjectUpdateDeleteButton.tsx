import { useState } from "react";
import { TableCell } from "./ui/table";
import { TUpdateSubjectEnrolled } from "@/student.type";
import UpdateSubjectModal from "./modals/UpdateSubjectModal";
import DeleteSubjectModal from "./modals/DeleteSubjectModal";

type TSubjectUpdateDeleteButton = {
  subjectEnrolled: TUpdateSubjectEnrolled;
};

const SubjectUpdateDeleteButton = ({
  subjectEnrolled,
}: TSubjectUpdateDeleteButton) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <TableCell className="flex items-center  gap-2">
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="text-xs px-2 py-1 rounded-sm bg-emerald-500 shadow-xl text-white hover:scale-105 duration-200 transition-all"
      >
        Update
      </button>
      <button
        type="button"
        onClick={() => setShowDeleteModal(true)}
        className="text-xs px-2 py-1 rounded-sm bg-red-500 shadow-xl text-white hover:scale-105 duration-200 transition-all"
      >
        Delete
      </button>
      {showModal && (
        <UpdateSubjectModal
          setShowModal={setShowModal}
          subjectEnrolled={subjectEnrolled}
        />
      )}
      {showDeleteModal && (
        <DeleteSubjectModal
          setShowDeleteModal={setShowDeleteModal}
          subjectID={subjectEnrolled.id}
        />
      )}
    </TableCell>
  );
};
export default SubjectUpdateDeleteButton;
