export type TAdmin = {
  id: string;
  name: string;
  password?: string | null;
  refreshToken?: string | null;
  role: string;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type TAdminSignUp = {
  data: {
    name: string;
    password: string;
  };
};

export type TAdminLogin = {
  data: {
    name: string;
    password: string;
  };
};

export type TAdminUpdateStudentInfo = {
  data: {
    student_number: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    age: number;
    birth_date: string;
    contact_number: string;
    gender: "MALE" | "FEMALE" | "GAY" | "LESBIAN" | "UNKNOWN";
    religion: string;
    address: {
      Street_name: string;
      baranggay: string;
      city: string;
      region: string;
      postal_code: string;
    };
    email: string;
    school_year: string | null;
    school_college: string | null;
    school_course: string | null;
    school_section: string | null;
    role: "STUDENT" | "ADMIN" | "PROFESSOR";
    type: "REGULAR" | "IRREGULAR";
  };
};
