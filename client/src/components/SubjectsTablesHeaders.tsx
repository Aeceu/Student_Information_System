import SelectedStudentStore from "@/state/SelectedStudentStore";

type TSubjectsTablesHeaders = {
  year: string;
  sem: string;
};

const SubjectsTablesHeaders = ({ sem, year }: TSubjectsTablesHeaders) => {
  const selectedStudent = SelectedStudentStore((state) => state.seletedStudent);
  return (
    <div className="overflow-hidden rounded-t-sm w-full grid grid-cols-2 gap-2 py-2 px-4 text-xs bg-[url(/bodybg.jpg)] relative">
      <span className="flex items-center gap-2 text-[10px]">
        <h1 className="text-slate-950 font-bold ">Name:</h1>
        <p className="text-white font-bold">{`${selectedStudent?.last_name}, ${selectedStudent?.first_name} ${selectedStudent?.middle_name[0]}.`}</p>
      </span>

      <span className="flex items-center gap-2 text-[10px]">
        <h1 className="text-slate-950 font-bold ">Course:</h1>
        <p className="text-white font-bold">{selectedStudent?.school_course}</p>
      </span>
      <span className="flex items-center gap-2 text-[10px]">
        <h1 className="text-slate-950 font-bold ">Year:</h1>
        <p className="text-white font-bold">{year}</p>
      </span>
      <span className="flex items-center gap-2 text-[10px]">
        <h1 className="text-slate-950 font-bold ">Semester:</h1>
        <p className="text-white font-bold">{sem}</p>
      </span>
    </div>
  );
};
export default SubjectsTablesHeaders;
