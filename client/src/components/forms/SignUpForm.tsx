import axios from "@/api/axios";
import { AxiosError, isAxiosError } from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  LuArrowLeftToLine,
  LuArrowRightToLine,
  LuLoader2,
} from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    student_number: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    age: 0,
    birth_date: "",
    contact_number: "",
    address: {
      Street_name: "",
      baranggay: "",
      city: "",
      region: "",
      province: "",
      postal_code: "",
    },
    email: "",
    password: "",
    school_year: "",
    school_college: "",
    school_course: "",
    school_section: "",
    type: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/student/signup", { data });
      alert(res.data);
      navigate("/login");
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (typeof axiosError.response?.data === "string") {
          console.log(axiosError.response.data);
          alert(axiosError.response.data);
        }
      }
    } finally {
      setLoading(false);
      setData({
        student_number: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        age: 0,
        birth_date: "",
        contact_number: "",
        address: {
          Street_name: "",
          baranggay: "",
          city: "",
          region: "",
          province: "",
          postal_code: "",
        },
        email: "",
        password: "",
        school_year: "",
        school_college: "",
        school_course: "",
        school_section: "",
        type: "",
      });
    }
  };

  const handleClearEntries = () => {
    setData({
      student_number: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      age: 0,
      birth_date: "",
      contact_number: "",
      address: {
        Street_name: "",
        baranggay: "",
        city: "",
        region: "",
        province: "",
        postal_code: "",
      },
      email: "",
      password: "",
      school_year: "",
      school_college: "",
      school_course: "",
      school_section: "",
      type: "REGULAR",
    });
  };

  return (
    <div className="text-black relative w-full min-h-screen flex   justify-center bg-[url(./bodybg.jpg)] bg-cover bg-center p-4">
      <img
        src="./uni.jpg"
        alt="uni"
        className="absolute top-0 left-0 w-full h-full opacity-10"
      />

      <form
        id="student_form"
        onSubmit={handleSubmit}
        className="w-full h-full p-4 z-10 bg-white rounded-sm shadow-xl border-2 border-red-500"
      >
        <Link
          to="/login"
          className="flex items-center gap-1 text-xs px-2 hover:text-red-500 w-max"
        >
          <LuArrowLeftToLine size="1rem" />
          Go back
        </Link>

        <div className="w-full flex items-center gap-2 p-2">
          <p className="w-[250px] text-lg text-red-500 font-bold">
            Personal Information
          </p>
          <div className="w-full h-[1px] border-b border-amber-500" />
        </div>
        {/* fullname */}
        <span className="w-full flex items-center gap-2 p-2">
          <span className="flex flex-col w-full gap-1">
            <p className="text-xs text-slate-950">firstname:</p>
            <input
              type="text"
              id="first_name"
              value={data.first_name}
              onChange={(e) => handleChange(e)}
              placeholder="firstname"
              className="text-sm outline-none w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
            />
          </span>
          <span className="flex flex-col w-full gap-1">
            <p className="text-xs text-slate-950">middlename:</p>
            <input
              type="text"
              id="middle_name"
              value={data.middle_name}
              onChange={(e) => handleChange(e)}
              placeholder="middlename"
              className="text-sm outline-none w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
            />
          </span>
          <span className="flex flex-col w-full gap-1">
            <p className="text-xs text-slate-950">lastname:</p>
            <input
              type="text"
              id="last_name"
              value={data.last_name}
              onChange={(e) => handleChange(e)}
              placeholder="lastname"
              className="text-sm outline-none w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
            />
          </span>
        </span>
        {/* age and birthdate*/}
        <span className="w-full flex items-center gap-2 p-2">
          <span className="flex flex-col w-full gap-1">
            <p className="text-xs text-slate-950">age:</p>
            <input
              type="number"
              id="age"
              value={data.age}
              onChange={(e) => handleChange(e)}
              placeholder="age"
              className="text-sm outline-none w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
            />
          </span>
          <span className="flex flex-col w-full gap-1">
            <p className="text-xs text-slate-950">birthday:</p>
            <input
              type="date"
              id="birth_date"
              value={data.birth_date}
              onChange={(e) => handleChange(e)}
              placeholder="birthdate"
              className="text-sm outline-none w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
            />
          </span>
        </span>
        {/* Contact Information */}
        <span className="w-full flex items-center gap-2 p-2">
          <span className="flex flex-col w-full gap-1">
            <p className="text-xs text-slate-950">contact number:</p>
            <input
              type="text"
              id="contact_number"
              value={data.contact_number}
              onChange={(e) => handleChange(e)}
              placeholder="contact number"
              className="text-sm outline-none w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
            />
          </span>
          <span className="flex flex-col w-full gap-1">
            <p className="text-xs text-slate-950">email:</p>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
              placeholder="email"
              className="text-sm outline-none w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
            />
          </span>
          <span className="flex flex-col w-full gap-1">
            <p className="text-xs text-slate-950">password:</p>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) => handleChange(e)}
              placeholder="password"
              className="text-sm outline-none w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
            />
          </span>
        </span>
        {/* Address */}
        <div className="w-full flex items-center gap-2 p-2">
          <p className=" text-lg text-red-500 font-bold">Address</p>
          <div className="w-full h-[1px] border-b border-amber-500" />
        </div>
        <span className="w-full flex items-center gap-2 p-2">
          <input
            type="text"
            id="region"
            value={data.address.region}
            onChange={(e) =>
              setData({
                ...data,
                address: { ...data.address, region: e.target.value },
              })
            }
            placeholder="region"
            className="w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
          <input
            type="text"
            id="province"
            value={data.address.province}
            onChange={(e) =>
              setData({
                ...data,
                address: { ...data.address, province: e.target.value },
              })
            }
            placeholder="province"
            className="w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
          <input
            type="text"
            id="city"
            value={data.address.city}
            onChange={(e) =>
              setData({
                ...data,
                address: { ...data.address, city: e.target.value },
              })
            }
            placeholder="city"
            className="w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
          <input
            type="text"
            id="baranggay"
            value={data.address.baranggay}
            onChange={(e) =>
              setData({
                ...data,
                address: { ...data.address, baranggay: e.target.value },
              })
            }
            placeholder="baranggay"
            className="w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
        </span>
        <span className="w-full flex items-center gap-2 p-2">
          <input
            type="text"
            id="postal_code"
            value={data.address.postal_code}
            onChange={(e) =>
              setData({
                ...data,
                address: { ...data.address, postal_code: e.target.value },
              })
            }
            placeholder="postal code"
            className="w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
          <input
            type="text"
            id="street_name"
            value={data.address.Street_name}
            onChange={(e) =>
              setData({
                ...data,
                address: { ...data.address, Street_name: e.target.value },
              })
            }
            placeholder="street name, building, house."
            className="w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
        </span>

        <div className="w-full flex items-center gap-2 p-2">
          <p className=" text-lg text-red-500 font-bold">School</p>
          <div className="w-full h-[1px] border-b border-amber-500" />
        </div>

        <span className="w-full flex items-center gap-2 p-2">
          <input
            type="text"
            id="student_number"
            value={data.student_number}
            onChange={(e) => handleChange(e)}
            placeholder="student number ex.(214-08299M)"
            className="w-1/2 px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
          <span className=" flex items-center gap-2 p-2">
            <span className="flex flex-col w-full gap-1">
              <p className="text-xs text-slate-950">Type of Student:</p>
              <select
                form="student_form"
                name="types"
                id="types"
                onChange={(e) => {
                  setData({ ...data, type: e.target.value });
                  console.log(e.target.value);
                  console.log(data.type);
                }}
                className="outline-none text-sm border shadow-xl border-red-500 rounded-sm"
              >
                <option value="REGULAR">Regular Student</option>
                <option value="IRREGULAR">Irregular Student</option>
              </select>
            </span>
          </span>
        </span>

        <span className="w-full flex items-center gap-2 p-2">
          <input
            type="text"
            id="school_section"
            value={data.school_section}
            onChange={(e) => handleChange(e)}
            placeholder="school section ex.(BSCS - 2C)"
            className="w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
          <input
            type="text"
            id="school_year"
            value={data.school_year}
            onChange={(e) => handleChange(e)}
            placeholder="school year ex.(3rd year)"
            className="w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
        </span>
        <span className="w-full flex items-center gap-2 p-2">
          <input
            type="text"
            id="school_college"
            value={data.school_college}
            onChange={(e) => handleChange(e)}
            placeholder="school college ex.(college of science)"
            className="w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
          <input
            type="text"
            id="school_course"
            value={data.school_course}
            onChange={(e) => handleChange(e)}
            placeholder="school course ex.(bachelor of science in Computer Science)"
            className="w-full px-4 py-1 border border-red-500 rounded-sm shadow-xl"
          />
        </span>

        <span className="w-full flex items-center justify-end p-2 gap-4">
          <button
            type="button"
            onClick={handleClearEntries}
            className="px-8 py-1 bg-amber-500 rounded-sm shadow-xl text-white flex items-center gap-1 hover:scale-110 transition-all duration-200"
          >
            Clear Entries
          </button>
          <button
            disabled={loading}
            type="submit"
            className="px-8 py-1 bg-red-500 rounded-sm shadow-xl text-white flex items-center gap-1 hover:scale-110 transition-all duration-200"
          >
            {loading ? (
              <LuLoader2 size="1.3rem" className="animate-spin" />
            ) : (
              "Sign up"
            )}
            <LuArrowRightToLine size="1.3rem" />
          </button>
        </span>
      </form>
    </div>
  );
};
export default SignUpForm;
