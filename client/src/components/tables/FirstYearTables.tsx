import NewStore from "@/state/NewStore";
import SemesterGradesTable from "./SemesterGradeTable";

const FirstYearTables = () => {
  const subjectsEnrolled = NewStore((state) => state.subjectsEnrolled);
  return (
    <div className="relative w-full overflow-x-hidden overflow-y-auto h-full flex flex-col  bg-[url(/bodybg.jpg)] bg-cover bg-center ">
      <img
        src="/uni.jpg"
        alt="uni"
        className="absolute opacity-10 bg-repeat-y"
      />
      {subjectsEnrolled?.FirstYearGrades[0].semester_grades.map((sem, i) => (
        <SemesterGradesTable
          i={i}
          sem={sem}
          year={subjectsEnrolled?.FirstYearGrades[0].year}
        />
      ))}
    </div>
  );
};
export default FirstYearTables;
