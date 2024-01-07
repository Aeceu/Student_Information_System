export type TStudent = {
  id: string;
  student_number: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  age: number;
  birth_date: string;
  contact_number: string;
  gender: "MALE" | "FEMALE" | "GAY" | "LESBIAN" | "UNKNOWN" | string;
  religion: string;
  address: {
    Street_name: string;
    baranggay: string;
    city: string;
    region: string;
    province: string;
    postal_code: string;
  };
  profile_image: {
    id: string;
    secure_url: string;
    image_url: string;
  };
  emergency: {
    name: string;
    contact_number: string;
    relation: string;
  };
  refreshToken?: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  school_year: string;
  school_college: string;
  school_course: string;
  school_section: string;
  role: string;
  type: "REGULAR" | "IRREGULAR" | string;
};

export type TUpdateStudent = {
  first_name: string;
  middle_name: string;
  last_name: string;
  age: number;
  birth_date: string;
  gender: "MALE" | "FEMALE" | "GAY" | "LESBIAN" | "UNKNOWN" | string;
  religion: string;
  address: {
    baranggay: string;
    city: string;
    postal_code: string;
    province: string;
    region: string;
    Street_name: string;
  };
  emergeny: {
    name: string;
    contact_number: string;
    relation: string;
  };
  contact_number: string;
  email: string;
  role: string;
  type: string;
  student_number: string;
  school_college: string;
  school_course: string;
  school_section: string;
  school_year: string;
};

export type TUpdateSubjectEnrolled = {
  id?: string;
  code: string;
  subject_name: string;
  units: number;
  grade?: number;
  professor?: string;
};

export type SemesterEnrolled = {
  id: string;
  grade?: number;
  code: string;
  subject_name: string;
  units: number;
  professor?: string;
  createdAt: string;
  updatedAt: string;
  semesterGradesId: string;
};

export type SemesterGrades = {
  id: string;
  semester: string;
  createdAt: string;
  updatedAt: string;
  firstYearGradesId: string | null;
  secondYearGradesId: string | null;
  thirdYearGradesId: string | null;
  fourthYearGradesId: string | null;
  subjects_enrolled: SemesterEnrolled[];
};

export type YearGrades = {
  id: string;
  year: string;
  subjectsGradesId: string;
  semester_grades: SemesterGrades[];
};

export type TStudentSubjects = {
  id: string;
  studentId: string;
  FirstYearGrades: YearGrades[];
  SecondYearGrades: YearGrades[];
  ThirdYearGrades: YearGrades[];
  FourthYearGrades: YearGrades[];
};
