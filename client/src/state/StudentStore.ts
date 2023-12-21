import { TStudent } from "@/student.type";
import { create } from "zustand";

type TStudentStore = {
  student: TStudent | null;
  setStudent: (student: TStudent | null) => void;
  token: string;
  setToken: (token: string) => void;
};

const StudentStore = create<TStudentStore>()((set) => ({
  student: null,
  setStudent: (student) => {
    set({ student });
  },
  token: "",
  setToken: (token) => {
    set({ token });
  },
}));

export default StudentStore;
