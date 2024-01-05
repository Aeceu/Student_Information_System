import SelectedStudentStore from "@/state/SelectedStudentStore";
import Barcode from "react-barcode";

const BarcodeGenerator = () => {
  const selectedStudent = SelectedStudentStore((state) => state.seletedStudent);
  if (!selectedStudent?.student_number) {
    return <h1 className="w-full text-center">There is no Student Number!</h1>;
  }
  return (
    <Barcode
      value={selectedStudent.student_number}
      width={1}
      height={20}
      fontSize={6}
      margin={0}
    />
  );
};
export default BarcodeGenerator;
