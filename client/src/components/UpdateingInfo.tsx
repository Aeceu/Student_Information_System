import SelectedStudentStore from "@/state/SelectedStudentStore";
import { ChangeEvent, useEffect, useState } from "react";
import UpdateStudentButton from "./UpdateStudentButton";

const UpdatingInfo = () => {
  const student = SelectedStudentStore((state) => state.seletedStudent);
  const [updateStudent, setUpdateStudent] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    age: 0,
    birth_date: "",
    address: {
      baranggay: "",
      city: "",
      postal_code: "",
      province: "",
      region: "",
      Street_name: "",
    },
    contact_number: "",
    email: "",
    role: "",
    type: "",
    student_number: "",
    school_college: "",
    school_course: "",
    school_section: "",
    school_year: "",
  });

  useEffect(() => {
    if (student)
      setUpdateStudent({
        student_number: student.student_number,
        first_name: student?.first_name,
        middle_name: student?.middle_name,
        last_name: student?.last_name,
        age: student.age,
        birth_date: student.birth_date,
        address: {
          Street_name: student.address.Street_name,
          baranggay: student.address.baranggay,
          city: student.address.city,
          province: student.address.province,
          region: student.address.region,
          postal_code: student.address.postal_code,
        },
        contact_number: student.contact_number,
        email: student.email,
        role: student.role,
        type: student.type,
        school_college: student.school_college,
        school_course: student.school_course,
        school_section: student.school_section,
        school_year: student.school_year,
      });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateStudent({ ...updateStudent, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full p-4 flex items-center justify-between  gap-4">
        <div className="w-full h-full grid  grid-cols-3 gap-2">
          <span className="col-span-3 flex items-center justify-between ">
            <h1 className=" text-2xl  text-red-500 ">Student's Profile</h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Firstname:</p>
            <input
              type="text"
              placeholder="firstname"
              id="first_name"
              onChange={(e) => handleChange(e)}
              value={updateStudent.first_name}
              className="  outline-none text-clamp border-b border-red-300"
            />
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Middlename:</p>
            <input
              type="text"
              placeholder="middle name"
              id="middle_name"
              onChange={(e) => handleChange(e)}
              value={
                updateStudent.middle_name ? updateStudent.middle_name : "N/A"
              }
              className="  outline-none text-clamp border-b border-red-300"
            />
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Lastname:</p>
            <input
              type="text"
              placeholder="last name"
              id="last_name"
              onChange={(e) => handleChange(e)}
              value={updateStudent.last_name}
              className="  outline-none text-clamp border-b border-red-300"
            />
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Student Number:</p>
            <input
              type="text"
              placeholder="student number"
              id="student_number"
              onChange={(e) => handleChange(e)}
              value={updateStudent.student_number}
              className="  outline-none text-clamp border-b border-red-300"
            />
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Student type:</p>
            <input
              type="text"
              placeholder="type of student"
              id="type"
              onChange={(e) => handleChange(e)}
              value={updateStudent.type}
              className="  outline-none text-clamp border-b border-red-300"
            />
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Age</p>
            <input
              type="text"
              placeholder="age"
              id="age"
              onChange={(e) => handleChange(e)}
              value={updateStudent.age}
              className="  outline-none text-clamp border-b border-red-300"
            />
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Birthdate:</p>
            <input
              type="date"
              placeholder="birthdate"
              id="birth_date"
              onChange={(e) => handleChange(e)}
              value={updateStudent.birth_date}
              className="  outline-none text-clamp border-b border-red-300"
            />
          </span>
          <span className="col-span-2 flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Contact number:</p>
            <input
              type="text"
              placeholder="contact number"
              id="contact_number"
              onChange={(e) => handleChange(e)}
              value={updateStudent.contact_number}
              className="  outline-none text-clamp border-b border-red-300"
            />
          </span>
          <span className="col-span-3 w-full grid grid-cols-3  gap-2">
            <p className="text-xs text-red-500 font-bold col-span-3">
              Address:
            </p>
            <input
              type="text"
              placeholder="street/block/lot/village"
              onChange={(e) =>
                setUpdateStudent({
                  ...updateStudent,
                  address: {
                    ...updateStudent.address,
                    Street_name: e.target.value,
                  },
                })
              }
              value={updateStudent.address.Street_name}
              className="  outline-none text-clamp border-b border-red-300"
            />
            <input
              type="text"
              placeholder="baranggay"
              onChange={(e) =>
                setUpdateStudent({
                  ...updateStudent,
                  address: {
                    ...updateStudent.address,
                    baranggay: e.target.value,
                  },
                })
              }
              value={updateStudent.address.baranggay}
              className="  outline-none text-clamp border-b border-red-300"
            />
            <input
              type="text"
              placeholder="city"
              onChange={(e) =>
                setUpdateStudent({
                  ...updateStudent,
                  address: {
                    ...updateStudent.address,
                    city: e.target.value,
                  },
                })
              }
              value={updateStudent.address.city}
              className="  outline-none text-clamp border-b border-red-300"
            />
            <input
              type="text"
              placeholder="province"
              onChange={(e) =>
                setUpdateStudent({
                  ...updateStudent,
                  address: {
                    ...updateStudent.address,
                    province: e.target.value,
                  },
                })
              }
              value={updateStudent.address.province}
              className="  outline-none text-clamp border-b border-red-300"
            />
            <input
              type="text"
              placeholder="region"
              onChange={(e) =>
                setUpdateStudent({
                  ...updateStudent,
                  address: {
                    ...updateStudent.address,
                    region: e.target.value,
                  },
                })
              }
              value={updateStudent.address.region}
              className="  outline-none text-clamp border-b border-red-300"
            />
            <input
              type="text"
              placeholder="postal code"
              onChange={(e) =>
                setUpdateStudent({
                  ...updateStudent,
                  address: {
                    ...updateStudent.address,
                    postal_code: e.target.value,
                  },
                })
              }
              value={updateStudent.address.postal_code}
              className="  outline-none text-clamp border-b border-red-300"
            />
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <img
            src="/earist-logo.png"
            alt="img"
            className="w-[200px] object-cover border"
          />
          <UpdateStudentButton updateStudent={updateStudent} />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-2 px-4">
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Email</p>
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={(e) => handleChange(e)}
            value={updateStudent.email}
            className="  outline-none text-clamp border-b border-red-300"
          />
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Year:</p>
          <input
            type="text"
            placeholder="school year"
            id="school_year"
            onChange={(e) => handleChange(e)}
            value={updateStudent.school_year}
            className="  outline-none text-clamp border-b border-red-300"
          />
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Section</p>
          <input
            type="text"
            placeholder="school section"
            id="school_section"
            onChange={(e) => handleChange(e)}
            value={updateStudent.school_section}
            className="  outline-none text-clamp border-b border-red-300"
          />
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">College</p>
          <input
            type="text"
            placeholder="school college"
            id="school_college"
            onChange={(e) => handleChange(e)}
            value={updateStudent.school_college}
            className="  outline-none text-clamp border-b border-red-300"
          />
        </span>
        <span className="col-span-2 flex flex-col justify-center gap-1">
          <p className=" text-xs text-red-500 font-bold">Course</p>
          <input
            type="text"
            placeholder="school course"
            id="school_course"
            onChange={(e) => handleChange(e)}
            value={updateStudent.school_course}
            className="  outline-none text-clamp border-b border-red-300"
          />
        </span>
      </div>
    </div>
  );
};

export default UpdatingInfo;
