import NoStudentSelected from "./NoStudentSelected";
import UpdatingInfo from "./UpdateingInfo";
import DefaultInfo from "./DefaultInfo";
import SelectedStudentStore from "@/state/SelectedStudentStore";
import { LuLoader2 } from "react-icons/lu";

const StudentProfileTab = () => {
  const seletedStudent = SelectedStudentStore((state) => state.seletedStudent);
  const isLoading = SelectedStudentStore((state) => state.isLoading);
  const update = SelectedStudentStore((state) => state.update);

  if (!seletedStudent) {
    return <NoStudentSelected />;
  }

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LuLoader2 size="2rem" className="animate-spin" />
      </div>
    );
  }

  if (update) {
    return <UpdatingInfo />;
  }

  return <DefaultInfo />;
};
export default StudentProfileTab;
