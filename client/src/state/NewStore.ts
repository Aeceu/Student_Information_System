import { axiosPrivate } from "@/api/axios";
import { TStudent, TStudentSubjects } from "@/student.type";
import { create } from "zustand";

type TNewStoreProps = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  selectedStudent: TStudent | null;
  setSelectedStudent: (student: TStudent | null) => void;
  clearSelectedStudent: () => void;
  subjectsEnrolled: TStudentSubjects | null;
  fetchSubjectsEnrolled: (params: string) => Promise<void>;
  fetchStudentsWithoutSearch: () => Promise<TStudent[] | null>;
  fetchStudentsWithSearch: (search: string) => Promise<TStudent[] | null>;
  fetchSelectedStudent: (id: string) => Promise<void>;
};

const NewStore = create<TNewStoreProps>()((set) => ({
  selectedStudent: null,
  subjectsEnrolled: null,
  isLoading: false,
  clearSelectedStudent: () => {
    set({ selectedStudent: null });
  },
  setSelectedStudent: (student) => {
    set({ selectedStudent: student });
  },
  setIsLoading: (isLoading) => {
    set({ isLoading });
  },
  fetchSubjectsEnrolled: async (params) => {
    try {
      const res = await axiosPrivate.get(`/student/subjects/${params}`);
      set({ subjectsEnrolled: res.data });
    } catch (error) {
      console.log(error);
    }
  },
  fetchStudentsWithoutSearch: async () => {
    try {
      const res = await axiosPrivate.get("/students");
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  fetchStudentsWithSearch: async (search) => {
    try {
      const res = await axiosPrivate.post("/students", { search });
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  fetchSelectedStudent: async (id) => {
    try {
      const res = await axiosPrivate.get(`/student/${id}`);
      set({ selectedStudent: res.data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default NewStore;
