import { ChangeEvent, useEffect, useState } from "react";
import UpdateStudentButton from "./UpdateStudentButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NewStore from "@/state/NewStore";
const UpdatingInfo = () => {
  const student = NewStore((state) => state.selectedStudent);
  const [updateStudent, setUpdateStudent] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    age: 0,
    birth_date: "",
    gender: "",
    religion: "",
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
        gender: student.gender,
        religion: student.religion,
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
    e.target.style.backgroundColor = "rgb(252,165,165)";
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full  p-4 flex items-center justify-between  gap-4">
        <div className="w-full h-full grid  grid-cols-3 gap-2">
          <span className="col-span-3 flex items-center justify-between ">
            <h1 className=" text-2xl  text-red-500 ">
              Update Student's Profile
            </h1>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Firstname:</p>
            <input
              type="text"
              placeholder="firstname"
              id="first_name"
              onChange={(e) => handleChange(e)}
              value={updateStudent.first_name}
              className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
              className="px-3 py-1.5 outline-none text-xs border-b border-red-300"
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
              className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
              className="px-3 py-1.5 outline-none text-xs border-b border-red-300"
            />
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Student type:</p>
            <Select
              value={updateStudent.type}
              onValueChange={(e) => {
                setUpdateStudent({ ...updateStudent, type: e });
                ``;
              }}
            >
              <SelectTrigger className="h-[30px] w-full text-xs border-b border-red-300 rounded-none">
                <SelectValue placeholder="pick your  student type" />
              </SelectTrigger>
              <SelectContent className="border border-red-500">
                <SelectGroup>
                  <SelectLabel className="text-xs text-red-500">
                    Type
                  </SelectLabel>
                  <SelectItem className="text-xs" value="REGULAR">
                    REGULAR
                  </SelectItem>
                  <SelectItem className="text-xs" value="IRREGULAR">
                    IRREGULAR
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Age</p>
            <Select
              value={String(updateStudent.age)}
              onValueChange={(e) =>
                setUpdateStudent({ ...updateStudent, age: Number(e) })
              }
            >
              <SelectTrigger className="h-[30px] w-full text-xs border-b border-red-300 rounded-none">
                <SelectValue placeholder="pick your age" />
              </SelectTrigger>
              <SelectContent className="border border-red-500">
                <SelectGroup>
                  <SelectLabel className="text-xs text-red-500">
                    Age
                  </SelectLabel>
                  <SelectItem className="text-xs" value="18">
                    18
                  </SelectItem>
                  <SelectItem className="text-xs" value="19">
                    19
                  </SelectItem>
                  <SelectItem className="text-xs" value="20">
                    20
                  </SelectItem>
                  <SelectItem className="text-xs" value="21">
                    21
                  </SelectItem>
                  <SelectItem className="text-xs" value="22">
                    22
                  </SelectItem>
                  <SelectItem className="text-xs" value="23">
                    23
                  </SelectItem>
                  <SelectItem className="text-xs" value="24">
                    24
                  </SelectItem>
                  <SelectItem className="text-xs" value="25">
                    25
                  </SelectItem>
                  <SelectItem className="text-xs" value="26">
                    26
                  </SelectItem>
                  <SelectItem className="text-xs" value="27">
                    27
                  </SelectItem>
                  <SelectItem className="text-xs" value="28">
                    28
                  </SelectItem>
                  <SelectItem className="text-xs" value="29">
                    29
                  </SelectItem>
                  <SelectItem className="text-xs" value="30">
                    30
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Gender:</p>
            <Select
              value={updateStudent.gender}
              onValueChange={(e) =>
                setUpdateStudent({ ...updateStudent, gender: e })
              }
            >
              <SelectTrigger className="h-[30px] w-full text-xs border-b border-red-300 rounded-none">
                <SelectValue placeholder="pick your gender" />
              </SelectTrigger>
              <SelectContent className="border border-red-500">
                <SelectGroup>
                  <SelectLabel className="text-xs text-red-500">
                    Type
                  </SelectLabel>
                  <SelectItem className="text-xs" value="MALE">
                    MALE
                  </SelectItem>
                  <SelectItem className="text-xs" value="FEMALE">
                    FEMALE
                  </SelectItem>
                  <SelectItem className="text-xs" value="GAY">
                    GAY
                  </SelectItem>
                  <SelectItem className="text-xs" value="LESBIAN">
                    LESBIAN
                  </SelectItem>
                  <SelectItem className="text-xs" value="UNKNOWN">
                    Prefer not to say
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Religion:</p>
            <Select
              value={updateStudent.religion}
              onValueChange={(e) =>
                setUpdateStudent({ ...updateStudent, religion: e })
              }
            >
              <SelectTrigger className="h-[30px] w-full text-xs border-b border-red-300 rounded-none">
                <SelectValue placeholder="pick your religion" />
              </SelectTrigger>
              <SelectContent className="border border-red-500">
                <SelectGroup>
                  <SelectLabel className="text-xs text-red-500">
                    Type
                  </SelectLabel>
                  <SelectItem className="text-xs" value="Catholic">
                    Catholic
                  </SelectItem>
                  <SelectItem className="text-xs" value="Iglesia ni Cristo">
                    Iglesia ni Cristo
                  </SelectItem>
                  <SelectItem className="text-xs" value="Born again">
                    Born again
                  </SelectItem>
                  <SelectItem className="text-xs" value="Muslim">
                    Muslim
                  </SelectItem>
                  <SelectItem className="text-xs" value="Mormon">
                    Mormon
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Birthdate:</p>
            <input
              type="date"
              placeholder="birthdate"
              id="birth_date"
              onChange={(e) => handleChange(e)}
              value={updateStudent.birth_date}
              className="px-2 py-1  outline-none text-xs border-b border-red-300"
            />
          </span>

          <span className="flex flex-col justify-center gap-1">
            <p className="text-xs text-red-500 font-bold">Contact number:</p>
            <input
              type="text"
              placeholder="contact number"
              id="contact_number"
              onChange={(e) => handleChange(e)}
              value={updateStudent.contact_number}
              className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
            />
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <img
            src={student?.profile_image.secure_url}
            alt="img"
            className="w-[200px] object-cover border"
          />
          {student?.id && (
            <UpdateStudentButton
              updateStudent={updateStudent}
              id={student.id}
            />
          )}
        </div>
      </div>
      <div className="w-full  grid grid-cols-3 gap-2 px-4">
        <span className="col-span-3 w-full grid grid-cols-3  gap-2">
          <p className="text-xs text-red-500 font-bold col-span-3">Address:</p>
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
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
          />
        </span>
        <span className="flex flex-col justify-center gap-1">
          <p className="text-xs text-red-500 font-bold">Email</p>
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={(e) => handleChange(e)}
            value={updateStudent.email}
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
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
            className="px-3 py-1.5  outline-none text-xs border-b border-red-300"
          />
        </span>
      </div>
    </div>
  );
};

export default UpdatingInfo;
