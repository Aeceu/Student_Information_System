import { SemesterGrades } from "@/student.type";

type THandleAvg = {
  yearGrades: SemesterGrades;
};

export const handleAvg = ({ yearGrades }: THandleAvg) => {
  let avg = 0;
  const total_avg = yearGrades.subjects_enrolled.length;
  yearGrades.subjects_enrolled.map((sem) => {
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
