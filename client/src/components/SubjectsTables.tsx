import SelectedStudentStore from "@/state/SelectedStudentStore";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { useState } from "react";
import AddNewSubjectModal from "./modals/AddNewSubjectModal";
import SubjectUpdateDeleteButton from "./SubjectUpdateDeleteButton";
import SubjectsTablesHeaders from "./SubjectsTablesHeaders";

const SubjectsTables = () => {
  const subjectsEnrolled = SelectedStudentStore(
    (state) => state.subjectsEnrolled
  );
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <SubjectsTablesHeaders />
      <div className="w-full h-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="text-xs">
              <TableHead>Code</TableHead>
              <TableHead>Subject Name</TableHead>
              <TableHead>Units</TableHead>
              <TableHead>Grades</TableHead>
              <TableHead>Professor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjectsEnrolled &&
              subjectsEnrolled.map((subject, i) => (
                <TableRow key={i} className="">
                  <TableCell className="text-xs">{subject.code}</TableCell>
                  <TableCell className="text-xs">
                    {subject.subject_name}
                  </TableCell>
                  <TableCell className="text-xs">{subject.units}</TableCell>
                  <TableCell className="text-xs">
                    {subject.grade ? subject.grade : "N/A"}
                  </TableCell>
                  <TableCell className="text-xs">
                    {subject.professor ? subject.professor : "N/A"}
                  </TableCell>
                  <SubjectUpdateDeleteButton subjectEnrolled={subject} />
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <span className="w-full flex items-center justify-end p-2">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="px-3 py-1.5 bg-bl0ue-500 bg-blue-500 text-white rounded-md text-xs shadow-xl hover:scale-105 duration-200 transition-all"
        >
          Add New Subject
        </button>
      </span>
      {showModal && <AddNewSubjectModal setShowModal={setShowModal} />}
    </div>
  );
};
export default SubjectsTables;
