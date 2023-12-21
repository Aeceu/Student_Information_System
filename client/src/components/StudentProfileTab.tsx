import StudentStore from "@/state/StudentStore";
import NoStudentSelected from "./NoStudentSelected";
import { Dispatch, SetStateAction, useState } from "react";

const StudentProfileTab = () => {
  const student = StudentStore((state) => state.student);
  const [update, setUpdate] = useState(false);

  if (!student) {
    return <NoStudentSelected />;
  }

  if (update) {
    return <UpdatingInfo update={update} setUpdate={setUpdate} />;
  }

  return <DefaultInfo update={update} setUpdate={setUpdate} />;
};
export default StudentProfileTab;

type TDefaultInfoProps = {
  update: boolean;
  setUpdate: Dispatch<SetStateAction<boolean>>;
};

const DefaultInfo = ({ update, setUpdate }: TDefaultInfoProps) => {
  const student = StudentStore((state) => state.student);
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full p-4 flex items-center justify-between  gap-4">
        <div className="w-full h-full grid  grid-cols-3 gap-2">
          <span className="col-span-3 flex items-center justify-between ">
            <h1 className=" text-2xl  text-red-500 ">Student's Profile</h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Fullname:</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.first_name} {student?.middle_name} {student?.last_name}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Student Number:</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.student_number}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Student type:</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.type}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Age</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.age}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Birthdate:</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.birth_date}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Contact number:</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.contact_number}
            </h1>
          </span>
          <span className="col-span-3 flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Address:</p>
            <h1 className="text-clamp border-b border-red-300">{`${student?.address.Street_name} ${student?.address.baranggay} ${student?.address.city} ${student?.address.province} ${student?.address.region} ${student?.address.postal_code}`}</h1>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="/earist-logo.png"
            alt="img"
            className="w-[200px] object-cover border"
          />
          <span className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setUpdate(!update)}
              type="button"
              className="px-4 py-1 rounded-sm bg-green-500 text-white shadow-xl"
            >
              update
            </button>
            <button
              type="button"
              className="px-4 py-1 rounded-sm bg-red-500 text-white shadow-xl"
            >
              delete
            </button>
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-2 px-4">
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Email</p>
          <h1 className="text-clamp border-b border-red-300">
            {student?.email}
          </h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Year:</p>
          <h1 className="text-clamp border-b border-red-300">
            {student?.school_year}
          </h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Section</p>
          <h1 className="text-clamp border-b border-red-300">
            {student?.school_section}
          </h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">College</p>
          <h1 className="text-clamp border-b border-red-300">
            {student?.school_college}
          </h1>
        </span>
        <span className="col-span-2 flex flex-col justify-center gap-1">
          <p className=" text-xs text-red-500 font-bold">Course</p>
          <h1 className="text-clamp border-b border-red-300">
            {student?.school_course}
          </h1>
        </span>
      </div>
    </div>
  );
};

type TUpdatingProps = {
  update: boolean;
  setUpdate: Dispatch<SetStateAction<boolean>>;
};

const UpdatingInfo = ({ setUpdate, update }: TUpdatingProps) => {
  const student = StudentStore((state) => state.student);
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full p-4 flex items-center justify-between  gap-4">
        <div className="w-full h-full grid  grid-cols-3 gap-2">
          <span className="col-span-3 flex items-center justify-between ">
            <h1 className=" text-2xl  text-red-500 ">Student's Profile</h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Fullname:</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.first_name} {student?.middle_name} {student?.last_name}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Student Number:</p>
            <input
              type="text"
              placeholder="student number"
              value={student?.student_number}
              className="text-clamp border-b border-red-300"
            />
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Student type:</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.type}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Age</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.age}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Birthdate:</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.birth_date}
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Contact number:</p>
            <h1 className="text-clamp border-b border-red-300">
              {student?.contact_number}
            </h1>
          </span>
          <span className="col-span-3 flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Address:</p>
            <h1 className="text-clamp border-b border-red-300">{`${student?.address.Street_name} ${student?.address.baranggay} ${student?.address.city} ${student?.address.province} ${student?.address.region} ${student?.address.postal_code}`}</h1>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="/earist-logo.png"
            alt="img"
            className="w-[200px] object-cover border"
          />
          {update ? (
            <span className="flex items-center gap-2 text-sm">
              <button
                type="button"
                className="px-4 py-1 rounded-sm bg-green-500 text-white shadow-xl"
              >
                Submit
              </button>
              <button
                type="button"
                className="px-4 py-1 rounded-sm bg-red-500 text-white shadow-xl"
                onClick={() => setUpdate(!update)}
              >
                Cancel
              </button>
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm">
              <button
                onClick={() => setUpdate(!update)}
                type="button"
                className="px-4 py-1 rounded-sm bg-green-500 text-white shadow-xl"
              >
                update
              </button>
              <button
                type="button"
                className="px-4 py-1 rounded-sm bg-red-500 text-white shadow-xl"
              >
                delete
              </button>
            </span>
          )}
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-2 px-4">
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Email</p>
          <h1 className="text-clamp border-b border-red-300">
            {student?.email}
          </h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Year:</p>
          <h1 className="text-clamp border-b border-red-300">
            {student?.school_year}
          </h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Section</p>
          <h1 className="text-clamp border-b border-red-300">
            {student?.school_section}
          </h1>
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">College</p>
          <h1 className="text-clamp border-b border-red-300">
            {student?.school_college}
          </h1>
        </span>
        <span className="col-span-2 flex flex-col justify-center gap-1">
          <p className=" text-xs text-red-500 font-bold">Course</p>
          <h1 className="text-clamp border-b border-red-300">
            {student?.school_course}
          </h1>
        </span>
      </div>
    </div>
  );
};
