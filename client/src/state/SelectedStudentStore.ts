import { TStudent } from "@/student.type";
import { create } from "zustand";

type TSelectedStudentStoreProps = {
  seletedStudent: TStudent | null;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setSeletedStudent: (student: TStudent | null) => void;
  update: boolean;
  setUpdate: (update: boolean) => void;
};

const SelectedStudentStore = create<TSelectedStudentStoreProps>()((set) => ({
  seletedStudent: null,
  isLoading: false,
  setIsLoading: (isLoading) => {
    set({ isLoading });
  },
  update: false,
  setUpdate: (update) => {
    set({ update });
  },
  setSeletedStudent: (student) => {
    set({ seletedStudent: student });
  },
}));

export default SelectedStudentStore;
