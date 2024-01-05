import { YearGrades } from "@/student.type";

type THandleAvg = {
  index: number;
  yearGrades: YearGrades[];
};

export const handleAvg = ({ index, yearGrades }: THandleAvg) => {
  let avg = 0;
  const total_avg =
    yearGrades[0].semester_grades[index].subjects_enrolled.length;
  yearGrades[0].semester_grades[index].subjects_enrolled.map((sem) => {
    if (sem.grade) {
      avg += sem.grade;
    }
  });
  if (total_avg) {
    return Number((avg / total_avg).toFixed(2));
  } else {
    return null;
  }
};
