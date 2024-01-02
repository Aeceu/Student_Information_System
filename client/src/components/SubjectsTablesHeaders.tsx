import SelectedStudentStore from "@/state/SelectedStudentStore";

const SubjectsTablesHeaders = () => {
  const selectedStudent = SelectedStudentStore((state) => state.seletedStudent);
  return (
    <div className="w-full grid grid-cols-2 gap-2 p-4 text-xs ">
      <span className="flex items-center gap-2">
        <h1 className="text-red-500 font-bold ">Name:</h1>
        <p>{`${selectedStudent?.last_name}, ${selectedStudent?.first_name} ${selectedStudent?.middle_name}`}</p>
      </span>
      <span className="flex items-center gap-2">
        <h1 className="text-red-500 font-bold ">Department:</h1>
        <p>{selectedStudent?.school_college}</p>
      </span>
      <span className="flex items-center gap-2">
        <h1 className="text-red-500 font-bold ">Year:</h1>
        <p>{selectedStudent?.school_year}</p>
      </span>
      <span className="flex items-center gap-2">
        <h1 className="text-red-500 font-bold ">Course:</h1>
        <p>{selectedStudent?.school_course}</p>
      </span>
    </div>
  );
};
export default SubjectsTablesHeaders;
