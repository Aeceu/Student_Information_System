import StudentStore from "@/state/StudentStore";

export const StudentProfileTab = () => {
  const student = StudentStore((state) => state.student);

  if (!student) {
    return (
      <div>
        <h1>
          <LuUser size="10rem" />
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-[200px] flex items-center justify-between border-b">
        <div className="w-full h-full grid  grid-cols-3 gap-4 p-4">
          <h1 className="col-span-3 text-2xl font-bold text-red-500 ">
            Student's Profile
          </h1>
          <span className="flex items-center gap-1">
            <p className="text-clamp rounded-full px-4 py-1 bg-red-500 text-white">
              Fullname:
            </p>
            <h1 className="text-red-500 text-clamp font-bold ">
              {student?.first_name} {student?.middle_name} {student?.last_name}
            </h1>
          </span>
          <span className="flex items-center gap-1">
            <p className="text-clamp rounded-full px-4 py-1 bg-red-500 text-white">
              Student Number:
            </p>
            <h1 className="text-red-500 text-clamp font-bold ">
              {student?.student_number}
            </h1>
          </span>
          <span className="flex items-center gap-1">
            <p className="text-clamp rounded-full px-4 py-1 bg-red-500 text-white">
              Student type:
            </p>
            <h1 className="text-red-500 text-clamp font-bold ">
              {student?.type}
            </h1>
          </span>
          <span className="flex items-center gap-1">
            <p className="text-clamp rounded-full px-4 py-1 bg-red-500 text-white">
              Age
            </p>
            <h1 className="text-red-500 text-clamp font-bold ">
              {student?.age}
            </h1>
          </span>
          <span className="flex items-center gap-1">
            <p className="text-clamp rounded-full px-4 py-1 bg-red-500 text-white">
              Birthdate:
            </p>
            <h1 className="text-red-500 text-clamp font-bold ">
              {student?.birth_date}
            </h1>
          </span>
          <span className="flex items-center gap-1">
            <p className="text-clamp rounded-full px-4 py-1 bg-red-500 text-white">
              Contact number:
            </p>
            <h1 className="text-red-500 text-clamp font-bold ">
              {student?.contact_number}
            </h1>
          </span>
          <span className="col-span-3 flex items-center gap-1">
            <p className="text-clamp rounded-full px-4 py-1 bg-red-500 text-white">
              Address:
            </p>
            <h1 className="text-red-500 text-clamp font-bold ">{`${student?.address.Street_name} ${student?.address.baranggay} ${student?.address.city} ${student?.address.province} ${student?.address.region} ${student?.address.postal_code}`}</h1>
          </span>
        </div>
        <img
          src="/earist-logo.png"
          alt="img"
          className="w-[200px] h-[200px] object-cover border"
        />
      </div>
      <div className="w-full grid grid-cols-3 gap-4 p-4">
        <span className="flex items-center gap-1">
          <p className="text-clamp px-4 py-1 rounded-full bg-red-500 text-white">
            Email
          </p>
          <h1 className="text-red-500 font-bold text-clamp">
            {student?.email}
          </h1>
        </span>
        <span className="flex items-center gap-1">
          <p className="text-clamp px-4 py-1 rounded-full bg-red-500 text-white">
            Year:
          </p>
          <h1 className="text-red-500 font-bold text-clamp">
            {student?.school_year}
          </h1>
        </span>
        <span className="flex items-center gap-1">
          <p className="text-clamp px-4 py-1 rounded-full bg-red-500 text-white">
            Section
          </p>
          <h1 className="text-red-500 font-bold text-clamp">
            {student?.school_section}
          </h1>
        </span>
        <span className="flex items-center gap-1">
          <p className="text-clamp px-4 py-1 rounded-full bg-red-500 text-white">
            College
          </p>
          <h1 className="text-red-500 font-bold text-clamp">
            {student?.school_college}
          </h1>
        </span>
        <span className="flex items-center gap-1">
          <p className="text-clamp px-4 py-1 rounded-full bg-red-500 text-white">
            Course
          </p>
          <h1 className="text-red-500 font-bold text-clamp">
            {student?.school_course}
          </h1>
        </span>
      </div>
    </div>
  );
};
