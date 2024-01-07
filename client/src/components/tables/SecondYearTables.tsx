import NewStore from "@/state/NewStore";
import SemesterGradesTable from "./SemesterGradeTable";

const SecondYearTables = () => {
  const subjectsEnrolled = NewStore((state) => state.subjectsEnrolled);

  return (
    <div className="relative w-full overflow-x-hidden overflow-y-auto h-full flex flex-col  bg-[url(/bodybg.jpg)] bg-cover bg-center ">
      <img
        src="/uni.jpg"
        alt="uni"
        className="absolute opacity-10 bg-repeat-y"
      />
      {subjectsEnrolled?.SecondYearGrades[0].semester_grades.map((sem, i) => (
        <SemesterGradesTable
          i={i}
          sem={sem}
          year={subjectsEnrolled?.SecondYearGrades[0].year}
        />
      ))}
    </div>
  );
};
export default SecondYearTables;
