import { TAdmin } from "@/admin.type";
import { create } from "zustand";

type TAdminStore = {
  admin: TAdmin;
  setAdmin: (admin: TAdmin) => void;
  token: string;
  setToken: (token: string) => void;
};

const AdminStore = create<TAdminStore>()((set) => ({
  admin: {
    id: "",
    name: "",
    role: "",
    email: "",
    username: "",
  },
  setAdmin: (admin) => {
    set({ admin });
  },
  token: "",
  setToken: (token) => {
    set({ token });
  },
}));

export default AdminStore;
