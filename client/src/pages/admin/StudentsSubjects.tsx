import { useLocation } from "react-router-dom";

const StudentsSubjects = () => {
  const lol = useLocation();
  return <div>{lol.pathname}</div>;
};
export default StudentsSubjects;
