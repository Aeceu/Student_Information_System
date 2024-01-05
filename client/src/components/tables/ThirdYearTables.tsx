import SelectedStudentStore from "@/state/SelectedStudentStore";
import { useState } from "react";
import AddNewSubjectModal from "../modals/AddNewSubjectModal";
import SubjectsTablesHeaders from "../SubjectsTablesHeaders";
import { handleAvg } from "@/utils/HandleAvg";
import GradesTable from "./GradeTable";

const ThirdYearTables = () => {
  const [semID, setSemID] = useState("");
  const [showModal, setShowModal] = useState(false);
  const subjectsEnrolled = SelectedStudentStore(
    (state) => state.subjectsEnrolled
  );

  return (
    <div className="w-full overflow-y-auto h-full flex flex-col gap-4 p-4">
      {subjectsEnrolled?.ThirdYearGrades[0].semester_grades.map((sem, i) => (
        <div
          key={i}
          className="w-full flex flex-col border border-black rounded-md"
        >
          <SubjectsTablesHeaders
            sem={`${sem.semester} SEMESTER`}
            year={"THIRD YEAR"}
          />
          <GradesTable
            sem={sem}
            avg={() =>
              handleAvg({
                index: i,
                yearGrades: subjectsEnrolled?.ThirdYearGrades,
              })
            }
          />
          <span className="p-2 w-full flex ">
            <button
              type="button"
              onClick={() => {
                setShowModal(true);
                setSemID(sem.id);
              }}
              className="px-3 py-1.5  bg-blue-500 text-white rounded-md text-xs shadow-xl hover:scale-105 duration-200 transition-all"
            >
              Add New Subject
            </button>
          </span>
        </div>
      ))}
      {showModal && (
        <AddNewSubjectModal setShowModal={setShowModal} semID={semID} />
      )}
    </div>
  );
};
export default ThirdYearTables;
