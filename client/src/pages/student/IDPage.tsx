import BarcodeGenerator from "@/components/BarcodeGenerator";
import NewStore from "@/state/NewStore";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { Link } from "react-router-dom";

const IDPage = () => {
  const selectedStudent = NewStore((state) => state.selectedStudent);
  return (
    <div className="relative overflow-hidden h-full w-full flex flex-col sitems-center justify-center gap-2 bg-[url(/bodybg.jpg)]">
      <Link
        to="/admin/dashboard"
        className="text-white z-40 flex items-center  gap-2 absolute top-5 left-5 hover:border-b hover:border-white hover:scale-105 duration-200 transition-all"
      >
        <LuArrowLeftFromLine size="1.2rem" /> Dashboard
      </Link>
      <img src="/uni.jpg" alt="uni" className="absolute opacity-10" />
      <div className="w-full flex flex-col items-center justify-center mb-8">
        <h1 className="text-white text-2xl font-bold">
          IDENTIFICATION CARD OF:
        </h1>
        <p className="text-white text-2xl font-bold">
          {`${selectedStudent?.first_name} ${selectedStudent?.middle_name[0]}. ${selectedStudent?.last_name}`}
        </p>
      </div>
      <div className="w-full flex items-center justify-center gap-2">
        <span className="flex flex-col gap-1 items-center ">
          <p className="text-sm text-white font-bold">FRONT</p>
          <FRONTID />
        </span>
        <span className="flex flex-col gap-1 items-center ">
          <p className="text-sm text-white font-bold">BACK</p>
          <BACKID />
        </span>
      </div>
    </div>
  );
};
export default IDPage;

const FRONTID = () => {
  const selectedStudent = NewStore((state) => state.selectedStudent);
  return (
    <div className="relative overflow-hidden w-[180px] h-[280px] shadow-xl bg-gradient-to-b from-red-900 via-red-200 to-red-50 rounded-xl flex flex-col justify-between">
      <div className="absolute w-full h-1/2 rounded-xl bg-[url(/uni_id.jpg)] bg-cover bg-center opacity-10" />
      <div className="absolute bottom-0 -right-20 w-full h-1/2 rounded-xl bg-[url(/earist-logo.png)] bg-cover bg-center opacity-20" />
      <div className="z-40 flex items-center gap-1 p-2 px-2">
        <img
          src="/earist-logo.png"
          alt="earist logo"
          className="object-cover w-[45px] h-[45px]"
        />
        <span className="text-white flex flex-col justify-center text-[6px] w-full">
          <h1>Republic of the Philippines</h1>
          <h1>EULOGIO "AMANG" RODRIGUEZ </h1>
          <h1 className="w-max">INSTITUTE OF SCIENCE AND TECHNOLOGY</h1>
          <p>Nagtahan, Sampaloc, Manila</p>
        </span>
      </div>
      <div className="z-40  flex items-center justify-center w-full  px-2">
        <img
          src={selectedStudent?.profile_image.secure_url}
          alt="id"
          className="w-[90px] h-[90px] object-cover"
        />

        <div className="flex flex-col gap-[1px]">
          <span className="p-1 font-bold bg-red-600 text-yellow-500 flex  items-center gap-2  text-xs">
            <p className="text-[8px] leading-[10px]">
              1ST
              <br />
              SEM
            </p>
            <h1 className="w-max">2022-2023</h1>
          </span>
          <span className="p-1 font-bold bg-red-600 text-yellow-500 flex items-center gap-2  text-xs">
            <p className="text-[8px] leading-[10px]">
              2ND
              <br />
              SEM
            </p>
            <h1 className="w-max">2022-2023</h1>
          </span>
        </div>
      </div>
      <div className="z-40  w-full flex flex-col items-center justify-center px-2">
        <span className="flex flex-col w-full items-center">
          <h1 className="text-center w-full border-b border-black text-[10px] font-bold">
            {`${selectedStudent?.first_name} ${selectedStudent?.middle_name[0]}. ${selectedStudent?.last_name}`}
          </h1>
          <p className="text-[8px] font-bold">NAME</p>
          <h1 className="text-center w-full border-b border-black text-[10px] font-bold">
            {selectedStudent?.student_number}
          </h1>
          <p className="text-[8px] font-bold">STUDENT NUMBER</p>
        </span>
      </div>
      <div className="z-40  bg-red-600 w-full flex items-center gap-1 rounded-b-xl p-2">
        <h1 className="text-sm text-yellow-500 font-bold">CAS</h1>
        <h1 className="w-full text-[8px] text-center text-yellow-500">
          Bachelor of Science in Computer Science
        </h1>
      </div>
    </div>
  );
};

