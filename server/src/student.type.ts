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
    gender: "MALE" | "FEMALE" | "GAY" | "LESBIAN" | "UNKNOWN";
    religion: string;
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
  file: string | null;
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
  gender: "MALE" | "FEMALE" | "GAY" | "LESBIAN" | "UNKNOWN";
  religion: string;
  profile_image?: {
    id: string;
    secure_url: string;
    image_url: string;
  } | null;
  address: {
    Street_name: string;
    baranggay: string;
    city: string;
    province: string;
    region: string;
    postal_code: string;
  } | null;
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
    gender: "MALE" | "FEMALE" | "GAY" | "LESBIAN" | "UNKNOWN";
    religion: string;
    address: {
      Street_name: string;
      baranggay: string;
      city: string;
      region: string;
      postal_code: string;
    };
  };
};

export type TAddNewYearAndSem = {
  data: {
    year: "FIRST" | "SECOND" | "THIRD" | "FOURTH";
    semester: "FIRST" | "SECOND";
  };
};

export type TAddNewSubjectAndGradesInSem = {
  data: {
    grade?: number;
    code: string;
    subject_name: string;
    units: number;
    professor?: string;
  };
};
