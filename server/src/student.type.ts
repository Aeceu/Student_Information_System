export type TStudentLogin = {
  data: {
    student_number: string;
    password: string;
  };
};

export type TStudentSignUp = {
  data: {
    student_number: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
    age: number;
    birth_date: string;
    contact_number: string;
    address: {
      Street_name: string;
      baranggay: string;
      city: string;
      province: string;
      region: string;
      postal_code: string;
    };
    email: string;
    password: string;
    school_year: string;
    school_college: string;
    school_course: string;
    school_section: string;
    role: string;
    type: "REGULAR" | "IRREGULAR";
  };
};

export type TStudent = {
  id: string;
  student_number: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  age: number;
  birth_date: string;
  contact_number: string;
  address: {
    Street_name: string;
    baranggay: string;
    city: string;
    province: string;
    region: string;
    postal_code: string;
  };
  refreshToken?: string | null;
  email: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
  school_year: string | null;
  school_college: string | null;
  school_course: string | null;
  school_section: string | null;
  role: "STUDENT" | "ADMIN" | "PROFESSOR";
  type: "REGULAR" | "IRREGULAR";
};

export type TTokenData = {
  student_data: {
    id: string;
    student_number: string;
    role: string;
  };
};

export type TUpdateStudent = {
  data: {
    first_name: string;
    middle_name?: string;
    last_name: string;
    age: number;
    birth_date: string;
    contact_number: string;
    address: {
      Street_name: string;
      baranggay: string;
      city: string;
      region: string;
      postal_code: string;
    };
  };
};