const BACKID = () => {
  const seletedStudent = NewStore((state) => state.selectedStudent);
  return (
    <div className="relative overflow-hidden w-[180px] h-[280px] shadow-xl border  text-black bg-white rounded-xl flex flex-col p-2">
      <div className="w-full flex flex-col  rounded-md  border border-black">
        <span className="flex flex-col justify-center p-1">
          <p className="text-[7px] font-bold ">ADDRESS:</p>
          <p className="text-[7px] font-bold">{`${seletedStudent?.address.Street_name} ${seletedStudent?.address.baranggay} ${seletedStudent?.address.city} ${seletedStudent?.address.province} ${seletedStudent?.address.region} ${seletedStudent?.address.postal_code}`}</p>
        </span>
        <span className="flex items-center gap-1 px-1">
          <p className="text-[7px] font-bold ">CONTACT NO.:</p>
          <p className="text-[7px] font-bold">
            {seletedStudent?.contact_number}
          </p>
        </span>
        <span className="flex items-center gap-1 px-1">
          <p className="text-[7px] font-bold ">DATE OF BIRTH:</p>
          <p className="text-[7px] font-bold">{seletedStudent?.birth_date}</p>
        </span>
        <span className="border-t border-black h-[20px] w-full"></span>
      </div>
      <h1 className="text-[8px] w-full text-center font-bold text-black">
        STUDENT SIGNATURE
      </h1>
      <div className="w-full flex flex-col  rounded-md border border-black">
        <p className="text-[7px] font-bold text-center">
          IN CASE OF EMERGENCR, PLS. NOTIFY
        </p>
        <span className="flex items-center gap-1 px-2 mt-1">
          <p className="text-[7px] font-bold ">NAME:</p>
          <p className="text-[7px] font-bold">MOTHER</p>
        </span>
        <span className="flex items-center gap-1 px-2">
          <p className="text-[7px] font-bold ">CONTACT NO.:</p>
          <p className="text-[7px] font-bold">NUMBER</p>
        </span>
        <span className="flex items-center gap-1 px-2">
          <p className="text-[7px] font-bold ">ADDRESS:</p>
          <p className="text-[7px] font-bold">home address</p>
        </span>
      </div>
      <div className="w-full flex flex-col  rounded-md border border-black mt-1">
        <h1 className="ml-2 text-[5px] font-bold">
          @ THIS CARD IS NON-TRANSFERABLE
        </h1>
        <h1 className="ml-2 text-[5px] font-bold">
          @ REPORT LOSS OF THIS I.D TO THE REGISTRAR'S OFFICE
        </h1>
        <h1 className="ml-2 text-[5px] font-bold">
          @ ALWAyS WEAR YOUR I.D. INSIDE THE CAMPUS
        </h1>
        <h1 className="ml-2 text-[5px] font-bold">
          @ SURRENDER THIS I.D. TO THE REGISTRAR'S OFFICE UPON WITHDRAWAL FROM
          E.A.R.I.S.T
        </h1>

        <span className="w-full flex flex-col items-center justify-center mt-4">
          <h1 className="text-[9px] font-bold">JULIE ANN O. ESPIRITU, JD</h1>
          <p className="text-[7px] font-bold">REGISTRAR</p>
        </span>
      </div>
      <div className="mt-1 w-full flex items-center justify-center">
        <BarcodeGenerator />
      </div>
    </div>
  );
};
