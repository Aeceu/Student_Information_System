import { axiosPrivate } from "@/api/axios";
import { TStudentSubjects } from "@/student.type";
import { create } from "zustand";

type TNewStoreProps = {
  subjectsEnrolled: TStudentSubjects | null;
  fetchSubjectsEnrolled: (params: string) => Promise<void>;
};

const NewStore = create<TNewStoreProps>()((set) => ({
  subjectsEnrolled: null,
  fetchSubjectsEnrolled: async (params) => {
    try {
      const res = await axiosPrivate.get(`/student/subjects/${params}`);
      set({ subjectsEnrolled: res.data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default NewStore;
