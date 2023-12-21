const NoStudentSelected = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
      <img
        src="/student.svg"
        alt="student"
        className="object-cover w-[300px]"
      />
      <h1 className="text-stone-300 text-2xl uppercase ">
        no student selected
      </h1>
    </div>
  );
};
export default NoStudentSelected;
