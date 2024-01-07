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
          <TableHead className="text-black  border border-l">Code</TableHead>
          <TableHead className="text-black  border border-l">
            Subject Name
          </TableHead>
          <TableHead className="text-black  border border-l">Units</TableHead>
          <TableHead className="text-black  border border-l">Grades</TableHead>
          <TableHead className="text-black  border border-l">
            Professor
          </TableHead>
          <TableHead className="text-black  border border-l">Options</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sem &&
          sem.subjects_enrolled.map((subject, i) => (
            <TableRow key={i} className="">
              <TableCell className="text-[10px] text-black  border border-l">
                {subject.code}
              </TableCell>
              <TableCell className="text-[10px] text-black  border border-l">
                {subject.subject_name}
              </TableCell>
              <TableCell className="text-[10px] text-black  border border-l">
                {subject.units}
              </TableCell>
              <TableCell
                className={`text-[10px] font-bold ${
                  !subject.grade ||
                  (subject.grade > 3 ? "text-red-500" : "text-black ")
                }`}
              >
                {subject.grade ? subject.grade : "N/A"}
              </TableCell>
              <TableCell className="text-[10px] text-black  border border-l">
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
