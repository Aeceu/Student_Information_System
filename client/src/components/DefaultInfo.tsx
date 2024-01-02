import SelectedStudentStore from "@/state/SelectedStudentStore";
import DeleteStudentButton from "./DeleteStudentButton";
import { Link } from "react-router-dom";

const DefaultInfo = () => {
  const seletedStudent = SelectedStudentStore((state) => state.seletedStudent);
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="w-full p-4 flex items-center justify-between  gap-4">
        <div className="w-full h-full grid  grid-cols-3 gap-2">
          <span className="col-span-3 flex items-center justify-between ">
            <h1 className=" text-2xl  text-red-500 ">Student's Profile</h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Firstname:</p>
            <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
              {seletedStudent?.first_name}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Middlename:</p>
            <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
              {seletedStudent?.middle_name
                ? seletedStudent?.middle_name
                : "N/A"}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Lastname:</p>
            <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
              {seletedStudent?.last_name}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Student Number:</p>
            <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
              {seletedStudent?.student_number}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Student type:</p>
            <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
              {seletedStudent?.type}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Age</p>
            <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
              {seletedStudent?.age}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Gender:</p>
            <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
              {seletedStudent?.gender}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Religion:</p>
            <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
              {seletedStudent?.religion}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Birthdate:</p>
            <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
              {seletedStudent?.birth_date}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Contact number:</p>
            <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
              {seletedStudent?.contact_number}
            </h1>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="/earist-logo.png"
            alt="img"
            className="w-[200px] object-cover border"
          />
          {seletedStudent && <DeleteStudentButton id={seletedStudent.id} />}
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-3 gap-2 px-4">
        <span className="col-span-3 flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Address:</p>
          <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">{`${seletedStudent?.address.Street_name} ${seletedStudent?.address.baranggay} ${seletedStudent?.address.city} ${seletedStudent?.address.province} ${seletedStudent?.address.region} ${seletedStudent?.address.postal_code}`}</h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Email</p>
          <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
            {seletedStudent?.email}
          </h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Year:</p>
          <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
            {seletedStudent?.school_year}
          </h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Section</p>
          <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
            {seletedStudent?.school_section}
          </h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">College</p>
          <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
            {seletedStudent?.school_college}
          </h1>
        </span>
        <span className="col-span-2 flex flex-col justify-center gap-1">
          <p className=" text-xs text-red-500 font-bold">Course</p>
          <h1 className="px-3 py-1.5 text-clamp border-b border-red-300">
            {seletedStudent?.school_course}
          </h1>
        </span>
      </div>
      <div className="flex items-center gap-4 p-4 w-full">
        <Link
          to={`student/subjects/?id=${seletedStudent?.id}`}
          className="px-4 py-2 bg-blue-500 text-white text-xs rounded-md shadow-xl hover:scale-105 duration-200 transition-all"
        >
          View Subjects
        </Link>
        <Link
          to={`student/grades/${123}`}
          className="px-4 py-2 bg-emerald-500 text-white text-xs rounded-md shadow-xl hover:scale-105 duration-200 transition-all"
        >
          View Grades
        </Link>
      </div>
    </div>
  );
};

export default DefaultInfo;
