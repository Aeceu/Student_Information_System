import { SemesterGrades } from "@/student.type";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "../ui/table";
import SubjectUpdateDeleteButton from "../SubjectUpdateDeleteButton";

type TGradesTable = {
  sem: SemesterGrades;
  avg: () => number | null;
};

const GradesTable = ({ sem, avg }: TGradesTable) => {
  return (
    <Table className="min-w-[100%] w-max">
      <TableHeader className="">
        <TableRow className="text-xs">
          <TableHead className="bg-slate-950 text-white">Code</TableHead>
          <TableHead className="bg-slate-950 text-white">
            Subject Name
          </TableHead>
          <TableHead className="bg-slate-950 text-white">Units</TableHead>
          <TableHead className="bg-slate-950 text-white">Grades</TableHead>
          <TableHead className="bg-slate-950 text-white">Professor</TableHead>
          <TableHead className="bg-slate-950 text-white">Options</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sem &&
          sem.subjects_enrolled.map((subject, i) => (
            <TableRow key={i} className="">
              <TableCell className="text-[10px]">{subject.code}</TableCell>
              <TableCell className="text-[10px]">
                {subject.subject_name}
              </TableCell>
              <TableCell className="text-[10px]">{subject.units}</TableCell>
              <TableCell
                className={`text-[10px] font-bold ${
                  !subject.grade || (subject.grade > 3 && "text-red-500")
                }`}
              >
                {subject.grade ? subject.grade : "N/A"}
              </TableCell>
              <TableCell className="text-[10px]">
                {subject.professor ? subject.professor : "N/A"}
              </TableCell>
              <SubjectUpdateDeleteButton subjectEnrolled={subject} />
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5} className="font-bold">
            GWA
          </TableCell>
          <TableCell className="font-bold text-right">{avg()}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default GradesTable;
