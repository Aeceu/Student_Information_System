import { useState } from "react";
import AddNewSubjectModal from "../modals/AddNewSubjectModal";
import SubjectsTablesHeaders from "../SubjectsTablesHeaders";
import GradesTable from "./GradeTable";
import { handleAvg } from "@/utils/HandleAvg";
import { SemesterGrades } from "@/student.type";

type TProps = {
  year: string;
  sem: SemesterGrades;
  i: number;
};

const SemesterGradesTable = ({ i, sem, year }: TProps) => {
  const [semID, setSemID] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div key={i} className=" w-full flex flex-col">
      <SubjectsTablesHeaders
        sem={`${sem.semester} SEMESTER`}
        year={`${year}`}
      />
      <GradesTable
        sem={sem}
        avg={() =>
          handleAvg({
            yearGrades: sem,
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
          className="z-10 px-3 py-1.5  bg-blue-500 text-white rounded-md text-xs shadow-xl hover:scale-105 duration-200 transition-all"
        >
          Add New Subject
        </button>
      </span>
      {showModal && (
        <AddNewSubjectModal setShowModal={setShowModal} semID={semID} />
      )}
    </div>
  );
};

export default SemesterGradesTable;
